//OutputNode Component it renders a node with output type and name.

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { FileOutputIcon } from 'lucide-react';


// eslint-disable-next-line react/prop-types
export const OutputNode = ({ id, data }) => {
  // eslint-disable-next-line react/prop-types
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  // eslint-disable-next-line react/prop-types
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (value) => {
    setOutputType(value);
  };

  return (
    <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
      <BaseNode
        title="Output"
        icon={<FileOutputIcon />}
        handles={[
          { type: 'target', position: Position.Left, id: `${id}-value` },
        ]}
      />
      <div className="mx-2 mb-2">
        <Label htmlFor="output-name-input">Name</Label>
        <Input
          type="text"
          className="py-1"
          value={currName}
          onChange={handleNameChange}
          id="output-name-input"
          placeholder="Enter name"
        />
      </div>

      <div className="mx-2 mb-2">
        <Label>Type</Label>
        <Select value={outputType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="Text">Text</SelectItem>
              <SelectItem value="File">Image</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};


