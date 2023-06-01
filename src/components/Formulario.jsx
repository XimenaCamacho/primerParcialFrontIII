import React, { useState } from "react";
import style from "./Formulario.module.css"

const Formulario = (props) => {
    const [name, setName] = useState("");
    const [book, setBook] = useState("");
    const [color, setColor] = useState("");
    const [error, setError] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeBook = (e) => {
        setBook(e.target.value);
    }
    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let spaceInName = name.charAt()
        if (name === "" || book === " " || color === "") {
            setError("Por favor chequea que la información sea correcta");
            return
        }
        if (name.length < 3 || spaceInName === " " || book.length < 6 || color.length < 6) {
            setError("Por favor chequea que la información sea correcta");
            return
        }
        setError("")
        props.onSubmit({name, book, color})
        console.log(name, book, color);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={style.form_container}>
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    placeholder="Tu nombre"
                    value={name}
                    onChange={handleChangeName}
                />
                <label htmlFor="book">Libro favorito</label>
                <input 
                    type="text" 
                    placeholder="Tu libro favorito"
                    value={book}
                    onChange={handleChangeBook}
                />
                <label htmlFor="color">Color favorito</label>
                <input 
                    type="text"
                    placeholder="Tu color favorito"
                    value={color}
                    onChange={handleChangeColor}
                />
                <button type="submit" className={style.seudo_button}>Enviar</button>
            </form>
            {error ? <p>{error}</p> : null }
        </div>
    )
}

export default Formulario;