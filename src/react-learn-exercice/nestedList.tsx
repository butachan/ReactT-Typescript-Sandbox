import { recipes } from "./recipesList";
// interface recipeProp{
//     id:string;
//     name: string;
//     ingredient:string[];
// }

export default function RecipeList() {
  return (
    <div>
      <h1>Recidpes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h4>{recipe.name}</h4>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
