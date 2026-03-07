'use client';

import Button from '@/components/Button/ButtonComponent';

export default function CopyButton({textToCopy}) {
    const clickCopy = (value) => {
        navigator.clipboard.writeText(value);
    }
    return (
        <Button 
            onClick={()=>clickCopy(textToCopy)}
            className = "border-transparent cursor-pointer"
        >
            Copy
        </Button>
    )
}