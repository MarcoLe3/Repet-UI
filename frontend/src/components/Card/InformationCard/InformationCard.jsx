export default function InformationCard(props){
    const {title, description, image} = props;

    return (
        <div className="p-4 w-[500px] h-[380px] border">
            {image && <img src={image} alt={title} className="mb-2 rounded-md" />}
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-[#787774] text-lg font-light">{description}</p>
        </div>
    );
}
