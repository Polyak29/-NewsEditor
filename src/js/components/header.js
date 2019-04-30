import React, { Component } from "react";
 function Product(props) {

        return (<div className="todo__list">   
                    <h2 className="todo__item"> name: {props.name} </h2>
                    <p className="todo__item"> {props.price} </p> 
                    <p className="todo__item">  {props.description} </p>
                </div>
        )
    
}


export default Product;