import React, { useState } from "react";

function SauceAdd() {
  const [sauces, setSauces] = useState([
    { id: 1, name: "", amount: "", unit: "" },
  ]);

  const addSauce = () => {
    setSauces(
      sauces.concat({ id: Date.now(), name: "", amount: "", unit: "" })
    );
  };

  const removeSauce = (id) => {
    setSauces(sauces.filter((sauce) => sauce.id !== id));
  };

  return (
    <div className="p-10 pt-0">
      {sauces.map((sauce, index) => (
        <div key={sauce.id} className="flex items-center mb-2">
          <input
            className="w-full p-2 border rounded bg-gray-50"
            type="text"
            value={sauce.name}
            onChange={(e) => {
              const newSauces = [...sauces];
              newSauces[index].name = e.target.value;
              setSauces(newSauces);
            }}
            placeholder={`소스 ${index + 1}`}
          />
          <input
            className="ml-2 p-2 border rounded bg-gray-50"
            type="text"
            value={sauce.amount}
            onChange={(e) => {
              const newSauces = [...sauces];
              newSauces[index].amount = e.target.value;
              setSauces(newSauces);
            }}
            placeholder="양"
          />
          <select
            className="ml-2 p-2 border rounded bg-gray-50"
            value={sauce.unit}
            onChange={(e) => {
              const newSauces = [...sauces];
              newSauces[index].unit = e.target.value;
              setSauces(newSauces);
            }}
          >
            <option value="">티스푼</option>
          </select>
          <button className="ml-2 p-1" onClick={() => removeSauce(sauce.id)}>
            X
          </button>
        </div>
      ))}
      <button className="p-2 border rounded" onClick={addSauce}>
        소스 추가
      </button>
    </div>
  );
}

export default SauceAdd;
