import React, { useState } from "react";
import Modal from "react-modal";
import "./AddBook.css";
import closeIcon from "./Icons/close.svg";
import {url} from "../../Library/Library";
import axios from 'axios';
Modal.setAppElement('body')

const BookModal = ({
    modalIsOpen, 
    setModalIsOpen, 
    // mySubmitHandler, 
    // author, 
    // setAuthor, 
    // tittle, 
    // setTittle
}) =>{
    const [updateData, setUpdateData] = useState({
        title: "",
        author: "",
        description: ""
    })

        const mySubmitHandler = (e) =>{
            e.preventDefault();
            axios.post(url, updateData)
            .then(res => {
                console.log(res.data)
            })
        }

        const eHandler = (e) => {
            const newData = {...updateData}
            newData[e.target.id]=e.target.value
            setUpdateData(newData)
        }

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
                    value={updateData.title}
                    key={updateData.title}
                    onChange={ e => eHandler(e) }
                    type="text" 
                    name="tittle" 
                    id="title"/></div>
                    <label htmlFor="tittle">Author</label>
                    <div><input 
                    value={updateData.author}
                    onChange={ e => eHandler(e) }
                    type="text" 
                    name="author" 
                    id="author"/></div>
                    <label htmlFor="book">Book Url</label>
                    <div><input type="text" name="book" id="book"/></div>
                    <label htmlFor="published">Published</label>
                    <div><input type="text" name="published" id="published"/></div>
                    <label htmlFor="tittle">ISNB</label>
                    <div><input type="text" name="isnb" id="isnb"/></div>
                    <label htmlFor="tittle">Description</label>
                    <div><input 
                    type="text" 
                    name="desc" 
                    id="desc"
                    value={updateData.description}
                    onChange={e => eHandler(e)}
                    /></div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </Modal>
    )
}

export default BookModal;