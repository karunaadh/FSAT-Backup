import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/pages/exports"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Polvoron from "./components/pages/Blog/Posts/Recipes/PolvoronRecipes/Polvoron";


function App() {
  return (
    <><Polvoron/></>
  );
}

export default App;
