import React from "react";
import Modal from "react-modal";
import "./AddBook.css";
import closeIcon from "./Icons/close.svg";
Modal.setAppElement('body')

const BookModal = ({
    modalIsOpen, 
    setModalIsOpen, 
    mySubmitHandler, 
    author, 
    setAuthor, 
    tittle, 
    setTittle}) =>{
    return(
        <Modal 
        isOpen={modalIsOpen}
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
                <form action="" onSubmit={mySubmitHandler}>
                    <label htmlFor="tittle">Tittle</label>
                    <div><input 
                    value={tittle}
                    key={tittle}
                    onChange={ e => setTittle(e.target.value) }
                    type="text" 
                    name="tittle" 
                    id="tittle"/></div>
                    <label htmlFor="tittle">Author</label>
                    <div><input 
                    value={author}
                    onChange={ e => setAuthor(e.target.value) }
                    type="text" 
                    name="author" 
                    id="author"/></div>
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
    )
}

export default BookModal;