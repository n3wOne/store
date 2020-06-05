import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connectFilterToStore } from '../hoc/ConnectHolder';

const Filter = (props) => {
  const {
    categories, filterItems, filterList, isLoading,
  } = props;

  const handleChange = (event) => {
    const { target } = event;
    const value = target.checked;
    const { name } = target;
    value
      ? filterItems([...filterList, name])
      : filterItems(filterList.filter((item) => item !== name));
  };

  const prepareChildren = categories && categories.map((item) => (
      <FormControlLabel
          key={item.key}
          control={<Checkbox onChange={handleChange} name={item.key} />}
          label={item.value}
      />));
  return <FormGroup>{prepareChildren}</FormGroup>;
};

export default connectFilterToStore(Filter);
