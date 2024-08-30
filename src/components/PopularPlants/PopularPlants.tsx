import PlantCard from "../PlantCard/PlantCard";
import cactus from "../../assets/cactus.png";
import "./PopularPlants.css";
const PopularPlants = () => {
  return (
    <div className="popularPlantsContainer">
      <div className="sectionIntro">
        <h3>Popular Plants</h3>
        <p>View All</p>
      </div>
      <div className="cardsContainer">
        <PlantCard
          name="Cactus"
          image={cactus}
          cardStyle={{ backgroundColor: "#B2E28D", opacity: "0.8" }}
        />
        <PlantCard
          name="Cactus"
          image={cactus}
          cardStyle={{ backgroundColor: "#FFE899", opacity: "0.8" }}
        />
      </div>
    </div>
  );
};

export default PopularPlants;
