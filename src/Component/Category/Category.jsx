import React, { useState } from "react";
import "./Category.css";
import arrorIcon from "./Icons/Arrow 1.svg";
import filterIcon from "./Icons/filter-icon.svg";
import eyeIcon from "./Icons/eye-icon.svg";
import FilterModal from "../Modal/Filters/Filter";
import DisplayOption from "../Modal/Option/Option";
// import openMenu from "./Icons/menu.png";
import dotIcon from "./Icons/dot-icon.svg";
// import DisplayOption from "../Modal/Option";
// import FilterModal from "../Modal/Filter"

// const MediaQuery = () => {
//     return(
//         <div 
//             className="open-menu"  
//             onClick={() => console.log('something was clicked...')} 
//         >
//             <img src={openMenu} alt=""/>
//         </div>
//     )
// }

 

const Category = () => {
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openOptionModal, setOpenOptionModal] = useState(false);

    const displayFilterModal = (e) => {
        setOpenFilterModal(<FilterModal />)
        setOpenOptionModal()
    }

    const displayOptionModal = (e) => {
        e.preventDefault()
        setOpenOptionModal(<DisplayOption />)
    }

    return (
        <>
        <div className="category">
            <div className="container">
            {/* media */}
            <MediaQuery />
                <div className="category-content">
                    <div className="fsz-20 pad-top-5 mobile-x">Category</div>
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
                        {/* <DisplayOption 
                        openOptionModal={openOptionModal}
                         /> */}
                        {openOptionModal}
                        { openFilterModal }
                        {/* <FilterModal 
                        openFilterModal={openFilterModal}
                         /> */}
                         {/* mobile */}
                    </div>
                </div>
                <div className="dot-menu">
                    <img src={dotIcon} alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Category;