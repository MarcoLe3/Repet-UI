import './RegisterForm.css'
import Button from '../Button/ButtonComponent';

export default function RegisterForm(){
    return(
        <form className="register-form">
            <h2 className='text-2xl'>Create Your Account</h2>
            <label>
                <span>Email</span>
                <input placeholder="Email" type="email" name="email" required />
            </label>
            <label>
                <span>Password</span>
                <input placeholder="Password" type="password" name="password" required />
            </label>

            <Button 
                type="submit" 
                className="bg-[rgb(0,136,255)] text-[#FFFFFF] p-2 cursor-pointer w-[300px] rounded-[8px] border-none hover:bg-[rgb(30,110,244)] transition-colors"
            >
                Continue
            </Button>
        </form>
    )
}