import Button from '@/components/Button/ButtonComponent';
import RegisterForm from '@/components/Authorization/RegisterForm';
import MainNavBar from '@/components/Navigation/MainNavbar';
import ShowcaseCardComponent from "@/components/ShowCaseCard/ShowCaseCardComponent";
import './App.css'

const ExampleItems = {
  button: <Button>Content</Button>,
  registerForm: <RegisterForm />
}

function Examples() {
  return (
    <div className='example-container'>
      {Object.entries(ExampleItems).map(([key, value]) => (
        <ShowcaseCardComponent key={key}>
          {value}
        </ShowcaseCardComponent>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <MainNavBar />
      <Examples />
    </>
  )
}

export default App;
