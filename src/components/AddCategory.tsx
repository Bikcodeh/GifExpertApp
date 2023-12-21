import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onNewCategory: (text: string) => void;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
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