import React, {useState} from "react";
import {connectFilterToStore} from "../hoc/ConnectHolder";


const Filter = props => {
    const { categories, filterItems, filterList } = props;
    console.log(categories);
    console.log(filterList);

    const handleChange = (event) => {
        const { target } = event;
        const value = target.checked;
        const { name } = target;
        value
            ? filterItems([...filterList, name])
            : filterItems(filterList.filter(item => item !== name));
        // if(!filteredItems.indexOf(name) > 0)
        // {
        //     filterItemsList([...filteredItems, name]);
        // }else{
        //     filterItemsList(filteredItems.splice(filteredItems.indexOf(item), 1));
        // }
    };

    const prepareChildren = categories.map( item => (
        <div>
            <input onChange={handleChange} name={item} type="checkbox" value={item} />
            <label htmlFor={item}>{item}</label>
        </div>)
    );
    return <div>{prepareChildren}</div>
};

export default connectFilterToStore(Filter);