import heroImage from "../../assets/hero-image.png";
import PrimaryButton from "../Buttons/PrimaryButton";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroBanner">
        <div className="heroContent">
          <h2 className="heroTitle">Identify Your Plant</h2>
          <p className="heroText">
            Simply scan to discover the answer instantly.
          </p>
          <PrimaryButton
            className="actionButton"
            onClick={() => {}}
            label="Scan Plant"
          />
        </div>
        <img
          className="heroImage"
          src={heroImage}
          alt="houseplants illustration"
        />
      </div>
    </div>
  );
};

export default HeroSection;
