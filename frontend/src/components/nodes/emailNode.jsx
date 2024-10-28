import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Mail } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export const EmailNode = ({ id, data }) => {
    // eslint-disable-next-line react/prop-types
    const [email, setEmail] = useState(data?.email || '');

    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Email"
                icon={<Mail />} 
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-output` },
                ]}
            />
            <div className="mx-2 mb-2">
                <Label htmlFor="email-input">Email</Label>
                <Input
                    type="email"
                    className="py-1"
                    value={email}
                    onChange={handleEmailChange}
                    id="email-input"
                    placeholder="Enter email"
                />
            </div>
        </div>
    );
};
