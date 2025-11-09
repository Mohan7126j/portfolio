import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import skill from "../../images/skill.png"
import './index.css'

class Skills extends Component {
  render() {
    return (
      <div className="skill-bg-container" id="skills">
        <h3 className="text-center mb-4">My Skills</h3>
        
        <div className="skill-image-container">
          <img className="skill-image" src={skill} alt="skill"/>
        </div>
      </div>
    );
  }
}

export default Skills;
