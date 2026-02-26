import * as React from 'react';
import InformationCard from '@/components/Card/InformationCard/InformationCard';
import SideNavbar from '../components/Navigation/SideNavbar';
import { FactoryPath } from '@/scripts/FactoryPath';

export default function DocumentationView() {
    const [component_data, setComponentData] = React.useState(null);
    const documentationPath = FactoryPath({fileOrigin: '/Documentation'});

    React.useEffect(() => {
        fetchComponentData();
    }, []);

    async function fetchComponentData() {
        try {
            const res = await fetch(documentationPath.OrganizePath());
            const data = await res.json();
            setComponentData(data);
        } catch (error) {
            console.error('Error fetching documentation:', error);
        }
    }

    return (
        <div className="flex gap-8 justify-center w-screen p-8">
            <SideNavbar 
                Title="Documentation"
            />
            <div className='flex flex-col gap-8 flex-1'> 
                <h2 className='text-5xl font-bold'>Guides</h2>
                <div className='flex flex-wrap gap-8'>
                    {component_data?.Component?.map((item,index) => {
                        return (
                            <InformationCard
                                key={index}
                                title={item.name}
                                description={item.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

