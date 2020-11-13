import React, { useState } from "react";
import "./Category.css";
import arrorIcon from "./Icons/Arrow 1.svg";
import filterIcon from "./Icons/filter-icon.svg";
import eyeIcon from "./Icons/eye-icon.svg";
import FilterModal from "../Modal/Filters/Filter";
import DisplayOption from "../Modal/Option/Option";
import openMenu from "./Icons/menu.png";
import dotIcon from "./Icons/dot-icon.svg";
import closeMenu from "./Icons/close.png";
// import DisplayOption from "../Modal/Option";
// import FilterModal from "../Modal/Filter"

const engine = (name, func) => {
    return(
        document.querySelector(name).style.display=func
    )
}


const Category = () => {
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openOptionModal, setOpenOptionModal] = useState(false);

    const displayFilterModal = (e) => {
        setOpenFilterModal(<FilterModal />)
        setOpenOptionModal(" ")
    }

    const displayOptionModal = (e) => {
        e.preventDefault()
        setOpenOptionModal(<DisplayOption />)
        setOpenFilterModal(" ")
    }

    const menuOpen = () => {
        engine('.sidebar', 'block')
        engine('.open-menu', 'none')
        engine('.close-menu', 'block')
        const div = document.querySelector('.close-menu  > img')
        div.style.display = 'block'
        console.log(div)
    }


    const menuClose = () => {
        engine('.sidebar', 'none')
        engine('.close-menu', 'none')
        const div = document.querySelector('.open-menu')
        div.style.display = 'block'
        console.log(div)
    }

    return (
        <>
        <div className="category">
            <div className="container">
            {/* mobile */}
            <div 
                className="open-menu"  
                onClick={menuOpen}>
                <img src={openMenu} alt=""/>
             </div>
             <div className="close-menu"
             onClick={menuClose}
             >
                 <img src={closeMenu} alt=""/>
             </div>
             {/* end of mobile */}
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
                            <div className="filt">Filter</div>
                       </div>
                        <span 
                        onClick={displayOptionModal}
                        className="light">
                            <img src={eyeIcon} alt="eyeIcon"/>
                        </span>
                        {openOptionModal}
                        { openFilterModal }
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