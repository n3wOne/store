import React, { useState } from "react";
import {removeFromCart} from "../../reducer";

export const CartItem = ({item, getTotal, removeFromCart}) =>{
    const [count, setCount] = useState(1);
    const { description, name, id, price, category } = item;
    if(count < 1){
        removeFromCart(id);
    }
    const increase = () => <button onClick={()=>setCount(count+1)}> + </button>;
    const decrease = () => <button onClick={()=>setCount(count-1)}> - </button>;

    return <tr><td>{name}</td><td>{description}</td><td>{decrease()} {count} {increase()}</td><td>{price}</td><td>{price*count}</td></tr>
};
