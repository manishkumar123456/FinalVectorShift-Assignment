import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Hash } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export const NumberNode = ({ id, data }) => {
    // eslint-disable-next-line react/prop-types
    const [numberValue, setNumberValue] = useState(data?.number || 0);

    const handleNumberChange = (e) => setNumberValue(e.target.value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Number"
                icon={<Hash />} 
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-output` },
                ]}
            />
            <div className="mx-2 mb-2">
                <Label htmlFor="number-input">Number</Label>
                <Input
                    type="number"
                    className="py-1"
                    value={numberValue}
                    onChange={handleNumberChange}
                    id="number-input"
                    placeholder="Enter number"
                />
            </div>
        </div>
    );
};