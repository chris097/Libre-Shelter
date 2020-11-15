import React, {useState} from "react";
import "./Header.css";
import "../Utils/index.css";
import "../Modal/AddBook/AddBook.css";
import searchFormIcon from "../Header/Icons/search-icon.svg";
import addBookIcon from "../Header/Icons/add-book-icon.svg";
import BookModal from "../Modal/AddBook/AddBook";

const SearchForm = ({search, searchCol}) => {
    return(
        <>
        <div className="search-box">
            <div>Recent Searches</div>
            <div className="searchBox">
                {/* <img src={searchFormIcon} alt="search-icon"/> */}
                <input type="search" id="search" value={search}/>
            </div>
            <p>{search}</p>
        </div>
        </>
    )
}

const Header = () =>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [tittle, setTittle] = useState('');
    const [book, setBook] = useState('')
    const [search, setSearch] = useState([])

    const mySubmitHandler = (e) =>{
        e.stopPropagation()
        console.log(tittle, book)
    }

    const searchItems = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">LibraShelter</div>
                    <div 
                    className="searchForm"
                    value={search}
                    onChange={searchItems}
                    onBlur={searchItems}
                    >
                        <img src={searchFormIcon} alt="search-icon"/>
                        <input type="search" id="search" placeholder="Search book"/>
                    </div>
                    <SearchForm  
                    search={search}
                    />
                    {/* mobile */}
                    <div className="mobile-search">
                        <img src={searchFormIcon} alt=""/>
                    </div>
                    <button 
                    className="add-book"
                    onClick={() => setModalIsOpen(true)}
                    >
                        <>
                        <img src={addBookIcon} alt="Add-book-icon"/>
                        <span>Add Book</span>
                        </>
                    </button>
                </div>
            </div>
        </div>
        <BookModal 
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        mySubmitHandler={mySubmitHandler}
        book={book}
        setBook={setBook}
        setTittle={setTittle}
         />
        </>
    )
}

export default Header;