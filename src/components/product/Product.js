import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Product = ({product, addToCart, removeFromCart}) => {
    const {name, description, id} = product;
    const [count, setCount] = useState(0);
    const [buttonText, setText] = useState("Add To Cart");

    const addToCartButton = () => {
        const add = () => {
            setText("Remove from cart");
            setCount(count+1);
            addToCart(product);
        };
        const remove = () =>{
            setText("Add To Cart");
            setCount(count - 1);
            removeFromCart(id);
        };

        const onClickButton = count > 0 ? ()=>remove() : ()=>add();
        return <button onClick={onClickButton}>{buttonText}</button>
    };
    return <>
        <div>{name}</div>
        <div>{description}</div>
        <div>{addToCartButton()}</div>
    </>
};
