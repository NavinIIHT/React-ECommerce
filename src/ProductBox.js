import React from 'react';
import Product from './Product';

import $ from 'jquery';

class ProductBox extends React.Component{
       
    // constructor
    constructor(){
        // req to call the base constructor
        super();

        // set the initial state
        this.state = {
            // initial state : hidden
            showProduct : false,
            // initializing with empty array (no hard coded data)
            productList : []
        };
    }

    // custom method that will make async call to remote server to fetch products
    _fetchProducts(){
        // fetch data and update the state 
        $.ajax(
            {
                method : 'GET',
                // url : 'http://dummyserver/api/comments',
                url : 'http://localhost:3000/products',
                success : (products) => {
                        this.setState(
                            {
                                productList : products
                            }
                        );
                }
            }
        );

    }

    // life cycle hook method
    componentWillMount(){
        this._fetchProducts();
    }

    // life cycle hook method
    componentDidMount(){
        // set a interval to call _fetchComments
        // _timer : interval(timer) object
        this._timer = setInterval(()=> this._fetchProducts(), 5000);
    }

    // life cycle hook method
    componentWillUnmount(){
        // release the schedule (interval)
        clearInterval(this._timer);
    }


    

    // add a custom method for managing the comments
    _getProducts(){
        // return a JSX Code
        // loop through all comments and generate a Comment component
        return this.state.productList.map(product => {
            return (<Product product_key={product.id} productInfo={product}  />);
        });
    }

    // custom method to handle button click...
    _handleClick(){
        // this.state.showComment = !this.state.showComment; (not preferred)
        // special method to update the state value:
        this.setState(
            {
                showProduct : !this.state.showProduct
            }
        );
    }

    

    render(){
        // call _getComment
        const products = this._getProducts();
        let productNodes;
        let buttonText = "Show Products";
        if(this.state.showProduct == true){
            buttonText = "Hide Products";
            productNodes = <div id='product_list'>
                                {products}
                           </div>    
        }

        return(
            <div>
                <h2>Products</h2>

                

                <h3>{products.length} Products</h3>
                <button id='show_hide_btn' onClick = {this._handleClick.bind(this)}>{buttonText}</button>
                {productNodes}
            </div>
        );
    }
}

export default ProductBox;