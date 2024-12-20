import aboutimg from "../../assets/About2 (1).png";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About us</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={aboutimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Krusty Cone, an idea born out of passion and mission to spread
              test and delight, is a quirky food place located in the Lal Baugh
              arena of the mumbail district. The city, being such an incredibly
              busy place, always has people on the go, consistantly depending on
              top quality, good tasting fast-food. Krusty Cone fills the gap by
              delivering Cone Pizzas that are super-delicious, Waffies that give
              you as quickly as you go about your busy lives, Choose between our
              rustic, cheesy pizzas made in the compact-handy shape of a cone,
              or Walffles, all hot and crispy and freshly made shakes to
              complement the savoury choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
