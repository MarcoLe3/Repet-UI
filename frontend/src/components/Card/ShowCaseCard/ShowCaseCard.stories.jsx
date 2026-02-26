import ShowcaseCardComponent from "./ShowCaseCardComponent";
import RegisterForm from "../Authorization/RegisterForm";

export default {
    title: "Components/ShowCaseCard",
    component: ShowcaseCardComponent
}

export const Default = {
    args: {
        children: <RegisterForm />
    }
}