import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Details from "./components/Details";

function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/Product"  element={<Product/>}/>
        <Route path="/:id" exact element={<Details/>}/>
      </Routes>
      

      
    </div>
  );
}

export default App;
