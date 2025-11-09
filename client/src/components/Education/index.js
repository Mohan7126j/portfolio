import {Component} from "react";
import st_joseph from "../../images/st_joseph.jpg"
import beta from "../../images/beta.jpg"
import "./index.css"

class Education extends Component{
    render(){
        return(
            <div className="education-bg-container" id="education">
                <div className="education-title">
                    <h3>My Education</h3>
                </div>
                <div className="edu-flex-container">
                    <div className="edu-container">
                        <img className="edu-pic" src={st_joseph} alt="st-joseph"/>
                        <div className="edu-content">
                            <h5>St. Joseph College of Engineering</h5>
                            <p>Bachelore of Tecnology - Information Technology</p>
                            <p>Year of passing : 2021 - 2025</p>
                            <p className="bold">CGPA: 8.24</p>
                        </div>
                    </div>
                    <div className="edu-container">
                        <img className="edu-pic" src={beta} alt="beta-img"/>
                        <div className="edu-content">
                            <h5>Beta Public School [CBSE]</h5>
                            <p>Higher Secondary Certificate</p>
                            <p>Year of passing : 2020 - 2021</p>
                            <p className="bold">Percentage: 85</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education