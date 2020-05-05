import React from "react"
import { connectFilterToStore } from "../hoc/ConnectHolder"

const Filter = props => {
  const { categories, filterItems, filterList } = props
  // console.log(categories);
  // console.log(filterList);

  const handleChange = (event) => {
    const { target } = event
    const value = target.checked
    const { name } = target
    value
      ? filterItems([...filterList, name])
      : filterItems(filterList.filter(item => item !== name))
  }

  const prepareChildren = categories.map(item => (
    <div>
      <input onChange={handleChange} name={item.key} type="checkbox" value={item.key} />
      <label htmlFor={item.value}>{item.value}</label>
    </div>)
  )
  return <div>{prepareChildren}</div>
}

export default connectFilterToStore(Filter)
