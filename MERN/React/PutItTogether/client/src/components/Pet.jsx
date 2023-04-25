import React from "react";


function Pet(props) {
    return (
      <div>
        <p>Emri : {props.emri}, Lloji: {props.lloji}</p>
      </div>
    );
  }

export default Pet;