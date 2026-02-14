import './MainNavbar.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/ButtonComponent';

const NavigationItem = {
    Examples: '/',
}

function Navigation() {
    const {Examples} = NavigationItem;
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className='nav-button-container'>
            {Object.entries(NavigationItem).map(([key, value]) => (
                <button type="button" className="nav-button" key={key} onClick={() => handleNavigation(value)}>{key}</button>
            ))}
        </div>
    );
}

export default function MainNavBar() {
    return (
        <nav className='nav-container p-4'>
            <h1>RepetUI</h1>
            <Navigation />
        </nav>
    );
}