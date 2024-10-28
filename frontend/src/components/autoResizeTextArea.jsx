/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

const useautoResizeTextArea = (
    textAreaRef,
    value
) => {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, value]);
    
}

export default  useautoResizeTextArea ;