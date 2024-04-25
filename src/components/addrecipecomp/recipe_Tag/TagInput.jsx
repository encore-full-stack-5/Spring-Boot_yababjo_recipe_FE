import React, { useState } from "react";

function TagInput() {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.isComposing && input) {
      // 엔터를 누르면 새 태그 추가
      if (!tags.includes(input)) {
        // 중복 태그 방지
        setTags([...tags, input]);
        setInput(""); // 인풋 초기화
      } else {
        alert("중복되는 태그입니다");
      }
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-10">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center border p-2 bg-gray-50">
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="p-1 ml-2 text-red-700"
            >
              X
            </button>
          </div>
        ))}
        <input
          className="border p-2 bg-gray-50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyDown}
          placeholder="태그 추가..."
        />
      </div>
    </div>
  );
}

export default TagInput;
