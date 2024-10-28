import { PipelineToolbar } from './components/toolbar';
import { PipelineUI } from './components/pipelineUI';
import { SubmitButton } from './components/submit';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    
      <div>
        <ReactFlowProvider>
          <PipelineToolbar />
          <PipelineUI />
          <SubmitButton />
        </ReactFlowProvider> 
      </div> 
  );
}

export default App
