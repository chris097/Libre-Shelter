import React, {useState, useEffect} from "react";
import "./Library.css";
import "../Utils/index.css";
import card1 from "./Images/card1-img.svg";
import loveIcon from "./Icons/Vector.svg";
import msgIcon from "./Icons/msg-icon.svg";
import axios from "axios";
import Books from "../Modal/Books/Books";
import Header from "../Header/Header";
// import AddBook from "../Modal/AddBook/AddBook"

const Loading = () => {
    return(
        <h3 className="loading">Fetching data <i className="fa fa-refresh fa-spin"></i></h3>
    )
}

const NoData = () => {
    return(
        <h4 className="loading">No data Found...</h4>
    )
}

export let url = "https://lib-shelter.herokuapp.com/api/items";
// export let url = "http://localhost:3004/books";

const Lib = () => {
    const [ books, setBooks] = useState([])
     const [ modalIsOpen, setModalIsOpen] = useState(false)
     const [data, setData] = useState('')
     const [loading, setLoading] = useState(<Loading />)
     const [noData, setNoData] = useState(false)

    useEffect(() => {
    axios.get(`${url}`)
    .then(res => {
        const test = res.data;
        if(test){
            setTimeout(() => {
                console.log(test)
                setBooks(test)
                setLoading('')
                // window.location.reload(false)
            }, 3000);
        }
        if(test.length === 0){
            console.log('no-data-found 404...')
            setTimeout(() => {
                setNoData(<NoData />)
            }, 3100);
        }
        console.log(test.length === 0)

        return test;
    })
    .catch(err => console.log('Something went wrong...', err.message))
    }, []);

    const openModal = (_id) => {
        setModalIsOpen(true)
        axios.get(`${url}/${_id}`)
        .then(res => {
        const result = res.data
        setData(result)
        // console.log(result)
    })
    }

    return(
        <>
        {loading}
        <div className="lib">
            {noData}
            <div className="cards-container">
                {books.map(book => (
                    <>
                    <div className="card"
                    onClick={() => openModal(`${book._id}`)}
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
                    _id={data._id}
                    setModalIsOpen={setModalIsOpen}
                    description={data.description} 
                    author={data.author}
                    isPublished={data.isPublished}
                    ISBN={data.ISBN}
                    title={data.title}
                    bookUrl={data.bookUrl}
                />
                <Header />
                </>
                ))} 
               
            </div>
        </div>
        </>
    )
}

export default Lib;