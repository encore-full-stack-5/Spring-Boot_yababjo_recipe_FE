import React, { useState } from "react";

function CookingOrders({
  cookingSteps,
  setCookingSteps,
  order,
  setOrder,
  instruction,
  setInstruction,
}) {
  const addCookingStep = () => {
    setCookingSteps([...cookingSteps, { id: Date.now(), description: "" }]);
  };

  const removeCookingStep = (id) => {
    setCookingSteps(cookingSteps.filter((step) => step.id !== id));
  };

  const handleDescriptionChange = (id, description) => {
    const newSteps = cookingSteps.map((step) =>
      step.id === id ? { ...step, description } : step
    );
    setCookingSteps(newSteps);
  };

  return (
    <div>
      {cookingSteps.map((step, index) => (
        <div key={step.id}>
          <textarea
            value={step.description}
            onChange={(e) => handleDescriptionChange(step.id, e.target.value)}
            className="w-full p-2 border rounded bg-gray-50"
            placeholder={`조리 순서 ${index + 1}`}
          />
          <button onClick={() => removeCookingStep(step.id)}>X</button>
        </div>
      ))}
      <button onClick={addCookingStep}>순서 추가</button>
    </div>
  );
}

export default CookingOrders;
