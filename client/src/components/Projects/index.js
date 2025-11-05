import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import project_1 from "../../images/project_1.png";
import project_2 from "../../images/project_2.png";
import project_3 from "../../images/project_3.png";
import "./index.css"

class Projects extends Component{
    render(){
        return(
            <div className='project-bg-container'>
                <div className='project-title'>
                    <h2>Projects Made</h2>
                </div>
                <div className='carousel-size'>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={project_1} class="d-block w-100" alt="project-1"/>
                        </div>
                        <div class="carousel-item">
                            <img src={project_2} class="d-block w-100" alt="project-2"/>
                        </div>
                        <div class="carousel-item">
                            <img src={project_3} class="d-block w-100" alt="project-3"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects