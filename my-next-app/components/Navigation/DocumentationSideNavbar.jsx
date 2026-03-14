'use client'

import Link from 'next/link';
import {useState, useEffect} from 'react'
import {usePathname} from 'next/navigation';

export default function SideNavbar({data, Title}) {
    const [isComponentTabOpen,setIsComponentTabOpen] = useState(false);
    const pathname = usePathname();

    useEffect(()=>{

    },[pathname])
    
    const toggleComponentTab = () => {
        setIsComponentTabOpen(status => !status);
    }

    return(
        <div className="flex flex-col px-4 w-[250px] h-[80vh] overflow-y-auto">
            <div className="flex flex-col items-left ">
                <h3 className='font-semibold text-lg px-2 py-1'> Documentation</h3>
                <Link
                    className="w-full font-small text-left hover:bg-custom-gray-light px-2 py-1 rounded-sm cursor-pointer"
                    href={"/Documentation"}
                >
                    Start Here
                </Link>
                <button 
                    onClick={toggleComponentTab}
                    className="w-full font-small text-left hover:bg-custom-gray-light px-2 py-1 rounded-sm cursor-pointer"
                >
                    Component
                </button>
                {isComponentTabOpen && (
                    <div className="flex flex-col font-small text-foreground gap-2">
                        {data?.map((item) => {
                            if (pathname === `/Documentation/${item.id}`) {
                                return (
                                    <Link
                                        className='w-full indent-4 hover:bg-custom-gray-light text-custom-black font-small text-left px-2 py-1 rounded-sm cursor-pointer' 
                                        key={item.id}
                                        href={`/Documentation/${item.id}`}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            } else {
                                return (
                                    <Link
                                        className='w-full indent-4 hover:bg-custom-gray-light text-custom-gray-dark font-small text-left px-2 py-1 rounded-sm cursor-pointer' 
                                        key={item.id}
                                        href={`/Documentation/${item.id}`}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}