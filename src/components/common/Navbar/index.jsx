import React, { Component } from 'react';
import {FaUser, FaBars, FaFile, FaPhone, FaUserCheck,FaFacebook, FaInstagram, FaVk, FaGithub, FaTwitter} from 'react-icons/fa'
import './index.css';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li className = 'name_website'>STEPAN BADALYAN <br/> <span>FRONT-END DEVELOPER</span></li>
                        <li className = 'navbar_section'><div className = 'navbar_style'><a href="#"><span>ABOUT</span> <FaUser/></a></div> </li>
                        <li className = 'navbar_section'><div className = 'navbar_style'><a href="#"><span>SKILLS</span> <FaBars/></a></div></li>
                        <li className = 'navbar_section'><div className = 'navbar_style'><a href="#"><span>PORTFOLIO</span> <FaFile/></a></div></li>
                        <li className = 'navbar_section'><div className = 'navbar_style'><a href="#"><span>RESUME</span> <FaUserCheck/></a></div> </li>
                        <li className = 'navbar_section'><div className = 'navbar_style'><a href="#"><span>CONTACTS</span> <FaPhone/></a></div></li>
                    </ul>
                </nav>
                <div className = ' MediaRecources '>
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=100006173985643" target = 'blank_'><FaFacebook/></a></li>
                            <li><a href="https://vk.com/id239687189" target = 'blank_'><FaVk/></a></li>
                            <li><a href="https://www.instagram.com/monch0330/" target = 'blank_'><FaInstagram/></a></li>
                            <li><a href="https://github.com/monch1234" target = 'blank_'><FaGithub/></a></li>
                            <li><a href="https://twitter.com/stepan92661522" target = 'blank_'><FaTwitter/></a></li>
                        </ul>
                        <p>Copyright - 2017 t-folio - HTML Template.</p>
                </div>
            </header>
        )
    }
}