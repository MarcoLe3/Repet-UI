'use server';

import SideNavbar from '@/components/Navigation/DocumentationSideNavbar';
import InformationCard from '@/components/Card/InformationCard/InformationCard';
import MainNavBar from '@/components/Navigation/MainNavbar';
import prisma from '@/lib/prisma';

export default async function DocumentationPage() {
    const component_data = await prisma.Component.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            published: true,
        },
    });

    return (
        <div className="flex flex-col bg-background-second h-screen">
            <main className='flex-1 flex flex-col gap-8'>
                <h1 className='text-5xl font-semibold'>What's new?</h1>
                <hr className="border-custom-gray"/>
                <div className='flex flex-wrap gap-8'>
                    {component_data?.map((item) => {
                        return (
                            <InformationCard
                                key={item.id}
                                title={item.title}
                                description={item.content}
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}


