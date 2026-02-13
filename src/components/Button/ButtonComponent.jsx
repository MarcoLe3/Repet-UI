import './Button.css';

export default function Button(props){
    const {children, ...rest} = props;

    return (
        <button type="button" className={`default-button`} {...rest}>
            {children}
        </button>
    );
}
