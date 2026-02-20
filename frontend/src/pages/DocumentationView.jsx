const Components = {
    Button : {
        heading: "Button",
        description: "A simple button component"
    }
}

function ComponentSection(props){
    const { heading, description } = props;
    return (
        <div>
            <h3 className="text-lg">{heading}</h3>
            <p>{description}</p>
        </div>
    );
}


export default function DocumentationView() {
  return (
    <div className="">
        <h2 className="font-bold text-xl">Documentation</h2>
        {Object.entries(Components).map(([key, { heading, description }]) => (
            <ComponentSection
                key={key}
                heading={heading}
                description={description}
            />
        ))}
    </div>
  );
}

