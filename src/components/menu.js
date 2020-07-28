import React from 'react';
import Profile from './img/profile.png';

import '../App.css';
import { DiReact } from "react-icons/di";
import { AiOutlineHeart } from "react-icons/ai";
import { FaGithub, FaCodepen , FaBehance, FaLinkedinIn} from "react-icons/fa";

const Menu = (props) => {
      return (
        <div className="menu">
          
          <img className="profileImg" src={Profile} alt=""/>
           
          <h2>Bernadett Costea</h2>
          <p>bernadett.c@gmail.com</p>
          <p>+47 463 784 88</p>
          <ul className="category" style={{listStyleType: 'none'}}>
            <li>Intro</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>

          <ul className="icons" style={{listStyleType: 'none'}}>
            <li><FaGithub /></li>
            <li><FaCodepen /></li>
            <li><FaBehance /></li>
            <li><FaLinkedinIn /></li>
          </ul>

          <p>Made with <AiOutlineHeart /> & <DiReact /> </p>
        
        </div>
        
      );
    };
  


  export default Menu;