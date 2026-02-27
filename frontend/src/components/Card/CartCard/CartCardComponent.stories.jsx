import CardInfoComponent from "./CartCardComponent";
import DemoImage from '../../assets/demo.jpg'

export default {
  title: "Components/CardInfo",
  component: CardInfoComponent,
};

export const Default = {
  args: {
    productName: "Sample Product",
    productPrice: "$19.99",
    productImage: DemoImage,
    productSale: "$20.99",
    productDescription: "This is a sample product description.",
    componentFocused: true
  },
};