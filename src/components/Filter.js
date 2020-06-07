import React from "react";
import { connectFilterToStore } from "../hoc/ConnectHolder";

const Filter = (props) => {
  const { categories, filterItems, filterList } = props;

  const handleChange = (event) => {
    const { target } = event;
    const value = target.checked;
    const { name } = target;
    value
      ? filterItems([...filterList, name])
      : filterItems(filterList.filter((item) => item !== name));
  };

  const prepareChildren =
    categories &&
    categories.map((item) => (
      <li key={item.key} className="filter-item">
        <input
          type="checkbox"
          className="filter-item-checkbox"
          onChange={handleChange}
          name={item.key}
        />
        <label className="filter-item-label" htmlFor={item.key}>
          {item.value}
        </label>
      </li>
    ));
  return <ul className="filter-root">{prepareChildren}</ul>;
};

export default connectFilterToStore(Filter);
