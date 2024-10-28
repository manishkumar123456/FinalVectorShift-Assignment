import { ModeToggle } from './mode-toggler';
import { DraggableNode } from './draggableNode';
import { Calendar, ChartBar, Command, FileInput, FileOutputIcon, Hash, Key, Mail, TextIcon } from 'lucide-react';

export const PipelineToolbar = () => {

    const nodes = [
        { type: 'customInput', label: 'Input', icon: <FileInput /> },
        { type: 'llm', label: 'LLM', icon: <ChartBar /> },
        { type: 'customOutput', label: 'Output', icon: <FileOutputIcon /> },
        { type: 'text', label: 'Text', icon: <TextIcon /> },
        { type: 'button', label: 'Button', icon: <Command /> },
        { type: 'date', label: 'Date', icon: <Calendar /> },
        { type: 'email', label: 'Email', icon: <Mail /> },
        { type: 'number', label: 'Number', icon: <Hash /> },
        { type: 'password', label: 'Password', icon: <Key /> }
    ];

    return (
        <div className='p-4'>
            <div className='mt-1 flex flex-wrap gap-2'>
                {nodes.map((node, index) => (
                    <DraggableNode
                        key={index}
                        type={node.type}
                        label={node.label}
                        icon={node.icon}
                    />
                ))}
                <ModeToggle />
            </div>
        </div>
    );
};
