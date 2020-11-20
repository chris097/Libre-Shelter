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
        bookUrl: "",
        isPublished: "",
        ISBN: "",
        description: ""
    })

        const mySubmitHandler = (e) =>{
            e.preventDefault();
            axios.post(url, updateData)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.error('Not updating', err.message))
        }

        const eHandler = (e) => {
            e.preventDefault()
            e.stopPropagation()
            const newData = {...updateData}
            newData[e.target.id] = e.target.value
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
                    onChange={ e => eHandler(e) }
                    onBlur={e => eHandler(e) }
                    type="text" 
                    name="title" 
                    id="title"
                    required
                    /></div>
                    <label htmlFor="tittle">Author</label>
                    <div><input 
                    value={updateData.author}
                    onChange={ e => eHandler(e) }
                    onBlur={e => eHandler(e) }
                    type="text" 
                    name="author" 
                    id="author"
                    required
                    /></div>
                    <label htmlFor="book">Book Url</label>
                    <div><input 
                    type="text" 
                    name="bookUrl" 
                    id="bookUrl"
                    value={updateData.bookUrl}
                    onChange={e => eHandler(e)}
                    onBlur={e => eHandler(e) }
                    required
                    /></div>
                    <label htmlFor="published">Published</label>
                    <div><input 
                    type="text" 
                    name="isPublished" 
                    id="isPublished"
                    value={updateData.isPublished}
                    onChange={e => eHandler(e)}
                    onBlur={e => eHandler(e) }
                    required
                    /></div>
                    <label htmlFor="tittle">ISBN</label>
                    <div><input 
                    type="text" 
                    name="ISBN" 
                    id="ISBN"
                    value={updateData.ISBN}
                    onChange={e => eHandler(e)}
                    onBlur={e => eHandler(e) }
                    /></div>
                    <label htmlFor="tittle">Description</label>
                    <div><input 
                    type="text" 
                    name="description" 
                    id="description"
                    value={updateData.description}
                    onChange={e => eHandler(e)}
                    onBlur={e => eHandler(e) }
                    required
                    /></div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </Modal>
    )
}

export default BookModal;