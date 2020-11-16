import React, {useState} from "react";
import "./Header.css";
import "../Utils/index.css";
import "../Modal/AddBook/AddBook.css";
import searchFormIcon from "../Header/Icons/search-icon.svg";
import addBookIcon from "../Header/Icons/add-book-icon.svg";
import BookModal from "../Modal/AddBook/AddBook";

const SearchForm = ({ search }) => {
    return(
        <>
        <div className="searchBox-col"></div>
        <div className="search-box">
            <div>Recent Searches</div>
            <div className="searchBox">
                <input type="search" id="search" value={search}/>
                <button type="submit" value={search}>Select</button>
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
    const [searchBox, setSearchBox] = useState([])

    const mySubmitHandler = (e) =>{
        e.stopPropagation()
        console.log(tittle, book)
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
                    onChange={e => setSearch(e.target.value)}
                    onBlur={e => setSearch(e.target.value)}
                    >
                        <img src={searchFormIcon} alt="search-icon"/>
                        <input 
                        type="search" 
                        id="search" 
                        placeholder="Search book"
                        onClick={() => setSearchBox(!searchBox)}
                        value={search}
                        />
                    </div>
                    {!searchBox ? <SearchForm search={search} /> : searchBox}
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