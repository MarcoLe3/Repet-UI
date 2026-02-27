import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/ButtonComponent';

const NavigationItem = {
    Examples: '/',
    Documentation: '/Documentation',
    // Login: '/Login'
}

function Navigation() {
    const {Examples, Documentation} = NavigationItem;
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className='flex gap-2'>
            {Object.entries(NavigationItem).map(([key, value]) => (
                <button 
                    type="button" 
                    className="rounded-sm hover:bg-[#F1F1EF] cursor-pointer text-md px-2 py-1" 
                    key={key} 
                    onClick={() => handleNavigation(value)}>
                        {key}
                </button>
            ))}
        </div>
    );
}

export default function MainNavBar() {
    return (
        <nav className='relative flex items-center p-4'>
            <h1 className='text-3xl font-bold'>RepetUI</h1>
            <div className='absolute left-2/5'>
                <Navigation />
            </div>
        </nav>
    );
}