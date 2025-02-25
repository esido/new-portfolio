import githubLogo from "../../images/my_github.svg";
import instagramLogo from "../../images/my_instagram.svg";
import linkedinLogo from "../../images/my_linkedin.svg";
import bigGlow from "../../images/big_glow.png";
import smallCurves from "../../images/side_curves.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div>
        <div className="home-wrapper">
          <h1 className="home-title animate__animated animate__fadeInDown">
            Nurmurodov <br /> Jasurbek
          </h1>
        </div>
        <div className="home-info animate__animated animate__fadeInDown">
          <p className="home-text">
            I'm a full-stack developer with passion for learning and creating
          </p>
        </div>
      </div>
      <img src={bigGlow} className="home-circle" />
      <img src={smallCurves} className="home-circle" />
      <div className="home__links animate__animated animate__fadeInRight">
        <a href="https://github.com/esido" target="_blank">
          <img src={githubLogo} />
        </a>
        <a href="https://www.instagram.com/jasur.nj/" target="_blank">
          <img src={instagramLogo} />
        </a>
        <a
          href="https://www.linkedin.com/in/jasurbek-nurmurodov-36a750290/"
          target="_blank"
        >
          <img src={linkedinLogo} />
        </a>
      </div>
    </section>
  );
};

export default Home;
