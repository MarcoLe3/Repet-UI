'use client';

import { useEffect, useState } from "react";

export default function LoadingSection() {
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const progressIteration = setInterval(() => setProgress(prog => {
            if (prog >= 100) {
                clearInterval(progressIteration);
                return 100
            } else {
                return prog + 10
            }
        }),1000);

        return () => {
            clearInterval(progressIteration)
        }
    },[])

    return (
        <div
            className="rounded-lg h-2 transition-all duration-1000 ease-linear bg-custom-blue"
            style={{width: `${progress}%`}}
        >
            
        </div>
    )
}