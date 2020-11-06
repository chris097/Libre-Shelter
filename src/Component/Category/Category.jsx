import React, { useState } from "react";
import "./Category.css";
import arrorIcon from "./Icons/Arrow 1.svg";
import filterIcon from "./Icons/filter-icon.svg";
import eyeIcon from "./Icons/eye-icon.svg";
import DisplayOption from "../Modal/Option";
import FilterModal from "../Modal/Filter";


const Category = () => {
    const [filterModal, setFilterModal] = useState(false);
    const [displayOption, setDisplayOption] = useState(false);

    const displayFilterModal = () =>{
        setFilterModal(<FilterModal />)
    }

    const displayOptionModal = () => {
        setDisplayOption(<DisplayOption />)
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
                       onClick={displayFilterModal}
                       >
                            <img src={filterIcon} alt="filterIcon" className="filter-icon"/>
                            <div>Filter</div>
                       </div>
                        <span 
                        onClick={displayOptionModal}
                        className="light">
                            <img src={eyeIcon} alt="eyeIcon"/>
                        </span>
                        {/* modal start here... */}
                        {/* <DisplayOption /> */}
                        { displayOption }
                        {/* <FilterModal /> */}
                        { filterModal }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;