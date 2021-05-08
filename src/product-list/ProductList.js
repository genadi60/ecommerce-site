/* eslint-disable no-useless-constructor */
import React, { Component} from 'react';
import './ProductList.css';
import Product from '../product/Product';

// function ProductList(props) {
//     return(
//         <div className="container">
//            <Product product={props.product}/> 
//         </div>
//     )
// }

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Product product={this.props.product}/>
                <Product product={this.props.product}/>
            </div>
        )
    }
}

export default ProductList;