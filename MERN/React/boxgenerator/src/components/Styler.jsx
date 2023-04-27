import React, { useState } from 'react';

const Styler = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'color') {
      setColor(value);
    } else if (name === 'width') {
      setWidth(value);
    } else if (name === 'height') {
      setHeight(value);
    }
  }

    const handleButtonClick = () => {
      const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$|^(red|blue|green|yellow|orange|purple|black|white|gray)$/;
      if (colorRegex.test(color)) {
        const newBox = { backgroundColor: color, width: `${width}px`, height: `${height}px` };
        setBoxes([...boxes, newBox]);
      }
      setColor("");
      setWidth('');
      setHeight('');
    };


  return (
    <div>
      <label>
        Color:
        <input type="text" name="color" value={color} onChange={handleInputChange}/>
      </label>
      <label>
        Width:
        <input type="text" name="width" value={width} onChange={handleInputChange}/>
      </label>
      <label>
        Height:
        <input type="text" name="height" value={height}  onChange={handleInputChange}/>
      </label>
      <button onClick={handleButtonClick}>Add Box</button>
      <div>
         {boxes.map((box, index) => (
        <div key={index} style={{ ...box, margin: "30px", display: "inline-block"}}></div>
      ))}
      </div>
    </div>
  );
};

export default Styler;