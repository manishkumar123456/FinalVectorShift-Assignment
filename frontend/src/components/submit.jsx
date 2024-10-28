import { useState } from 'react';
import { useReactFlow } from 'reactflow';
import { Button } from './ui/button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

export const SubmitButton = () => {
    const { getNodes, getEdges } = useReactFlow();
    const [alertData, setAlertData] = useState(null);

    const handleSubmit = async () => {
        const nodes = getNodes();
        const edges = getEdges();

        const pipelineData = {
            nodes: nodes.map(node => ({ id: node.id, type: node.type })),
            edges: edges.map(edge => ({ id: edge.id, source: edge.source, target: edge.target })),
        };

        try {
            const response = await axios.post('http://localhost:8000/pipelines/parse', pipelineData);
            const result = response.data;
            setAlertData(result);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
        }
    };

    const handleAlertClose = () => {
        setAlertData(null);
    };

    return (
        <div>
            <div className="flex justify-center items-center md:py-10 py-4">
                <Button onClick={handleSubmit} variant="ghost" className="border rounded flex gap-2">
                    <Send />
                    Submit
                </Button>
            </div>

            {alertData && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <Alert className="border border-border bg-card text-card-foreground rounded-lg shadow-lg p-6 w-[90%] max-w-md">
                        <div className="flex items-start">
                            <div className="mr-4 mt-1">
                                {alertData.is_dag ? (
                                    <CheckCircle className="text-green-500 w-8 h-8" />
                                ) : (
                                    <AlertCircle className="text-red-500 w-8 h-8" />
                                )}
                            </div>
                            <div className="flex-1">
                                <AlertTitle className="font-semibold text-lg mb-2">
                                    {alertData.is_dag ? 'Pipeline is a DAG' : 'Pipeline is not a DAG'}
                                </AlertTitle>
                                <AlertDescription className="text-sm space-y-1">
                                    <p><strong>Number of Nodes:</strong> {alertData.num_nodes}</p>
                                    <p><strong>Number of Edges:</strong> {alertData.num_edges}</p>
                                    <p>{alertData.is_dag ? 'The pipeline forms a Directed Acyclic Graph.' : 'The pipeline does not form a Directed Acyclic Graph.'}</p>
                                </AlertDescription>
                                <div className="mt-4 flex justify-end">
                                    <Button onClick={handleAlertClose} variant="primary" className="border rounded">
                                        OK
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Alert>
                </div>
            )}
        </div>
    );
};
