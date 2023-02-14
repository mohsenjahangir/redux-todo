import { Counter } from "./views/Counter";
import '../src/App.css'
import { ProductList } from "./views/ProductList";
import { ProductAdd } from "./views/ProductAdd";

function App() {
  return (
    <div className="App">
      <h1>redux sample</h1>
      <Counter/>
      <hr/>
      <h1>product list</h1>
      <ProductList/>
      <hr/>
      <h1>product add</h1>
      <ProductAdd/>
    </div>
  );
}

export default App;
