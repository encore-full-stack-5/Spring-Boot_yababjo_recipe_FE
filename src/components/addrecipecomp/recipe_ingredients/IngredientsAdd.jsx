import React, { useState } from "react";

function IngredientsAdd() {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "", amount: "", unit: "" },
  ]);

  const addIngredient = () => {
    setIngredients(
      ingredients.concat({ id: Date.now(), name: "", amount: "", unit: "" })
    );
  };

  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  return (
    <div className="p-10">
      {ingredients.map((ingredient, index) => (
        <div key={ingredient.id} className="flex items-center mb-2">
          <input
            className="w-full p-2 border rounded bg-gray-50"
            type="text"
            value={ingredient.name}
            onChange={(e) => {
              const newIngredients = ingredients.slice();
              newIngredients[index].name = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder={`재료 ${index + 1}`}
          />
          <input
            className="ml-2 p-2 border rounded bg-gray-50"
            type="text"
            value={ingredient.amount}
            onChange={(e) => {
              const newIngredients = ingredients.slice();
              newIngredients[index].amount = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="양"
          />
          <select
            className="ml-2 p-2 border rounded bg-gray-50"
            value={ingredient.unit}
            onChange={(e) => {
              const newIngredients = ingredients.slice();
              newIngredients[index].unit = e.target.value;
              setIngredients(newIngredients);
            }}
          >
            <option value="">g</option>
          </select>
          <button
            className="ml-2"
            onClick={() => removeIngredient(ingredient.id)}
          >
            X
          </button>
        </div>
      ))}
      <button className="p-2 border rounded" onClick={addIngredient}>
        재료 추가
      </button>
    </div>
  );
}

export default IngredientsAdd;
