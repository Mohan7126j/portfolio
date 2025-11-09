import {Component} from  "react";
import mohan from "../../images/mohan.png"
import mohan_dark from "../../images/mohan_dark.jpg";
import "./index.css"


class IntroSection extends Component{
    render(){
        const {themeName} = this.props
        const isDark = themeName === "dark"
        return(
            <div className="intro-container" id="intro">
                <div>
                    <h4>Hello,</h4>
                    <h1 className="name">I'm Mohan</h1>
                    <h2>Full Stack Developer</h2>
                    
                </div>
                <div>
                    <img className="intro-mohan-img" src={isDark ? mohan_dark : mohan} alt="mohan"/>
                </div>
            </div>
        )
    }
}

export default IntroSection;