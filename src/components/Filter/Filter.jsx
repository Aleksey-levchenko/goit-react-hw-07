import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterStyles from "./Filter.module.css";
import {
  setNameFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice";

const Filter = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setNameFilter(event.currentTarget.value));
  };

  return (
    <div className={FilterStyles.container}>
      {" "}
      <label htmlFor="filter" className={FilterStyles.label}>
        {" "}
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        className={FilterStyles.input}
      />
    </div>
  );
};

export default Filter;
