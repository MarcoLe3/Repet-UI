import './ShowCaseCard.css'

export default function ShowcaseCardComponent(prop) {
    const {children, ...rest} = prop;
    return (
        <div className="showcase-card" {...rest}>
            {children}
        </div>
    );
}
