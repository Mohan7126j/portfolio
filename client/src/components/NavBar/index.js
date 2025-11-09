import { Component } from "react";
import { Menu, User, House, FolderOpenDot, X  } from 'lucide-react';
import {FaCode, FaGraduationCap, FaEnvelope} from "react-icons/fa";
import "./index.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "intro",
      isOpen: false,
        
    };
    this.sectionIds = [
      "intro",
      "about",
      "skills",
      "education",
      "projects",
      "contact",
    ];
  }

  toggleSidebar = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
  let current = this.state.active;
  let middle = window.innerHeight / 2;

  for (let id of this.sectionIds) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= middle && rect.bottom >= middle) {
        current = id;
        break;
      }
    }
  }

  if (current !== this.state.active) {
    this.setState({ active: current });
  }
};

  scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const elementRect = el.getBoundingClientRect();
  const offsetTop = window.scrollY + elementRect.top;
  const elementCenter = offsetTop + elementRect.height / 2;
  const viewportCenter = window.innerHeight / 2;
  const scrollPosition = elementCenter - viewportCenter;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });

  // update active manually so UI reflects click immediately
  this.setState({ active: id });
};

  render() {
    const { themeName, toggleFun } = this.props;
    const isDark = themeName === "dark";
    const { active, isOpen } = this.state;

    return (
      <nav>
        <div className={`desktop-nav-bar ${isDark ? "dark" : "light"}`}><ul className="nav-list">
          <li
            className={active === "intro" ? "active" : ""}
            onClick={() => this.scrollTo("intro")}
          >
            Home
          </li>
          <li
            className={active === "about" ? "active" : ""}
            onClick={() => this.scrollTo("about")}
          >
            About
          </li>

          <li
            className={`dropdown ${
              ["skills", "education", "projects"].includes(active) ? "active" : ""
            }`}
          >
            <span>Portfolio ▾</span>
            <ul className={`dropdown-menu ${isDark ? "dark" : "light"}`}>
              <li
                className={active === "skills" ? "active" : ""}
                onClick={() => this.scrollTo("skills")}
              >
                Skills
              </li>
              <li
                className={active === "education" ? "active" : ""}
                onClick={() => this.scrollTo("education")}
              >
                Education
              </li>
              <li
                className={active === "projects" ? "active" : ""}
                onClick={() => this.scrollTo("projects")}
              >
                Projects
              </li>
            </ul>
          </li>

          <li
            className={active === "contact" ? "active" : ""}
            onClick={() => this.scrollTo("contact")}
          >
            Contact
          </li>

          <li onClick={toggleFun}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </li>
        </ul></div>



        <div className={`mobile-nav-bar ${isDark ? "dark" : "light"}`}>
                    <button onClick={this.toggleSidebar} className="hamburger-btn display-end button">
                        {isOpen ?  <X /> : <Menu />}
                    </button>
                    {/* Dark Overlay (click to close) */}
        {this.state.isOpen && (
          <div className="overlay" onClick={this.toggleSidebar}></div>
        )}

        {/* Sidebar on Right */}
        <div className={`sidebar ${this.state.isOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-list"  onClick={this.toggleSidebar}><House className="icon" /><span className={active === "intro" ? "active" : ""}
            onClick={() => this.scrollTo("intro")}>Home</span></li>
            <li className="nav-list"  onClick={this.toggleSidebar}><User className="icon" /><span 
            className={active === "about" ? "active" : ""}
            onClick={() => this.scrollTo("about")}>About</span></li>
            <li className="nav-list"  onClick={this.toggleSidebar}><FaCode className="icon"  /> <span 
                className={active === "skills" ? "active" : ""}
                onClick={() => this.scrollTo("skills")}>Skills</span></li>
            <li className="nav-list"  onClick={this.toggleSidebar}><FaGraduationCap className="icon" /><span 
                className={active === "education" ? "active" : ""}
                onClick={() => this.scrollTo("education")}>Education</span></li>
            <li className="nav-list"  onClick={this.toggleSidebar}><FolderOpenDot  className="icon"  /><span 
                className={active === "projects" ? "active" : ""}
                onClick={() => this.scrollTo("projects")}>Projects</span></li>
            <li className="nav-list"  onClick={this.toggleSidebar}><FaEnvelope className="icon"  /><span 
            className={active === "contact" ? "active" : ""}
            onClick={() => this.scrollTo("contact")}>Contact</span></li>
            <li className="nav-list" onClick={toggleFun}><span onClick={this.toggleSidebar}>{isDark ? "Light Mode" : "Dark Mode"}</span></li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
