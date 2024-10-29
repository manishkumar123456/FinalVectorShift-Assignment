from fastapi import FastAPI
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware, allow_origins=["http://localhost:5173","http://localhost:5174"], allow_methods=["*"], allow_headers=["*"])


class Pipeline(BaseModel):
    nodes: list
    edges: list


def is_dag(nodes, edges):
    from collections import defaultdict

    # Create a graph as an adjacency list
    graph = defaultdict(list)
    for edge in edges:
        graph[edge['source']].append(edge['target'])

    def dfs(node, visited, path_visited):
        visited.add(node)
        path_visited.add(node)

        # Visit all the neighbors of the current node
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, visited, path_visited):
                    return True
            elif neighbor in path_visited:
                return True

        path_visited.remove(node)
        return False

    visited = set()
    path_visited = set()

    # Perform DFS from each unvisited node
    for node in (n['id'] for n in nodes):
        if node not in visited:
            if dfs(node, visited, path_visited):
                return False 

    return True  


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline : Pipeline):
    print("inside parse_pipeline")
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    print(num_nodes)
    print(num_edges)
    is_dag_result = is_dag(pipeline.nodes, pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag_result
    }
