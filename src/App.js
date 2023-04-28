import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"
import DetailScreen from "./components/detailComponents/DetailScreen"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Routes>
      <Route index element={<HomeScreen/>}/>
      <Route path="/NewRecipe" element={<NewRecipeScreen/>}/> 
      <Route path="/recipes/:id" element={<DetailScreen/>}/>
      </Routes>
      </div>
      <Footer />
    
    </>
  );
}

export default App;
