import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Calendar } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar as ShadCNCalendar } from '../ui/calendar';

// eslint-disable-next-line react/prop-types
export const DateNode = ({ id, data }) => {
    // eslint-disable-next-line react/prop-types
    const [selectedDate, setSelectedDate] = useState(data?.date || null);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsPopoverOpen(false);
    };

    return (
        <div className='w-52 h-fit py-5 border border-border rounded-[30px] bg-card hover:border hover:border-green-500 transition-all duration-300 ease-in-out'>
            <BaseNode
                title="Date"
                icon={<Calendar />}
                handles={[
                    { type: 'source', position: Position.Right, id: `${id}-output` },
                ]}
            />
            <div className="mx-2 mb-2">
                <Label htmlFor="date-input">Date</Label>
                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                    <PopoverTrigger asChild>
                        <Input
                            type="text"
                            className="py-1"
                            value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                            id="date-input"
                            placeholder="Select date"
                            readOnly
                        />
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                        <ShadCNCalendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDateChange}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};
