import React, {useState, useEffect} from "react";
import "./Library.css";
import "../Utils/index.css";
import card1 from "./Images/card1-img.svg";
import loveIcon from "./Icons/Vector.svg";
import msgIcon from "./Icons/msg-icon.svg";
import axios from "axios";
import Books from "../Modal/Books/Books";
// import AddBook from "../Modal/AddBook/AddBook"


// export let url = "https://lib-shelter.herokuapp.com/api/items";
export let url = "http://localhost:3004/books";

const Lib = () => {
    const [ books, setBooks] = useState([])
     const [ modalIsOpen, setModalIsOpen] = useState(false)
     const [data, setData] = useState('')


    useEffect(() => {
    axios.get(`${url}`)
    .then(res => {
        const test = res.data;
        setBooks(test)
        console.log(test)
    })
    .catch(err => console.log('Something went wrong...', err.message))
    }, []);

    const openModal = (id) => {
        setModalIsOpen(true)
        axios.get(`${url}/${id}`)
        .then(res => {
        const result = res.data
        setData(result)
        // console.log(result)
    })
    }

    const search = [
        {name: "christian chiemela", age: 40}
    ]
    search.filter(name => (
        console.log(name.name)
    ))

    return(
        <>
        <div className="lib">
            <div className="cards-container">
                {books.map(book => (
                    <>
                    <div className="card"
                    onClick={() => openModal(`${book.id}`)}
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
                    id={data.id}
                    setModalIsOpen={setModalIsOpen}
                    description={data.description} 
                    author={data.author}
                    isPublished={data.isPublished}
                    ISBN={data.ISBN}
                />
                </>
                ))} 
               
            </div>
        </div>
        </>
    )
}

export default Lib;