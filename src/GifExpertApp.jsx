import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory  onNewCategory={ text => onAddCategory(text)}/>
      
        {categories.map((cat) => (
          <GifGrid category={cat} key={cat} />
        ))}
     
    </>
  );
};

export default GifExpertApp;
