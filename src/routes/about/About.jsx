import laptop from "../../images/laptop.png";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-block">
        <img
          src={laptop}
          alt=""
          className="animate__animated animate__fadeInLeft"
        />
        <div className="animate__animated animate__fadeInDown">
          <h2 className="about-title">About me</h2>
          <p className="about-text">
            I am a passionate Full Stack Developer with experience in React,
            Node.js, NestJS, PostgreSQL, and MongoDB. I enjoy building scalable,
            high-performance web applications and continuously improving my
            skills. I specialize in end-to-end development, creating both
            frontend and backend solutions with a focus on clean code and
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
