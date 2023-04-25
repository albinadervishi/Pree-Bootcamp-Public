import React, { useState } from 'react';
import './App.css';
import Age from './components/Age';

function App() {
  const [pet, setPet] = useState([
    { id: 1, emri: "Pisika", lloji: "Mace" },
    { id: 2, emri: "Tufi", lloji: "Qen" }
  ]);

  const [pet2, setPet2] = useState([
    { id: 3, emri: "Roki", lloji: "Qen" },
    { id: 4, emri: "Pufi", lloji: "Qen" }
  ]);

  const handleRemovePet = (petId, setPetState) => {
    setPetState(prevPetState => prevPetState.filter(pet => pet.id !== petId && pet2.id !== petId));
  };
  

  return (
    <div className="App">
      <Age
        firstName={"Doe"}
        lastName={"Jane"}
        age={45}
        hairColor={"Black"}
        pet={pet}
        onRemovePet={() => handleRemovePet(pet[0].id, setPet)}


      />

      <Age 
        firstName={"Smith"}
        lastName={"John"}
        age={88}
        hairColor={"Brown"}
        pet={pet2}
        onRemovePet={() => handleRemovePet(pet2[0].id, setPet2)}
      />
    </div>
  );
}

export default App;

