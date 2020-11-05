import React, {useState, useEffect} from "react";
import "./Library.css";
import "../Utils/index.css";
import card1 from "./Images/card1-img.svg";
import card2 from "./Images/card2-img.svg";
import card3 from "./Images/card3-img.svg";
import card4 from "./Images/card4-img.svg";
import loveIcon from "./Icons/Vector.svg";
import msgIcon from "./Icons/msg-icon.svg";
import axios from "axios";
import closeIcon from "../Modal/AddBook/Icons/close.svg";
import bookImg from "../Modal/Books/Images/book-img.svg";
import editIcon from "../Modal/Books/Icons/edit-icon.svg";
import deleteIcon from "../Modal/Books/Icons/delete-icon.svg";
import commentImg from "../Modal/Books/Images/comment-img.svg";
import "../Modal/Books/Book.css";
import Modal from "react-modal";

const Books = ({modalIsOpen, setModalIsOpen}) => {
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
        </Modal>
       </>
    )
}

const Lib = () => {
    const [ books, setBooks] = useState([])
     const [ modalIsOpen, setModalIsOpen] = useState(true)

    let url = "http://localhost:3004/books";

    useEffect(() => {
    axios.get(`${url}`)
    .then(res => setBooks(res.data))
    .catch(err => console.log('Something went wrong...', err.message))
    }, [url]);
        
    return(
        <>
        <div className="lib">
            <div className="cards-container">
                {books.map(book => (
                    <>
                    <div className="card"
                    id={book.id}
                    key={book.id}
                    >
                    <img src={card1} alt="card1"/>
                    <div className="book-name">
                        <div className="fsw-600">{book.title}</div>
                        <div className="secondary-color fsz-13">{book.author}</div>
                    </div>
                    <div className="tweet">
                        <div className="like-comment"
                        onClick={e => 
                            console.log(e)
                        }
                        >
                            <img src={loveIcon} alt=""/>
                            <div className="like-num"
                            >{book.likes}</div>
                        </div>
                        <div className="msg">
                            <img src={msgIcon} alt=""/>
                            <div className="msg-num">23</div>
                        </div>
                    </div>
                </div>
                    </>
                ))}
                <div className="card">
                    <img src={card1} alt="card1"/>
                    <div className="book-name">
                        <div className="fsw-600">The Purple Maze</div>
                        <div className="secondary-color fsz-13">Stuart Matt</div>
                    </div>
                    <div className="tweet">
                        <div className="like-comment">
                            <img src={loveIcon} alt=""/>
                            <div className="like-num">23</div>
                        </div>
                        <div className="msg">
                            <img src={msgIcon} alt=""/>
                            <div className="msg-num">23</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card2} alt="card1"/>
                    <div className="book-name">
                        <div className="fsw-600">The Purple Maze</div>
                        <div className="secondary-color fsz-13">Stuart Matt</div>
                    </div>
                    <div className="tweet">
                        <div className="like-comment">
                            <img src={loveIcon} alt=""/>
                            <div className="like-num">23</div>
                        </div>
                        <div className="msg">
                            <img src={msgIcon} alt=""/>
                            <div className="msg-num">23</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card3} alt="card1"/>
                    <div className="book-name">
                        <div className="fsw-600">The Purple Maze</div>
                        <div className="secondary-color fsz-13">Stuart Matt</div>
                    </div>
                    <div className="tweet">
                        <div className="like-comment">
                            <img src={loveIcon} alt=""/>
                            <div className="like-num">23</div>
                        </div>
                        <div className="msg">
                            <img src={msgIcon} alt=""/>
                            <div className="msg-num">23</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card4} alt="card1"/>
                    <div className="book-name">
                        <div className="fsw-600">The Purple Maze</div>
                        <div className="secondary-color fsz-13">Stuart Matt</div>
                    </div>
                    <div className="tweet">
                        <div className="like-comment">
                            <img src={loveIcon} alt=""/>
                            <div className="like-num">23</div>
                        </div>
                        <div className="msg">
                            <img src={msgIcon} alt=""/>
                            <div className="msg-num">23</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card4} alt="card1"/>
                    <div className="book-name">
                        <div className="fsw-600">The Purple Maze</div>
                        <div className="secondary-color fsz-13">Stuart Matt</div>
                    </div>
                    <div className="tweet">
                        <div className="like-comment">
                            <img src={loveIcon} alt=""/>
                            <div className="like-num">23</div>
                        </div>
                        <div className="msg">
                            <img src={msgIcon} alt=""/>
                            <div className="msg-num">23</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Books modalIsOpen={modalIsOpen}/>
        </>
    )
}

export default Lib;