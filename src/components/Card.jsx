import React from "react";
import style from "./Card.module.css"

const Card = (props)=>{
    return(
        <div className={style.card_container}>
            <p>Tu nombre: {props.data.name}</p>
            <p>Tu libro: {props.data.book}</p>
            <p>Tu color: {props.data.color}</p>
        </div>
    )
}

export default Card;