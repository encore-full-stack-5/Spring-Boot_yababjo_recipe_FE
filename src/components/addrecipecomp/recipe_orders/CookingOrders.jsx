import React, { useState } from "react";

function CookingOrders() {
  const [cookingSteps, setCookingSteps] = useState([
    { id: 1, description: "" },
  ]);

  const addCookingStep = () => {
    setCookingSteps(cookingSteps.concat({ id: Date.now(), description: "" }));
  };

  const removeCookingStep = (id) => {
    setCookingSteps(cookingSteps.filter((step) => step.id !== id));
  };

  return (
    <div className="p-10">
      {cookingSteps.map((step, index) => (
        <div key={step.id} className="flex items-center mb-2">
          <textarea
            className="w-full p-2 border rounded bg-gray-50"
            value={step.description}
            onChange={(e) => {
              const newCookingSteps = [...cookingSteps];
              newCookingSteps[index].description = e.target.value;
              setCookingSteps(newCookingSteps);
            }}
            placeholder={`조리 순서 ${index + 1}`}
            rows="2"
          ></textarea>
          <button
            className="ml-2 p-1 "
            onClick={() => removeCookingStep(step.id)}
          >
            X
          </button>
        </div>
      ))}
      <button className="p-2 border rounded" onClick={addCookingStep}>
        조리 순서 추가
      </button>
    </div>
  );
}

export default CookingOrders;
