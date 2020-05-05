import React from "react"

import { connectCartWidgetToStore } from "../hoc/ConnectHolder"

const CartWidget = props => (<div>Count: {props.count} Total: {props.total}</div>)

export default connectCartWidgetToStore(CartWidget)
