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

const ToDel = ({id}) => {
    const cancelReq = () => {
        console.log('cancel...')
        window.location.reload(false)
    }

    const delReq = () => {
        console.log('something was deleted...')
        axios.delete(`${url}/${id}`)
            .then(res => {
                console.log(res.data)
                window.location.reload(false)
            })
            .catch(err => console.log('Access denied...', err.message))
    }
    return(
        <>
        <div className="del-bckgrd"></div>
        <div className="to-del">
        <p>Are sure you want to delete...</p>
        <button 
        className="cancel-btn" 
        type="reset" 
        onClick={cancelReq}>Cancel</button>
        <button 
        className="del-btn"
        type="reset" 
        onClick={delReq}>Delete</button>
        </div>
        </>
    )
}


const Books = ({
    modalIsOpen,
    setModalIsOpen,
    description,
    author,
    id,
    isPublished,
    ISBN
}) => {

    const [likes, setLikes] = useState('');
    const [deleteModal, setDeleteModal] = useState('')

    console.log(id)

    const deleteBook = () =>{
        setDeleteModal(<ToDel id={id}/>)
        setModalIsOpen(false)
    }

    return(
        <>
        {deleteModal}
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
                onChange={e => e.target.value}
                value={id}
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
                                <img src={editIcon} alt="edit-icon"/> 
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
                    <div className="fsz-12 fsw-600">{author} <span className="light-color fsz-10 mg-lf fsw-400">1 Nov at 4:09</span></div>
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