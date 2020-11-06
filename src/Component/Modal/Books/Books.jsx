import React from "react";
import "./Book.css";
import "../../Utils/index.css";
import closeIcon from "../AddBook/Icons/close.svg";
import bookImg from "./Images/book-img.svg";
import loveIcon from "./Icons/love-icon.svg";
import editIcon from "./Icons/edit-icon.svg";
import deleteIcon from "./Icons/delete-icon.svg";
import commentImg from "./Images/comment-img.svg";
import Modal from "react-modal";


const Books = ({
    modalIsOpen,
    setModalIsOpen,
    book,
    author
}) => {
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
                ><img src={closeIcon} alt=""/></div>
            </div>
            <div className="column">
                <div className="book-col-1">
                    <img src={bookImg} alt="book-img"/>
                    <div className="author">
                        <p>Author : <span>{author}</span></p>
                    </div>
                    <div className="pubished">
                        <p>Pubished : <span>1996</span></p>
                    </div>
                    <div className="pubisher">
                        <p>Pubisher : <span>Hollman</span></p>
                    </div>
                    <div className="isbn">
                        <p>ISBN : <span>1091817</span></p>
                    </div>
                </div>
                <div className="book-col-2">
                    <p>
                        {book}
                    </p>
                    <div className="column">
                        <div className="love-icon">
                            <img src={loveIcon} alt=""/><span>30</span>
                        </div>
                        <div className="col">
                            <div className="edit-icon">
                                <img src={editIcon} alt="edit-icon"/> 
                            </div>
                            <div className="delete-icon">
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