import Button from './Button';

export default function RegisterForm(){
    return(
        <div className="flex flex-col items-center gap-4">
            <h2 className='text-2xl'>Create Your Account</h2>
            <form className="flex flex-col gap-4 items-start ">
                <label className='flex flex-col gap-2'>
                    <span>Email</span>
                    <input 
                        className="border-1 border-custom-gray rounded-lg px-4 py-1 w-[300px]"
                        placeholder="Email" 
                        type="email" 
                        name="email" 
                        required 
                    />
                </label>
                <label className='flex flex-col gap-2'>
                    <span>Password</span>
                    <input 
                        className="border-1 border-custom-gray rounded-lg px-4 py-1 w-[300px]"
                        placeholder="Password" 
                        type="password" 
                        name="password" 
                        required 
                    />
                </label>

                <Button 
                    type="submit" 
                    disabled
                    className="bg-custom-blue text-[#FFFFFF] p-2 cursor-pointer w-[300px] rounded-[8px] border-none hover:bg-custom-blue-dark transition-colors"
                >
                    Continue
                </Button>
            </form>
        </div>
    )
}