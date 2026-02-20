import './CartCard.css';
import Button from '../Button/ButtonComponent';
import {useState} from 'react';

export default function CartCardComponent(props){
    const {productName, productPrice, productImage, productSale, productDescription, componentFocused} = props;

    return (
            <div className={`product-card border-2 ${componentFocused ? 'border-[rgb(0,136,255)]' : 'border-[#D4D4D4CC]'}`}>
                <img className='product-image' src={productImage} alt={productName} />
                <div className='product-info-section'>
                    <p className={`product-sale ${productSale ? 'visible' : 'hidden'}`}>{productSale}</p>
                    <div className='product-details'>
                        <h3 className='product-title'>{productName}</h3>
                        <p className='product-price'>{productPrice}</p>
                    </div>
                    <p className='product-description'>{productDescription}</p>
                </div>
                <Button 
                    type="submit" 
                    className="bg-[rgb(0,136,255)] text-[#FFFFFF] p-2 cursor-pointer w-auto rounded-[8px] border-none hover:bg-[rgb(30,110,244)] transition-colors"
                >
                    Continue
                </Button>
            </div>
    )
}