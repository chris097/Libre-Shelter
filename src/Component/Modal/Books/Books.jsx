import React from "react";
import "./Book.css";
import closeIcon from "../AddBook/Icons/close.svg";
import bookImg from "./Images/book-img.svg";
import loveIcon from "./Icons/love-icon.svg";
import editIcon from "./Icons/edit-icon.svg";
import deleteIcon from "./Icons/delete-icon.svg";
import commentImg from "./Images/comment-img.svg";


const Books = () => {
    return(
        <>
        <div className="books"></div>
        <div className="books-container">
            <div className="column">
                <div>The purse mase</div>
                <div><img src={closeIcon} alt=""/></div>
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
            <div>32 Comments</div>
            <div className="col">
                <div className="comment-img"><img src={commentImg} alt=""/></div>
                <div>comment box</div>
            </div>
        </div>
        </>
    )
}

export default Books;