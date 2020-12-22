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
import "../AddBook/AddBook.css";

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

const ToEdit = ({
    author,
    title,
    isPublished,
    bookUrl,
    ISBN,
    description,
    _id
}) => {
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateAuthor, setUpdateAuthor] = useState('');
    const [updateBookUrl, setUpdateBookUrl] = useState('');
    const [updateisPublish, setUpdateisPublish] = useState('');
    const [updateISBN, setUpdateISBN] = useState('');
    const [updateDesc, setUpdateDesc] = useState('');

    const editBook = (e) => {
        
        console.log('something was clocked...')
        axios.put(`${url}/${_id}`)
        .then(res => console.log(res.request))
    }

    return(
        <>
        <div className="books"></div>
            <div className="add-book"></div>
            <div className="add-container">
                <div className="column">
                <div>Edit a Book</div>
                </div>
                <form action="">
                    <label htmlFor="tittle">Title</label>
                    <div><input 
                    value={updateTitle}
                    type="text" 
                    name="title" 
                    id="title"
                    placeholder={title}
                    onChange={e => setUpdateTitle(e.target.value)}
                    /></div>
                    <label htmlFor="tittle">Author</label>
                    <div><input 
                    value={updateAuthor}
                    type="text" 
                    name="author" 
                    id="author"
                    placeholder={author}
                    onChange={e => setUpdateAuthor(e.target.value)}
                    /></div>
                    {/* {authAuthor} */}
                    <label htmlFor="book">Book Url</label>
                    <div><input 
                    value={updateBookUrl}
                    type="text" 
                    name="bookUrl" 
                    id="bookUrl"
                    placeholder={bookUrl}
                    onChange={e => setUpdateBookUrl(e.target.value)}
                    /></div>
                    <label htmlFor="published">Published</label>
                    <div><input 
                    value={updateisPublish}
                    type="text" 
                    name="isPublished" 
                    id="isPublished"
                    placeholder={isPublished}
                    onChange={e => setUpdateisPublish(e.target.value)}
                    /></div>
                    {/* <p className="reminder">Published: must ba a digit! max 4</p> */}
                    <label htmlFor="tittle">ISBN</label>
                    <div><input 
                    value={updateISBN}
                    type="text" 
                    name="ISBN" 
                    id="ISBN"
                    placeholder={ISBN}
                    onChange={e => setUpdateISBN(e.target.value)}
                    /></div>
                    {/* <p className="reminder">Title: max 50! min 5!</p> */}
                    <label htmlFor="tittle">Description</label>
                    <div><input 
                    value={updateDesc}
                    type="text" 
                    name="description" 
                    id="description"
                    placeholder={description}
                    onChange={e => setUpdateDesc(e.target.value)}
                    /></div>
                    <div className="col">
                    <button type="submit">Cancel</button>
                    <button onClick={editBook}>Edit</button>
                    </div>
                </form>
            </div>
        </>
    )
}


const Books = ({
    modalIsOpen,
    setModalIsOpen,
    description,
    author,
    _id,
    isPublished,
    title,
    ISBN,
    bookUrl
}) => {

    const [likes, setLikes] = useState('');
    const [deleteModal, setDeleteModal] = useState('')
    const [editModal, setEditModal] = useState('')
    
    const deleteBook = () =>{
        setDeleteModal(<ToDel id={_id} key={_id}/>)
        setModalIsOpen(false)
    }

    const editBook = () => {
        setEditModal(<ToEdit 
            id={_id}
            author={author} 
            title={title} 
            isPublished={isPublished}
            bookUrl={bookUrl}
            ISBN={ISBN}
            description={description}
        />)
        setModalIsOpen(false)
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
                onChange={e => e.target.value}
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
                        <p>Publisher : <span>{author}</span></p>
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
                            <div className="edit-icon" onClick={editBook}>
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
                    <input type="text" id="write-comment-box"/>
                    <div className="col">
                        <button className="comment-edit">Edit</button>
                        <button className="comment-delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </Modal>
        {deleteModal}
        {editModal}
        </>
    )
}

export default Books;