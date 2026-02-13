import './MainNavbar.css';

const NavigationItem = {
    Topic: ['Example', 'Github']
}

function Navigation() {
    const {Topic} = NavigationItem;
    return (
        <div className='nav-button-container'>
            {Topic.map(item => (
                <button type="button" className="nav-button" key={item}>{item}</button>
            ))}
        </div>
    );
}

export default function MainNavBar() {
    return (
        <nav className='nav-container'>
            <h1>RepetUI</h1>
            <Navigation />
        </nav>
    );
}