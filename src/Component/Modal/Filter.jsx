import React from "react";
import "./Filter.css";
import arrowDown from "./Icons/angle-down.svg";

const FilterModal = () => {
    return(
        <div className="filter-modal">
                <h4>Filter By</h4>
                <div className="column current">
                    <div>Aphabetic Order</div>
                    <img src={arrowDown} alt=""/>
                </div>
                <div className="column">
                    <div>Release Year</div>
                    <img src={arrowDown} alt=""/>
                </div>
                <div className="column">
                    <div>Country</div>
                    <img src={arrowDown} alt=""/>
                </div>
                <div className="column">
                    <div>Oldest</div>
                    <img src={arrowDown} alt=""/>
                </div>
        </div>
    )
}

export default FilterModal;