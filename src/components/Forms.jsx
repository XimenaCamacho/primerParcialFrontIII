import React from "react";
import style from "./Forms.module.css"

const Forms = () => {
    return (
        <div>
            <form className={style.form_container}>
                <label htmlFor="Test1">Test1</label>
                <input type="text" />
                <label htmlFor="Test2">Test2</label>
                <input type="text" />
                <label htmlFor="Test3">Test3</label>
                <input type="text" />
                <label htmlFor="Test4">Test4</label>
                <input type="text" />
                <label htmlFor="Test5">Test5</label>
                <input type="text" />
                <input type="submit" value="Enviar" className={style.seudo_button}/>
            </form>
        </div>
    )
}

export default Forms;