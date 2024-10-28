// InputNode Component it renders a node with input type and name.

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { FormInput } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

// eslint-disable-next-line react/prop-types
export const InputNode = ({ id, data }) => {
    // eslint-disable-next-line react/prop-types
    const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
    // eslint-disable-next-line react/prop-types
    const [inputType, setInputType] = useState(data.inputType || 'Text');

    const handleNameChange = (e) => setCurrName(e.target.value);
    const handleTypeChange = (value) => setInputType(value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Input"
                icon={<FormInput />}
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-value` },
                ]}
            />
            <div className="mb-2 mx-2">
                <Label htmlFor="name-input">Name</Label>
                <Input
                    type="text"
                    className="py-1"
                    value={currName}
                    onChange={handleNameChange}
                    id="name-input"
                    placeholder="Enter name"
                />
            </div>

            <div className="mx-2">
                <Label>Type</Label>
                <Select value={inputType} onValueChange={handleTypeChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Type:</SelectLabel>
                            <SelectItem value="Text">Text</SelectItem>
                            <SelectItem value="File">File</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};



