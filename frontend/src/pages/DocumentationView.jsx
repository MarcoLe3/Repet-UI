import * as React from 'react';
import SideNavbar from '../components/Navigation/SideNavbar';
import { FactoryPath } from '@/scripts/FactoryPath';
import { Outlet } from 'react-router-dom';

export default function DocumentationView() {
    return (
        <div className="flex gap-8 justify-center w-screen p-8">
            <SideNavbar 
                Title="Documentation"
                SubSectionOne="Components"
                className="flex-0"
            />
            <Outlet />
        </div>
    );
}

