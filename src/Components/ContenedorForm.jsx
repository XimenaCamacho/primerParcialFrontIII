import { useState } from "react";

const ContenedorForm = () => {
  const [color, setColor] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!color) return mostrarColor(color);
    setColor("");
    console.log(color);
  }
  return (
    <>
      <h2>Elige un color</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Decinos tu nombre" type="text" />
        </div>
        <div>
          <input
            placeholder="Tu color favorito"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type="submit"> Decinos tu color</button>
      </form>
    </>
  );
};

export default ContenedorForm;
