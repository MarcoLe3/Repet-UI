import CardInfoComponent from "./CartCardComponent";

export default {
  title: "Components/CardInfo",
  component: CardInfoComponent,
};

export const Default = {
  args: {
    productName: "Sample Product",
    productPrice: "$19.99",
    productDescription: "This is a sample product description.",
    componentFocused: true
  },
};