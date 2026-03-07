'use client';

import {useRef} from "react";
import Link from "next/link";

export default function InformationCard(props){
    const {title, description, video} = props;
    const videoRef = useRef();
    function playVideo() {
        videoRef.current?.play();
    }

    function pauseVideo() {
        videoRef.current?.pause();
    }

    return (
        <Link
            href={`/Documentation/${title}`}
        >
            <div className="flex gap-2 margin-0 flex-col p-2 w-[500px] h-[420px]">
                {/* {video && 
                    <video 
                        src={video} 
                        className="rounded-2xl w-full h-[300px] object-cover" 
                        ref={videoRef}
                        loop
                        onMouseEnter={playVideo}
                        onMouseLeave={pauseVideo}
                    />} */}
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-[#787774] text-lg font-light">{description}</p>
            </div>
        </Link>
    );
}
