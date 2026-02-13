import './RegisterForm.css'
import Button from '../Button/ButtonComponent';

export default function RegisterForm(){
    return(
        <form className="register-form">
            <h2>Create Your Account</h2>
            <label>
                <span>Email</span>
                <input placeholder="Email" type="email" name="email" required />
            </label>
            <label>
                <span>Password</span>
                <input placeholder="Password" type="password" name="password" required />
            </label>

            <Button type="submit" style={{ '--btn-bg': 'rgb(0,136,255)','--btn-color': '#FFFFFF', '--btn-width': '300px', '--btn-border-radius': '8px', '--btn-border': 'none', '--btn-hover-bg': 'rgb(30,110,244)'}}>Continue</Button>
        </form>
    )
}