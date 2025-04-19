import firstProject from "../../images/project1.png";
import secondProject from "../../images/project2.png";
import thirdProject from "../../images/project3.png";
import fourthProject from "../../images/project4.png";
import fivesProject from "../../images/project5.png";
import cssIcon from "../../images/cssIcon.svg";
import jsIcon from "../../images/jsIcon.svg";
import sassIcon from "../../images/sassIcon.svg";
import reactIcon from "../../images/reactIcon.svg";
import nextIcon from "../../images/nextIcon.svg";
import htmlIcon from "../../images/htmlIcon.svg";
import tsctIcon from "../../images/tscIcon.svg";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="project-content">
          <div className="project-block">
            <div className="projects-card animate__animated animate__fadeInLeft">
              <a
                href="https://cafenetwork.netlify.app/"
                className="projects-link"
                target="_blank"
              >
                <img src={firstProject} />
              </a>
              <span>Food Network</span>
              <div className="projects-line"></div>
              <div className="projects-lang">
                <img src={htmlIcon} alt="" />
                <img src={cssIcon} alt="" />
              </div>
            </div>
            <div className="projects-card animate__animated animate__fadeInLeft">
              <a
                href="https://effulgent-cheesecake-902806.netlify.app/"
                className="projects-link"
                target="_blank"
              >
                <img src={secondProject} />
              </a>
              <span>To Do List</span>
              <div className="projects-line"></div>
              <div className="projects-lang">
                <img src={htmlIcon} alt="" />
                <img src={sassIcon} alt="" />
                <img src={jsIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="projects-card animate__animated animate__fadeInDown">
            <a
              href="https://ebay-1-so3k.vercel.app/"
              className="projects-link"
              target="_blank"
            >
              <img src={thirdProject} />
            </a>
            <span>Ebay</span>
            <div className="projects-line"></div>
            <div className="projects-lang">
              <img src={htmlIcon} alt="" />
              <img src={sassIcon} alt="" />
              <img src={reactIcon} alt="" />
              <img src={tsctIcon} alt="" />
            </div>
          </div>
          <div className="project-block">
            <div className="projects-card animate__animated animate__fadeInRight">
              <a
                href="https://makeup-coral.vercel.app/"
                target="_blank"
                className="projects-link"
              >
                <img src={fourthProject} />
              </a>
              <span>Beaty Bay</span>
              <div className="projects-line"></div>
              <div className="projects-lang">
                <img src={htmlIcon} alt="" />
                <img src={cssIcon} alt="" />
                <img src={reactIcon} alt="" />
              </div>
            </div>
            <div className="projects-card animate__animated animate__fadeInRight">
              <a
                href="https://api-soure.netlify.app/"
                className="projects-link"
                target="_blank"
              >
                <img src={fivesProject} />
              </a>
              <span>Api Source</span>
              <div className="projects-line"></div>
              <div className="projects-lang">
                <img src={htmlIcon} alt="" />
                <img src={cssIcon} alt="" />
                <img src={nextIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
