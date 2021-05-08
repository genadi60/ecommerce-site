import './ProductPrice.css'

const ProductPrice = ({price}) => {
    return(
        <p className="product-price">
            Price:
            <span>
                {price}$
            </span>
        </p>
    );
}

export default ProductPrice;