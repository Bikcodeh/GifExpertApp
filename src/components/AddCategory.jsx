import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitForm = (event) => {
    if(inputValue.length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm} aria-label="form">
      <input
        type="text"
        value={inputValue}
        placeholder="Search gifs"
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
};