import { fetchSpecificComponentData } from "@/scripts/fetchComponentData";
import dynamic from "next/dynamic";

const Component_Map = {
    'Button': dynamic(()=> import('@/components/Button/ButtonComponent')),
}

export default async function DocumentationPage({params}) {
    const { slug } = await params;
    const component_data = await fetchSpecificComponentData(slug);
    const SpecificComponent = Component_Map[component_data.type];
    
    return (
        <div className="flex flex-col gap-8">
            <h1 className='text-5xl font-semibold'>{slug}</h1>
            <hr className="border-custom-gray"/>
            <SpecificComponent {...component_data.props} />
        </div>
    );
}
