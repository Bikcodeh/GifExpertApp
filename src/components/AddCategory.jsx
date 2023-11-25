import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitForm = (event) => {
    onNewCategory(inputValue);
    setInputValue("");
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        value={inputValue}
        placeholder="Search gifs"
        onChange={onInputChange}
      />
    </form>
  );
};
