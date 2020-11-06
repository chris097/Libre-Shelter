import React, { useState } from "react";
import "./Category.css";
import arrorIcon from "./Icons/Arrow 1.svg";
import filterIcon from "./Icons/filter-icon.svg";
import eyeIcon from "./Icons/eye-icon.svg";
import FilterModal from "../Modal/Filters/Filter";
import DisplayOption from "../Modal/Option/Option";
// import DisplayOption from "../Modal/Option";
// import FilterModal from "../Modal/Filter"
 

const Category = () => {
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openOptionModal, setOpenOptionModal] = useState(false);

    const requestFilterClose = e => {
        e.preventDefault()
        setOpenFilterModal(false)
    }

    const requestOptionClose = e => {
        setOpenOptionModal(false)
    }

    return (
        <div className="category">
            <div className="container">
                <div className="category-content">
                    <div className="fsz-20 pad-top-5">Category</div>
                    <div className="fiction">
                        <span className="primary-color">Fiction</span>
                        <span><img src={arrorIcon} alt="arror-icon"/></span>
                        <span>Showing 18 result(s)</span>
                    </div>
                    <div className="filter">
                       <div className="col light"
                       onClick={() => setOpenFilterModal(true)}
                       >
                            <img src={filterIcon} alt="filterIcon" className="filter-icon"/>
                            <div>Filter</div>
                       </div>
                        <span 
                        onClick={() => setOpenOptionModal(true)}
                        className="light">
                            <img src={eyeIcon} alt="eyeIcon"/>
                        </span>
                        {/* modal start here... */}
                        <DisplayOption 
                        openOptionModal={openOptionModal}
                        setOpenFilterModal={requestOptionClose}
                         />
                        {/* { displayOption } */}
                        {/* { openFilterModal } */}
                        <FilterModal 
                        openFilterModal={openFilterModal}
                        setOpenFilterModal={requestFilterClose}
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;