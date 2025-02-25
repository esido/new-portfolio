import cssIcon from "../../images/cssIcon.svg";
import jsIcon from "../../images/jsIcon.svg";
import sqlIcon from "../../images/sqlIcon.svg";
import nodeIcon from "../../images/nodeIcon.svg";
import reactIcon from "../../images/reactIcon.svg";
import mongoIcon from "../../images/mongoIcon.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-title animate__animated animate__fadeInDown">
        My Skills
      </h2>
      <div className="skills-wrapper">
        <div className="skills-block">
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={cssIcon} alt="" />
            <span>Css</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={jsIcon} alt="" />
            <span>Javascript</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={reactIcon} alt="" />
            <span>React</span>
          </div>
        </div>
        <div className="skills-block">
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={nodeIcon} alt="" />
            <span>Node</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={mongoIcon} alt="" />
            <span>Tailwind</span>
          </div>
          <div className="skills-block__item animate__animated animate__fadeInDown">
            <img src={sqlIcon} alt="" />
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
