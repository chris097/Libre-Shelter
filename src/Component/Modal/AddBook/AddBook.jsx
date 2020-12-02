import React, { useState } from "react";
import Modal from "react-modal";
import "./AddBook.css";
import closeIcon from "./Icons/close.svg";
import {url} from "../../Library/Library";
import axios from 'axios';
Modal.setAppElement('body')


const BookModal = ({
    modalIsOpen, 
    setModalIsOpen
}) =>{
    const [updateData, setUpdateData] = useState({
        title: [],
        author: [],
        bookUrl: [],
        isPublished: [],
        ISBN: [],
        description: []
    })

    // const [reminder, setReminder] = useState([])

        const mySubmitHandler = (e) =>{
            e.preventDefault()
            // if(
            //     updateData.title.length < 5 || updateData.title.length > 50 || updateData.author.length < 5 || 
            //     updateData.author.length > 50 || updateData.description.length < 50 ||updateData.description.length > 500 ||
            //     updateData.isPublished !== Number || updateData.isPublished !== 4 
            // ){
            //     console.log('Something went wrong... complete character')
            // }else{
               setModalIsOpen(false)
               setTimeout(() => {
                window.location.reload(false)
                axios.post(url, updateData)
                .then(res => {
                let result = res.data
                setUpdateData(result)
            })
            .catch(err => console.error(`Not updating..., ${err.message}!`))
                // setModalIsOpen(false)
            }, 2000);
            // setUpdateData('')
            console.log(updateData);
        // }
        }

        const eHandler = (e) => {
            e.preventDefault()
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
                <form action="" onSubmit={mySubmitHandler ? mySubmitHandler : ''}>
                    <label htmlFor="tittle">Title</label>
                    <div><input 
                    value={updateData.title}
                    onChange={ e => eHandler(e) }
                    onBlur={e => eHandler(e) }
                    type="text" 
                    name="title" 
                    id="title"
                    required
                    /></div>
                    <p className="reminder">Title: max 50! min 5!</p>
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
                    <p className="reminder">Author: max 50! min 5!</p>
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
                    <p className="reminder">Published: must ba a digit! max 4</p>
                    <label htmlFor="tittle">ISBN</label>
                    <div><input 
                    type="text" 
                    name="ISBN" 
                    id="ISBN"
                    value={updateData.ISBN}
                    onChange={e => eHandler(e)}
                    onBlur={e => eHandler(e) }
                    /></div>
                    <p className="reminder">Title: max 50! min 5!</p>
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
                    <p className="reminder">Description: max 500! min 50!</p>
                    <button type="submit">Add</button>
                </form>
            </div>
        </Modal>
    )
}

export default BookModal;