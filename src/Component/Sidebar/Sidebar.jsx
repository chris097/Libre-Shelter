import React from "react";
import "./Sidebar.css";


const SideBar = () => {
    return(
        <>
            <div 
            className="sidebar"
            >
                <ul className="sidebar-container">
                    <p>A curated list of every book ever written</p>
                    <li>Fa Fantacy</li>
                    <li>Ad Adventure</li>
                    <li>Ro Romance</li>
                    <li>Co Contemporary</li>
                    <li>Dy Dystopian</li>
                    <li>My Mystery</li>
                    <li>Ho Horror</li>
                    <li>The Thriller</li>
                    <li>Pa Paranormal</li>
                </ul>      
            </div>
            
        </>
    )
}

export default SideBar;