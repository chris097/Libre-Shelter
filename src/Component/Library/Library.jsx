import React, {useState, useEffect} from "react";
import "./Library.css";
import "../Utils/index.css";
import card1 from "./Images/card1-img.svg";
import loveIcon from "./Icons/Vector.svg";
import msgIcon from "./Icons/msg-icon.svg";
import axios from "axios";
import Books from "../Modal/Books/Books";

export let url = "https://lib-shelter.herokuapp.com/api/items";

const Lib = () => {
    const [ books, setBooks] = useState([])
     const [ modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
    axios.get(`${url}`)
    .then(res => setBooks(res.data))
    .catch(err => console.log('Something went wrong...', err.message))
    }, []);   
    return(
        <>
        <div className="lib">
            <div className="cards-container">
                {books.map(book => (
                    <>
                    <div className="card"
                    onClick={e => setModalIsOpen(true)}
                    key={setBooks}
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
                            >24</div>
                        </div>
                        <div className="msg">
                            <img src={msgIcon} alt=""/>
                            <div className="msg-num">23</div>
                        </div>
                    </div>
                </div>
                <Books
                    modalIsOpen={modalIsOpen}
                    id={book.id}
                    setModalIsOpen={setModalIsOpen}
                    book={book.description} 
                    author={book.author}
                />
                </>
                ))} 
               
            </div>
        </div>
        </>
    )
}

export default Lib;