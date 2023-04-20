
import './App.css';
import Age from './components/Age';

function App() {
  return (
    <div className="App">
      <Age
      firstName={"Doe"} lastName={"Jane"}
      age={ 45 }
      hairColor={"Black"}/>

      <Age 
      firstName={"Smith"} lastName={"John"}
      age={ 88 }
      hairColor={"Brown"}/>

    </div>
  );
}

export default App;
