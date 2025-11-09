import {Component} from  "react";
import NavBar from "../NavBar";
import IntroSection from "../IntroSection";
import About from "../About";
import Skills  from "../Skills";
import "../Education"
import "./index.css";
import Education from "../Education";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer"


class Home extends Component{
    constructor(props) {
    super(props);
    this.state = {
      theme: "light", // default
    };
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === "light" ? "dark" : "light";
    this.setState({ theme: newTheme });
  };
    render(){
        const {theme} = this.state
        const isDark = theme === "dark";
        return (
            <div className={`home-container ${isDark ? "dark" : "light"}`}> 
                <NavBar themeName={theme} toggleFun = {this.toggleTheme}/>
                <IntroSection  themeName={theme} />
                <About/>
                <Skills/>
                <Education/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Home;