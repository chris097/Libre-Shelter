import React from "react";
import "./Option.css";
import gridIcon from "./Icons/grid-icon.svg";
import listIcon from "./Icons/list-icon.svg";
import subsIcon from "./Icons/subs-icon.svg";
import addonIcon from "./Icons/addon-icon.svg";
import arrowDown from "./Icons/angle-down.svg";

const DisplayOption = () => {
    return(
            <div className="modal">
            <h4>Display Option</h4>
            <div className="modal-container">
                <div className="grid is-active">
                    <img src={gridIcon} alt=""/>
                    <div className="fsz-11 pad-top-5">Grid</div>
                </div>
                <div className="list">
                    <img src={listIcon} alt=""/>
                    <div className="fsz-11 pad-top-5">List</div>
                </div>
                <div className="addons">
                    <div className="addons-content">
                        <div className="calc">
                            <img src={subsIcon} alt=""/>
                            <div className="calc-box"></div>
                            <img src={addonIcon} alt=""/>
                        </div>
                        <div className="fsz-11 pad-top-5 text-center">Items per line</div>
                    </div>
                </div>
            </div>
            <div className="sort">
                <h4>Sort By</h4>
                <div className="column active">
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
            </div>
        </div>
    )
}

export default DisplayOption;