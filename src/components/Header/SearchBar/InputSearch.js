import React from 'react'
import "./InputSearch.css"


export default function InputSearch() {
    return (
        <div className="Nav-item InputSearch">
            <input 
            onFocus={(e)=>{
                let container = e.target.parentElement;
                container.classList.add("focused");
            }} 
            onBlur={(e)=>{
                let container = e.target.parentElement;
                container.classList.remove("focused");
            }} 
            className="Search-text" type="text" placeholder="Search.." name="search"></input>
            <a class="Search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    )
}
