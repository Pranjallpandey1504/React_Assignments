import './App.css'
import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Person name="Pranjal" age={20} />
      <Product name="headphones" price="$699" />

      <Person name="Alisha" age={19} />
      <Product name="IPad" price="$1200" />
      
    </div>
  );
}

export default App;