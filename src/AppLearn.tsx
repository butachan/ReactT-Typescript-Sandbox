import React from "react";
import Gallery, { Profile } from "./components/Gallery";
import TodoList from "./components/TodoList";
import  RecipeList  from "./react-learn-exercice/nestedList";

function AppLearn() {
  return (
    <div>
      <Profile />

      <TodoList />
      <RecipeList />
    </div>
  );
}

export default AppLearn;
