import Link from 'next/link';


export default function LinkButton(props) {
    return (
        <Link 
            href={props.href}
            className={props.className}
        >
            {props.content}
        </Link>
    );
}