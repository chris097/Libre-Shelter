import React, { useState } from "react";
import "./AddBook.css";
import closeIcon from "./Icons/close.svg";

let addContainer = "add-container";

const AddBook = () => {
    const [close, setClose] = useState(addContainer);

    const closeModal = () =>{
        return(
            setClose(' ')
        )
    }
    return(
        <>
            <div className="add-book"></div>
            <div className={close}>
                <div className="column">
                <div>Add a Book</div>
                <div 
                onClick={closeModal}
                className="close-modal">
                    <img src={closeIcon} alt=""/>
                </div>
                </div>
                <form action="">
                    <label htmlFor="tittle">Tittle</label>
                    <div><input type="text" name="tittle" id="tittle"/></div>
                    <label htmlFor="tittle">Author</label>
                    <div><input type="text" name="author" id="author"/></div>
                    <label htmlFor="tittle">Book Url</label>
                    <div><input type="text" name="book" id="book"/></div>
                    <label htmlFor="tittle">Published</label>
                    <div><input type="text" name="published" id="published"/></div>
                    <label htmlFor="tittle">ISNB</label>
                    <div><input type="text" name="isnb" id="isnb"/></div>
                    <label htmlFor="tittle">Description</label>
                    <div><input type="text" name="desc" id="desc"/></div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddBook;