import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Header } from "./Components";
import { Footer } from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImageSlider } from "./Pages/ImageSlider";

function App() {
  return (
   <AllRoutes/>
  );
}

export default App;
