import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Text } from 'lucide-react';
import useAutosizeTextArea from '../autoResizeTextArea';

// eslint-disable-next-line react/prop-types
export const TextNode = ({ id, data }) => {
    // eslint-disable-next-line react/prop-types
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [handles, setHandles] = useState([]);
    const textAreaRef = useRef(null);

    useAutosizeTextArea(textAreaRef.current, currText);

    useEffect(() => {
        const variablePattern = /\{\{([a-zA-Z][a-zA-Z0-9._-]*)\}\}/g;
        const variables = [];
        let match;

        while ((match = variablePattern.exec(currText)) !== null) {
            variables.push(match[1]);
        }

        setHandles(variables.map((variable, index) => ({
            type: 'target',
            position: Position.Left,
            id: `${id}-${variable}-${index}`,
            variable,
            style: { top: `calc(${100 / (variables.length + 1) * (index + 1)}%)` }
        })));

    }, [currText, id]);

    const handleTextChange = (e) => setCurrText(e.target.value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                id={id}
                title="Text"
                icon={<Text />}
                handles={[...handles, { type: 'source', position: Position.Right, id: `${id}-output` }]}
            />
            <div className="mx-2 mb-2">
                <Label className='flex flex-col' htmlFor="text-input">Text
                    <textarea
                        ref={textAreaRef}
                        className='
                            max-h-40
                            mt-1
                            block
                            w-full
                            px-3
                            py-2
                            text-sm
                            leading-5
                            text-card-foreground
                            border
                            border-input
                            bg-transparent
                            rounded-md
                            shadow-sm
                            placeholder-muted-foreground
                            focus:outline-none
                            focus:ring-ring
                            focus:border-ring
                            transition
                            resize-none
                            &::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                        '
                        value={currText}
                        onChange={handleTextChange}
                        id="text-input"
                        placeholder="Enter text"
                    />
                </Label>
            </div>
        </div>
    );
};
