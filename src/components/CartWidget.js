import React from "react";
import { Row, Col} from "react-bootstrap";
import {connectCartWidgetToStore} from "../hoc/ConnectHolder";

const CartWidget = props =>(<div>Count: {props.count} Total: {props.total}</div>);

export default connectCartWidgetToStore(CartWidget);