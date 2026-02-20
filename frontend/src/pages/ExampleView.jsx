import Button from '@/components/Button/ButtonComponent';
import RegisterForm from '@/components/Authorization/RegisterForm';
import MainNavBar from '@/components/Navigation/MainNavbar';
import ShowcaseCardComponent from "@/components/ShowCaseCard/ShowCaseCardComponent";
import CartCardComponent from '@/components/CartCard/CartCardComponent';
import DemoImage from '../assets/demo.jpg';

const ExampleItems = {
  button: <Button>Content</Button>,
  registerForm: <RegisterForm />,
  CartCardComponentTrue: <CartCardComponent 
    productName="Sample Product"
    productPrice="$19.99"
    productImage={DemoImage}
    productSale="20% Off"
    productDescription="This is a sample product description."
    componentFocused={true}
  />,

}

export default function ExamplesView() {
  return (
    <div className='example-container flex gap-4 flex-wrap'>
      {Object.entries(ExampleItems).map(([key, value]) => (
        <ShowcaseCardComponent key={key}>
          {value}
        </ShowcaseCardComponent>
      ))}
    </div>
  )
}