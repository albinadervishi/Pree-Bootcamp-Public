import React, {useState} from "react";

const FirstTab = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddClick = () => {
    setDisplayText(prev => [...prev, inputText]);
    setInputText("");
  };

  const handleRemove = (index) => {
    const newList = [...displayText];
    newList.splice(index, 1);
    setDisplayText(newList);
  };
  
  return (
    <div className="FirstTab">
      <input className="input" type="text" value={inputText} onChange={handleInputChange} />
      <button className="addButton" onClick={handleAddClick}>Add</button>
      <p>You are in the First Tab</p>
      {displayText.map((display, index) => (
        <p key={index}>{display}<button className="deleteButton" onClick={() => handleRemove(index)}>Delete</button></p>
      ))}
      
    </div>
  );
};

export default FirstTab;
