import {Button, Col, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {connectProductDetailsToStore} from "../hoc/ConnectHolder";

const ProductDetails = props =>{
    {
        const { loadProductDetails, isLoading, product } = props;
        const { id } = props.match.params;
        console.log(props);
        // useEffect(()=> loadProductDetails(id))

       //
        debugger;

        return isLoading && <div> Загрузка... </div>
    };
};

export default connectProductDetailsToStore(ProductDetails);