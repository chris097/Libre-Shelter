import React from "react";
import "./Book.css";
import "../../Utils/index.css";
import closeIcon from "../AddBook/Icons/close.svg";
import bookImg from "./Images/book-img.svg";
import loveIcon from "./Icons/love-icon.svg";
import editIcon from "./Icons/edit-icon.svg";
import deleteIcon from "./Icons/delete-icon.svg";
import commentImg from "./Images/comment-img.svg";

const book = "books"

const Books = check => {

    
    return(
        <>
        <div className={book}></div>
        <div className="books-container">
            <div className="column">
                <div className="fsw-600 fsz-14">The purse mase</div>
                <div className="close-modal"
                onClick={e => console.log(e.target)}
                ><img src={closeIcon} alt=""/></div>
            </div>
            <div className="column">
                <div className="book-col-1">
                    <img src={bookImg} alt="book-img"/>
                    <div className="author">
                        <p>Author : <span>Jamal kasper</span></p>
                    </div>
                    <div className="pubished">
                        <p>Pubished : <span>1996</span></p>
                    </div>
                    <div className="pubisher">
                        <p>Pubisher : <span>Hollman</span></p>
                    </div>
                    <div className="isbn">
                        <p>ISBN : <span>109383737</span></p>
                    </div>
                </div>
                <div className="book-col-2">
                    <p>Culpa nulla pariatur cupidatat nisi incididunt
                        ea do ipsum. Incididunt quis mollit elit commodo
                        cillum eiusmod reprehenderit labore irure. Cillum
                        et incididunt et nostrud exercitation quis aute
                        laboris non ut adipisicing. Laboris ad minim aute
                        nulla proident deserunt velit anim sunt aliquip ut
                        sit. Exercitation aliquip ullamco officia non 
                        aliqua. Sint deserunt aliquip veniam id eiusmod
                        sit consectetur mollit ea aliqua officia consequat.
                        Magna non mollit nisi est commodo voluptate aute id.
                        Deserunt nostrud id do in nisi mollit deserunt non. 
                        Pariatur fugiat cillum irure elit sint nisi ad ipsum
                        culpa deserunt cupidatat esse consequat laboris. Id 
                        aliquip non consectetur esse proident duis Lorem.
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
        </>
    )
}

export default Books;