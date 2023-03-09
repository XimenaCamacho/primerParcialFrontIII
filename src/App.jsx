import { useState } from "react";
import "./App.css";
import ContenedorForm from "./Components/ContenedorForm";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <ContenedorForm mostrarColor={mostrarColor} />
      <Card />
    </>
  );
}

export default App;
