'use server';

import InformationCard from '@/components/Card/InformationCard/InformationCard';
import prisma from '@/lib/prisma';
import TextDefinition from '@/components/TextDecoration/TextDefinition';

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
                <h1 className='text-5xl font-semibold'>Start Here</h1>
                <hr className="border-custom-gray"/>
                <h2 className='text-3xl font-semibold'>How do I setup?</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        <TextDefinition Word={"Libraries"} Definition={"A large shared code that is used for certain task that can be downloaded with npm"}/>
                        <p> to make it work:</p>
                    </div>
                    <ul className='indent-4'>
                        <li>Tailwind CSS</li>
                        <li>React or Next.js</li>
                    </ul>
                </div>
                <h2 className='text-3xl font-semibold'> What's New?</h2>
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


