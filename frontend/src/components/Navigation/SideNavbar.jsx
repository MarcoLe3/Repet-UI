import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const componentGuideSection = {
    'StartHere': 'Start Here',
    // 'ButtonComponentDocumentation': 'Button', 
    // 'RegisterComponentDocumentation': 'Register',
    // 'SubscriptionComponentDocumentation': 'Subscription',
}

export default function SideNavbar({Title, SubSectionOne}) {
    const [isComponentTabOpen,setIsComponentTabOpen] = useState(false);
    let navigate = useNavigate();

    function toggleComponentTab() {
        setIsComponentTabOpen(status => !status);
    }

    function navigateToArea(key) {
        console.log(`/Documentation/${key}`)
        navigate(`/Documentation/${key}`);
    }

    return(
        <div className="flex flex-col w-[250px] font-family">
            <div className="flex flex-col items-left">
                <h3 className="text-lg font-medium">{Title}</h3>
                <button 
                    onClick={toggleComponentTab}
                    className="w-full font-small text-left hover:bg-gray-100 px-2 py-1 rounded-sm cursor-pointer"
                >
                    {SubSectionOne}
                </button>
                {isComponentTabOpen && (
                    <div className="flex flex-col font-small text-[#787774] gap-2">
                        {Object.entries(componentGuideSection).map(([key,value]) => (
                            <button 
                                className='w-full indent-4 font-small text-left hover:bg-gray-100 px-2 py-1 rounded-sm cursor-pointer' 
                                key={key}
                                onClick={()=>{navigateToArea(key)}}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}