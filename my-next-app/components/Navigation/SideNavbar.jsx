'use client'

import Link from 'next/link';
import {useState} from 'react'

export default function SideNavbar({data, Title, SubSectionOne}) {
    const [isComponentTabOpen,setIsComponentTabOpen] = useState(false);

    const toggleComponentTab = () => {
        setIsComponentTabOpen(status => !status);
    }

    return(
        <div className="flex flex-col px-4 w-[250px] border-r-1 border-[#D4D4D4CC]">
            <div className="flex flex-col items-left">
                <h3 className="text-lg font-medium">{Title}</h3>
                <button 
                    onClick={toggleComponentTab}
                    className="w-full font-small text-left hover:bg-custom-gray-light px-2 py-1 rounded-sm cursor-pointer"
                >
                    {SubSectionOne}
                </button>
                {isComponentTabOpen && (
                    <div className="flex flex-col font-small text-foreground gap-2">
                        {data?.map((item) => (
                            <Link
                                className='w-full indent-4 hover:bg-custom-gray-light text-custom-gray-dark font-small text-left px-2 py-1 rounded-sm cursor-pointer' 
                                key={item.id}
                                href={`/Documentation/${item.id}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}