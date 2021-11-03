import React from 'react'

function Input(props) {

    return(
        <>
        <div className="input-container">
            {/* <label>{props.label}</label> */}
            <input className={props.className} name={props.name} placeholder={props.placeholder} type={props.type} placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input