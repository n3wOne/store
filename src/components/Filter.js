import React from "react";
import PropTypes from "prop-types";
import { connectFilterToStore } from "../hoc/ConnectHolder";
import { useBreakpoint } from "../hoc/BreakpointProvider";

const Filter = (props) => {
  const { categories, filterItems, filterList } = props;

  const breakpoints = useBreakpoint();
  const handleChange = (event) => {
    const { target } = event;
    const value = target.checked;
    const { name } = target;
    return value
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
  return !breakpoints.mob && !breakpoints.tablet ? (
    <div className="filter-root">
      <ul className="filter-list">{prepareChildren}</ul>
    </div>
  ) : null;
};

export default connectFilterToStore(Filter);

Filter.propTypes = {
  categories: PropTypes.array,
  filterItems: PropTypes.func,
  filterList: PropTypes.array,
};
