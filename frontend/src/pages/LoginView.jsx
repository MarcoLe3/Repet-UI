import RegisterForm from "@/components/Authorization/RegisterForm";

export default function LoginView() {
    return (
        <div className="flex items-center justify-center flex-col ">
            <h2 className="text-2xl color:[#373530]">Log in to access your favorites</h2>
            <RegisterForm />
        </div>
    );
}