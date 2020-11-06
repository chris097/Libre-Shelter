import React from "react";
import "./Filter.css";
import arrowDown from "./Icons/angle-down.svg";
import Modal from "react-modal";

const FilterModal = ({
    openFilterModal,
    setOpenFilterModal
}) => {
    return(
        <Modal 
        isOpen={openFilterModal}
        onRequestClose={setOpenFilterModal}
        style={{
            overlay: {
              zIndex: 999,
              backgroundColor: 'transparent'
            },
            content: {
                zIndex: 9999,
                backgroundColor: ' ',
                border: ' '
            }
          }}
        >
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
        </Modal>
    )
}

export default FilterModal;