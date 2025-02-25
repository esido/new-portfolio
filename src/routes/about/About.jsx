import laptop from "../../images/laptop.png";
import codewars from "../../images/codewars.png";
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
            Nurmurodov Jasurbek is a 20-year-old student at TUIT and an aspiring
            Full Stack developer passionate about creating elegant and
            functional digital solutions. He has strong expertise in HTML, CSS,
            JavaScript, React.js, Node.js, MongoDB, and PostgreSQL. With a keen
            eye for detail and a commitment to continuous learning, he stays up
            to date with industry trends. He completed frontend development
            training at Najot Ta'lim and is currently finishing a backend
            development course. This enables him to build optimized and
            high-performance web applications with both server-side and
            client-side functionality.
          </p>
          <img src={codewars} alt="" width={700} />
        </div>
      </div>
    </section>
  );
};

export default About;
