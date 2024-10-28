//LLMNode Component is a LLM workflow showing component
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { ChartBarIcon } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export const LLMNode = ({ id }) => {
    return (

        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="LLM"
                icon={<ChartBarIcon />}  
                handles={[
                    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100 / 3}%` } },
                    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
                    { type: 'source', position: Position.Right, id: `${id}-response` },
                ]}
            />
            
            <div className="mx-2">
                <span className="block text-center">This is a LLM.</span>
            </div>
        </div>
    );
};

