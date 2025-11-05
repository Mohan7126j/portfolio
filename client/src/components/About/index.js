import {Component} from "react";
import MyPdf from "./resume.pdf"
import "./index.css";

class About extends Component{
    openDrive = () => {
        window.open(MyPdf, "_blank");
    };
    render(){
        return(
            <div className="about-bg-container">
                <div className="about-container">
                    
                    <div>
                        <p className="about">I'm Mohan, a B.Tech Information Technology graduate and a web developer passionate about building real-world solutions that make life easier. I love turning ideas into working products especially responsive web applications that are fast, scalable, and user-focused.</p>
                        <br/>
                        <p  className="about">I’ve gained hands-on experience through internships, hackathons, and personal projects, working with <span className="bold">HTML, CSS, JavaScript, React, Node.js, Express, and SQL</span> for building and managing web applications. I enjoy designing efficient database structures, writing optimized SQL queries, solving problems, and constantly improving my skills.</p>
                        <br/>
                        <p>E-mail : mohan7126j@gmail.com</p>
                        <p>Phone no : 9600978545</p>
                        <button onClick={this.openDrive} className="button">Resume</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About