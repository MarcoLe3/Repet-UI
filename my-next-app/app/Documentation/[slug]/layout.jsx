import SideNavbar from '@/components/Navigation/SideNavbar';
import { fetchComponentData } from '@/scripts/fetchComponentData';
import MainNavBar from '@/components/Navigation/MainNavbar';

export default async function DocumentationPage({children}) {
    const component_data = await fetchComponentData();

    return (
        <div className="flex flex-col bg-background-second h-screen">
            <MainNavBar />
            <div className="flex gap-8 justify-center w-screen p-8">
                <aside>
                    <SideNavbar 
                        Title="Documentation"
                        SubSectionOne="Components"
                        data={component_data}
                    />
                </aside>
                <main className='flex-1 overflow-y-auto'>
                    {children}
                </main>
            </div>
        </div>
    );
}
