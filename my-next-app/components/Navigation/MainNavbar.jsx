'use client'

import Link from 'next/link';

const NavigationItem = {
    Examples: '/',
    Documentation: '/Documentation',
}

function Navigation() {
    const {Examples, Documentation} = NavigationItem;

    return (
        <div className='flex gap-2'>
            {Object.entries(NavigationItem).map(([label, path]) => (
                <Link
                    href={`${path}`}
                    className="rounded-sm hover:bg-[#F1F1EF] cursor-pointer text-md px-2 py-1" 
                    key={label}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}

export default function MainNavBar() {
    return (
        <nav className=' flex items-center justify-between p-4 bg-background-second'>
            <h1 className='text-xl font-semibold'>peanut.design</h1>
            <div className=''>
                <Navigation />
            </div>
            <Link
                href='/Login'
                className="rounded-sm hover:bg-[#F1F1EF] cursor-pointer text-md px-2 py-1"
            >
                Login
            </Link>
        </nav>
    );
}