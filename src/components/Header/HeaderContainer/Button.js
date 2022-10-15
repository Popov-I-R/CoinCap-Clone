import React from 'react'
import "./Button.css"


export default function Button(props) {
    return (
        <div className="Nav-item Nav-button">
            <button className="Btn" type="button">
                {props.action}
            </button>
        </div>
    )
}