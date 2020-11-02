import React, {useState} from "react";
import Modal from "react-modal";
import "./Header.css";
import "../Utils/index.css";
import "../Modal/AddBook/AddBook.css";
import searchFormIcon from "../Header/Icons/search-icon.svg";
import addBookIcon from "../Header/Icons/add-book-icon.svg";
import closeIcon from "../Modal/AddBook/Icons/close.svg";
// import AddBook from "../Modal/AddBook/AddBook";

const Header = () =>{
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">LibraShelter</div>
                    <div className="searchForm">
                        <img src={searchFormIcon} alt="search-icon"/>
                    <input type="search" id="search" placeholder="Search book"/>
                    </div>
                    <button 
                    className="add-book"
                    onClick={() => setModalIsOpen(true)}
                    >
                        <>
                        <img src={addBookIcon} alt="Add-book-icon"/>
                        <span>Add Book</span>
                        </>
                    </button>
                </div>
            </div>
        </div>
        <Modal isOpen={modalIsOpen}
        style={{
            overlay: {
              zIndex: 999,
              backgroundColor: 'transparent'
            },
            content: {
             backgroundColor: ' ',
             border: ' ',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch'
            }
          }}
        >
            <div className="add-book"></div>
            <div className="add-container">
                <div className="column">
                <div>Add a Book</div>
                <div 
                onClick={() => setModalIsOpen(false)}
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
            </Modal>
        </>
    )
}

export default Header;