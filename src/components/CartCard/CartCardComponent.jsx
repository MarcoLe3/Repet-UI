import './CartCard.css';
import Button from '../Button/ButtonComponent';

export default function CartCardComponent(props){
    const {productName, productPrice, productImage, productSale, productDescription} = props;

    return (
            <div className='product-card'>
                <img className='product-image' src={productImage} alt={productName} />
                <div className='product-info-section'>
                    <p className={`product-sale ${productSale ? 'visible' : 'hidden'}`}>{productSale}</p>
                    <div className='product-details'>
                        <h3 className='product-title'>{productName}</h3>
                        <p className='product-price'>{productPrice}</p>
                    </div>
                    <p className='product-description'>{productDescription}</p>
                </div>
                
            </div>
    )
}