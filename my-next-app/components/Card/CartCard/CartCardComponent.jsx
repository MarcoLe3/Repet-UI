import Button from '@/components/Button/ButtonComponent';

export default function CartCardComponent(props){
    const {productName, productPrice, productDescription, componentFocused} = props;

    return (
            <div className={`rounded-lg w-[300px] p-4 flex flex-col gap-4 border-2 ${componentFocused ? 'border-custom-blue' : 'border-custom-gray'}`}>
                {/* <img className='product-image' src={productImage} alt={productName} /> */}
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-4xl'>{productName}</h3>
                        <p className='text-2xl'>{productPrice}</p>
                    </div>
                    <p className='text-sm'>{productDescription}</p>
                </div>
                <Button 
                    type="submit" 
                    className="bg-custom-blue text-custom-white p-2 cursor-pointer w-auto rounded-[8px] border-none hover:bg-custom-blue-dark transition-colors"
                >
                    Continue
                </Button>
            </div>
    )
}