import React from 'react';

import './Product.css';
import ProductPrice from '../product-price/ProductPrice';

class Product extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState({
            counter:  this.state.counter + 1
        })
    }

    render() {
        const { product } = this.props;
        const { counter } = this.state;

        return(
            <div className="product-tile">
                <img className="product-image" src={product.image} alt={product.title}/>
                <div>
                    <span className="product-brand">{product.brand}</span>
                    <span className="product-title">{product.title}</span>
                    <ProductPrice price={product.price}/>
                </div>
                <button onClick={this.handleClick}>Click me: {counter}</button>
            </div>
        );
    }
    
}

export default Product;