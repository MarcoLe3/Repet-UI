import {useState} from 'react'

const componentGuideSection = {
    'Start here': 'Start here',
    'Button': 'Button',
    'Register': 'Register',
    'Subscription': 'Subscription',
}

export default function SideNavbar({Title}) {
    const [isComponentTabOpen,setIsComponentTabOpen] = useState(false);

    // useEffect(() => {
    //     fetchComponentData();
    // },[])

    function toggleComponentTab() {
        setIsComponentTabOpen(status => !status);
    }

    // async function fetchComponentData() {
    //     try{

    //     } catch(error) {
    //         console.error(`Error fetching documentation for SideNavbar ${error}`)
    //     }
    // }

    return(
        <div className="flex flex-col w-[250px]">
            <div className="flex flex-col items-left">
                <h3 className="text-lg font-medium">{Title}</h3>
                <button 
                    onClick={toggleComponentTab}
                    className="w-full font-small text-left hover:bg-gray-100 px-2 py-1 rounded-sm cursor-pointer"
                >
                    Components
                </button>
                {isComponentTabOpen && (
                    <div className="flex flex-col font-small text-[#787774] gap-2">
                        {Object.keys(componentGuideSection).map((key) => (
                            <p 
                                className='w-full indent-4 font-small text-left hover:bg-gray-100 px-2 py-1 rounded-sm cursor-pointer' 
                                key={key}
                            >
                                {componentGuideSection[key]}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}