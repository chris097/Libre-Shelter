import React, { useState } from "react";
import "./Book.css";
import "../../Utils/index.css";
import closeIcon from "../AddBook/Icons/close.svg";
import bookImg from "./Images/book-img.svg";
import loveIcon from "./Icons/love-icon.svg";
import editIcon from "./Icons/edit-icon.svg";
import deleteIcon from "./Icons/delete-icon.svg";
import commentImg from "./Images/comment-img.svg";
import Modal from "react-modal";
import axios from "axios";
import {url} from "../../Library/Library";


const Books = ({
    modalIsOpen,
    setModalIsOpen,
    description,
    author,
    _id,
    isPublished,
    ISBN
}) => {

    const [likes, setLikes] = useState('')
    const [update, setUpdate] = useState({
        description: []
    })

    const deleteBook = () => {
        axios.delete(`${url}/${_id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log('Access denied...', err.message))
        setModalIsOpen(false)
    }
    
    const editBook = () => {
        axios.put(`${url}/${_id}`)
        .then(res => console.log(res.data, update))
    }

    return(
        <>
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
        <div className="books"></div>
        <div className="books-container">
            <div className="column">
                <div className="fsw-600 fsz-14">The purse mase</div>
                <div className="close-modal"
                onClick={() => setModalIsOpen(false)}
                value={_id}
                ><img src={closeIcon} alt=""/></div>
            </div>
            <div className="column">
                <div className="book-col-1">
                    <img src={bookImg} alt="book-img"/>
                    <div className="author">
                        <p>Author : <span>{author}</span></p>
                    </div>
                    <div className="pubished">
                        <p>Pubished : <span>{isPublished}</span></p>
                    </div>
                    <div className="pubisher">
                        <p>Pubisher : <span>{author}</span></p>
                    </div>
                    <div className="isbn">
                        <p>ISBN : <span>{ISBN}</span></p>
                    </div>
                </div>
                <div className="book-col-2">
                    <p>{description}</p>
                    <div className="column">
                        <div className="love-icon" onClick={() => setLikes(!likes ? likes +1 : '')}>
                            <img src={loveIcon} alt=""/><span>{likes}</span>
                        </div>
                        <div className="col">
                            <div className="edit-icon">
                                <img src={editIcon} alt="edit-icon" onChange={() => setUpdate(editBook)}/> 
                            </div>
                            <div className="delete-icon" onClick={deleteBook}>
                                <img src={deleteIcon} alt="delte-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mg-10 fsw-600">32 Comments</div>
            <div className="col">
                <div className="comment-img"><img src={commentImg} alt=""/></div>
                <div className="write-comment">
                    <input type="text" id="write-comment" placeholder="Write a comment"/>
                </div>
            </div>
            <div className="col mg-top-5">
                <div className="comment-img"><img src={commentImg} alt=""/></div>
                <div className="write-comment-box">
                    <div className="fsz-12 fsw-600">Okeyhacker <span className="light-color fsz-10 mg-lf fsw-400">1 Nov at 4:09</span></div>
                    <input type="text" id="write-comment-box" value=""/>
                    <div className="col">
                        <button className="comment-edit">Edit</button>
                        <button className="comment-delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </Modal>
        </>
    )
}

export default Books;