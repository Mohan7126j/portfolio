import {Component} from  "react";
import { Menu, User, House } from 'lucide-react';
import {FaCode, FaGraduationCap, FaEnvelope} from "react-icons/fa";
import "./index.css";


class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleSidebar = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render(){
        const {themeName, toggleFun} = this.props
        console.log(themeName)
        const isDark = themeName === "dark";
        console.log(isDark)
        return (
            <div>
                <div className={`desktop-nav-bar ${isDark ? "light" : "dark"}`}>
                    <ul className={`nav-items ${isDark ? "light" : "dark"}`}>
                        <li className={`${isDark ? "light" : "dark"}`}>Home</li>
                        <li className={`${isDark ? "light" : "dark"}`}>About</li>
                        <li className={`${isDark ? "light" : "dark"}`}>Skill</li>
                        <li className={`${isDark ? "light" : "dark"}`}>Education</li>
                        <li className={`${isDark ? "light" : "dark"}`}>Contact</li>
                        <li className={`${isDark ? "light" : "dark"}`} onClick={toggleFun}>{isDark ? "Light Mode" : "Dark Mode"}</li>
                    </ul>
                </div>
                <div className={`mobile-nav-bar ${isDark ? "light" : "dark"}`}>
                    <button onClick={this.toggleSidebar} className="hamburger-btn display-end button">
                        <Menu />
                    </button>
                    {/* Dark Overlay (click to close) */}
        {this.state.isOpen && (
          <div className="overlay" onClick={this.toggleSidebar}></div>
        )}

        {/* Sidebar on Right */}
        <div className={`sidebar ${this.state.isOpen ? "open" : ""}`}>
          
          <ul>
            <li className="nav-list"><House className="icon" /><span>Home</span></li>
            <li className="nav-list"><User className="icon" /><span>About</span></li>
            <li className="nav-list"><FaCode className="icon"  /> <span>Skills</span></li>
            <li className="nav-list"><FaGraduationCap className="icon" /><span>Education</span></li>
            <li className="nav-list"><FaEnvelope className="icon"  /><span>Contact</span></li>
            
                        <li className="nav-list" onClick={toggleFun}>{isDark ? "Light Mode" : "Dark Mode"}</li>
          </ul>
        </div>
                </div>
            </div>
        )
    }
}

export default NavBar;