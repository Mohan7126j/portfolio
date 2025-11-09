import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import project_1 from "../../images/project_1.png";
import project_2 from "../../images/project_2.png";
import project_3 from "../../images/project_3.png";
import "./index.css";

class Projects extends Component {
  componentDidMount() {
    const gallery = document.querySelector(".scroll-gallery");
    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener("mousedown", (e) => {
      isDown = true;
      gallery.classList.add("dragging");
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener("mouseleave", () => {
      isDown = false;
      gallery.classList.remove("dragging");
    });

    gallery.addEventListener("mouseup", () => {
      isDown = false;
      gallery.classList.remove("dragging");
    });

    gallery.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2; // adjust sensitivity
      gallery.scrollLeft = scrollLeft - walk;
    });
  }

  render() {
    return (
      <div className="project-bg-container" id="projects">
        <h1 className="project-heading">Projects</h1>
        <div className="scroll-gallery">
          <div className="scroll-track">
            <img src={project_1} alt="pro_1" />
            <img src={project_2} alt="pro_2" />
            <img src={project_3} alt="pro_3" />

            <img src={project_1} alt="pro_1" />
            <img src={project_2} alt="pro_2" />
            <img src={project_3} alt="pro_3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
