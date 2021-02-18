import React from 'react';
import Profile from './img/berni-05.png';

import '../App.css';
import { DiReact } from "react-icons/di";
import { AiOutlineHeart } from "react-icons/ai";
import { FaGithub, FaCodepen, FaLinkedinIn, FaInstagram} from "react-icons/fa";

const Menu = (props) => {
      return (
        <div className="menu">
          
          <img className="profileImg" src={Profile} alt=""/>
           
          <ul className="category" style={{listStyleType: 'none'}}>
            <li>About me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>

          <ul className="icons" style={{listStyleType: 'none'}}>
            <li><FaGithub /></li>
            <li><FaCodepen /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedinIn /></li>
          </ul>

          <p>Made with <AiOutlineHeart /> & <DiReact /> </p>
        
        </div>
        
      );
    };
  


  export default Menu;