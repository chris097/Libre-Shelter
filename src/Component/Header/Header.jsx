import React, {useState} from "react";
import "./Header.css";
import "../Utils/index.css"
import searchFormIcon from "../Header/Icons/search-icon.svg";
import addBookIcon from "../Header/Icons/add-book-icon.svg";
import AddBook from "../Modal/AddBook/AddBook";

const Header = () =>{
    const [addBook, setAddBook] = useState([])

    function displayAddBook () {
        return(
            setAddBook(<AddBook />)
        )
    }

    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">LibraShelter</div>
                    <div className="searchForm">
                        <img src={searchFormIcon} alt="search-icon"/>
                    <input type="search" id="search" placeholder="Search book"/>
                    </div>
                    <button 
                    className="add-book"
                    onClick={displayAddBook}
                    >
                        <>
                        <img src={addBookIcon} alt="Add-book-icon"/>
                        <span>Add Book</span>
                        </>
                    </button>
                </div>
            </div>
        </div>
        { !addBook ? " " : addBook }
        </>
    )
}

export default Header;