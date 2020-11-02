import React from "react";
import "./Library.css";
import "../Utils/index.css";
import card1 from "./Images/card1-img.svg";
import card2 from "./Images/card2-img.svg";
import card3 from "./Images/card3-img.svg";
import card4 from "./Images/card4-img.svg";
import loveIcon from "./Icons/Vector.svg";
import msgIcon from "./Icons/msg-icon.svg";
// import Books from "../Modal/Books/Books";

const Lib = () => {
    return(
        <>
        <div className="lib">
            <div className="cards-container">
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
        {/* <Books /> */}
        </>
    )
}

export default Lib;