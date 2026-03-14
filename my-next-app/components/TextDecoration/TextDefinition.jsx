'use client';
import {useState} from 'react'
export default function TextDefinition({Word,Definition}) {
    const [isHover, setIsHover] = useState(false)

    function HoverForDefinition(){
        setIsHover(state => !state)
    }

    function LeaveToCloseDefinition(){
        setIsHover(state => !state)
    }

    return(
        <div>
            <span 
                className="text-custom-blue relative hover:underline cursor-pointer"
                onMouseOver={HoverForDefinition}
                onMouseLeave={LeaveToCloseDefinition}
            >
                {Word}
            </span>
            {isHover && 
                <p className='absolute border p-2 border-custom-gray rounded-lg bg-background'>
                    {Definition}
                </p>
            }
        </div>
    )
}