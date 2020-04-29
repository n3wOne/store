import React from "react";
import {Navigation} from "./Navigation";
import {Cart} from "../components/Cart";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Header = () => (
    <Row className={"header"}>
        <Col><Navigation/></Col>
    </Row>
);