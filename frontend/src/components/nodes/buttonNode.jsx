import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Command } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export const ButtonNode = ({ id, data }) => {
    // eslint-disable-next-line react/prop-types
    const [buttonLabel, setButtonLabel] = useState(data?.label || 'Click Me');
    // eslint-disable-next-line react/prop-types
    const [clickAction, setClickAction] = useState(data?.action || '');

    const handleLabelChange = (e) => setButtonLabel(e.target.value);
    const handleActionChange = (e) => setClickAction(e.target.value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Button"
                icon={<Command/>}  
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-output` },
                ]}
            />
            <div className="mx-2 mb-2">
                <Label htmlFor="button-label-input">Button Label</Label>
                <Input
                    type="text"
                    className="py-1"
                    value={buttonLabel}
                    onChange={handleLabelChange}
                    id="button-label-input"
                    placeholder="Enter button label"
                />
            </div>
            <div className="mx-2 mb-2">
                <Label htmlFor="button-action-input">Click Action</Label>
                <Input
                    type="text"
                    className="py-1"
                    value={clickAction}
                    onChange={handleActionChange}
                    id="button-action-input"
                    placeholder="Enter click action"
                />
            </div>
        </div>
    );
};
