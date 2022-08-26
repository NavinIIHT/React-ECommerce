import React from 'react';

class Product extends React.Component{

    

    render(){
        return(
            <div>
                    <p></p>
                    <hr />
                    <p><h4>Name : {this.props.productInfo.name}</h4></p>
                    <p><h4>Description : {this.props.productInfo.description}</h4></p>
                    <p><h4>Quantity : {this.props.productInfo.quantity}</h4></p>
                    <p><h4>Price : {this.props.productInfo.price}</h4></p>
                    <p><h4>Category : {this.props.productInfo.category}</h4></p>
                   
                    
            </div>
           
        );
    }
}
Comment.defaultProps = { body : "Some Comment"};


export default Product;