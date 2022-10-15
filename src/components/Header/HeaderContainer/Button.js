import React from 'react'
import "./Button.css"


export default function Button(props) {
    return (
        <div className="Nav-item Nav-button">
            <a className="Btn" type="button">
                {props.action}
            </a>
        </div>
    )
}