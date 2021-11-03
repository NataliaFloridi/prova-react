import React from 'react'

function Input(props) {

    return(
        <>
        <div>
            <input className={props.className} name={props.name} placeholder={props.placeholder} type={props.type} placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input