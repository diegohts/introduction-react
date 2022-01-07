import React from "react";

function Button(props) {

    const { name, onClick } = props
/*
Equivalente a linha acima, porém acaba deixando o código mais legível 
    const name = props.name
    const onClick = props.onClick
*/
    return (
        <button onClick={ onClick }>
            { name }
        </button>
    )
}

export default Button