'use client';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.js';
import { useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';

export default function CodeCard() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre><code className="language-jsx">
            {`export default function Button(props){
                const {children, icon, setIconPosition, ...rest} = props;
                const validIconPositions = ["start","end"];
                if (icon && setIconPosition && !validIconPositions.includes(setIconPosition)){
                    throw new Error("Invalid prop please check for icon and setIconPosition");
                }

                return (
                    &lt;button 
                        type="button" 
                        className= "rounded-lg px-4 py-2 border-1 border-custom-gray-dark text-sm text-custom-white w-[fit-content] bg-custom-black cursor-pointer"
                        {...rest}
                    &gt;
                        {icon && setIconPosition == "start" && icon}
                        {children}
                        {icon && setIconPosition == "end" && icon}
                    &lt;/button&gt;
                    );
                }
            `}
        </code></pre>
    )
}