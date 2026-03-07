export default function Button(props){
    const {children, icon, setIconPosition, ...rest} = props;
    const validIconPositions = ["start","end"];
    if (icon && setIconPosition && !validIconPositions.includes(setIconPosition)){
        throw new Error("Invalid prop please check for icon and setIconPosition");
    }

    return (
        <button 
            type="button" 
            className= "rounded-lg px-4 py-2 border-1 border-custom-gray-dark text-sm text-custom-white w-[fit-content] bg-custom-black cursor-pointer"
            {...rest}
        >
            {icon && setIconPosition == "start" && icon}
            {children}
            {icon && setIconPosition == "end" && icon}
        </button>
    );
}
