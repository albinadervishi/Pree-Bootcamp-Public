import React, { useState } from 'react';
import './App.css';

function App() {
  const tossCoin = () => {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
  
      const fiveHeadsSync = () => {
        return new Promise((resolve, reject) => {
          let headsCount = 0;
          let attempts = 0;
          while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
              if (headsCount === 5) {
                resolve(`It took ${attempts} attempts to flip five heads`);
              }else if (headsCount > 100) {
                reject("You excedeed the limit");
              }
            } else {
              headsCount = 0;
            }
          }
          fiveHeadsSync
          .then( res => console.log(res) )
          .catch( err => console.log(err) );
        });
      }
      console.log( fiveHeadsSync() );
      
  return (
    <div className="App">
    </div>
  );
}

export default App;
