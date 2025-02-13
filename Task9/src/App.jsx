import Person from "./components/Person"
import Product from "./components/Product";
function App() {
  return (
    <div>
      <Person name="Pranjal Pandey" age={20}></Person>
      <Product name="Iphone" price={100000}></Product>
    </div>
  )
}
export default App