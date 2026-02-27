import { FactoryPath } from '@/scripts/FactoryPath';
import * as React from 'react';
import InformationCard from '@/components/Card/InformationCard/InformationCard';
import { useNavigate } from 'react-router-dom';

export default function MainDocumentationView({Content}) {
    const [component_data, setComponentData] = React.useState(null);
    const documentationPath = FactoryPath({fileOrigin: '/api/component'});
    const navigate = useNavigate();

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

    function navigateToArea(name) {
        navigate(`/Documentation/${name}`);
    }

    return (
        <div className='flex flex-col gap-8 flex-1'> 
            <h2 className='text-5xl font-bold'>What's new?</h2>
            <hr className="border-[#D4D4D4CC]"/>
            <div className='flex flex-wrap gap-8'>
                {component_data?.Component?.map((item,index) => {
                    console.log("video:", item.video);
                    return (
                        <InformationCard
                            key={index}
                            title={item.name}
                            description={item.description}
                            video={item.video}
                            onClick={() => {navigateToArea(item.name)}}
                        />
                    );
                })}
            </div>
        </div>
    );
}
