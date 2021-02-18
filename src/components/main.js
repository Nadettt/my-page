import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FaArrowCircleDown, FaArrowDown } from 'react-icons/fa';
import '../App.css';

const Main = (props) => {
    return (
        <div className="mainContent">
            <p>Hello</p>
            <p>I'm Bernadett, passionate about</p>
            <p>webdesign and front-end development.</p>
            <p>see more</p>
            <p className="arrow-icon" style={{listStyleType: 'none'}}><FaArrowCircleDown /></p>
        </div>
    );
}; 

export default Main;