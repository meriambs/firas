import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar-top">
            <i className="list-item-logo fa-solid fa-feather-pointed"></i>
            <span className="brand">APP</span>
        </div>
        <div className="sidebar-center">
            <ul className="list">
            <li className="list-item-active">
                <i className="list-item-logo fa-solid fa-flag"></i>
                <Link className="list-item-text" to="/?cat=national">
                National
                </Link>
            </li>
            <li className="list-item">
                <i className="list-item-logo fa-solid fa-democrat"></i>
                <Link className="list-item-text" to="/?cat=politics">
                Politics
                </Link>
            </li>
            <li className="list-item">
                <i className="list-item-logo fa-brands fa-ethereum"></i>
                <Link className="list-item-text" to="/?cat=economy">
                Economics
                </Link>
            </li>
            <li className="list-item">
                <i className="list-item-logo fa-solid fa-globe"></i>
                <Link className="list-item-text" to="/?cat=international">
                International
                </Link>
            </li>
            <li className="list-item">
                <i className="list-item-logo fa-solid fa-basketball"></i>
                <Link className="list-item-text" to="/?cat=sport">
                Sports
                </Link>
            </li>
            <li className="list-item">
                <i className="list-item-logo fa-solid fa-palette"></i>
                <Link className="list-item-text" to="/?cat=art">
                Arts
                </Link>
            </li>
            <li className="list-item">
                <i className="list-item-logo fa-solid fa-heart-pulse"></i>
                <Link className="list-item-text" to="/?cat=fitness">
                Health & Fitness
                </Link>
            </li>
            <li className="list-item">
                <i className="list-item-logo fa-solid fa-network-wired"></i>
                <Link className="list-item-text" to="/?cat=tech">
                High-Tech
                </Link>
            </li>
            </ul>
        </div>
        <div className="sidebar-bottom">
            <div className="color-box dark"></div>
            <div className="color-box night"></div>
            <div className="color-box light"></div>
        </div>
        </div>
    );
};

export default SideBar;
