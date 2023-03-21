import './Product.css';

function Product(props) {
    return (
        <div>
            <div className='product-item'>
                <div><h2>{props.productName}</h2></div>
                <div className='product-item__description'>
                    <h2>{props.shortDescription}</h2>
                    <div className='product-item__price'>${props.startPrice}</div>
                </div>
            </div>
        </div>
    );
}

export default Product;  