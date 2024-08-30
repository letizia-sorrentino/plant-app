interface PlantCardProps {
  name: string;
  image: string;
  className?: string;
  cardStyle?: React.CSSProperties;
  nameStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  image,
  cardStyle,
  nameStyle,
  imageStyle,
}) => {
  return (
    <>
      <div
        style={{
          width: "8rem",
          height: "7.5rem",
          borderRadius: "0.5rem",
          margin: "1rem",
          ...cardStyle,
        }}
      >
        <h4
          style={{
            marginLeft: "0.5rem",
            ...nameStyle,
          }}
        >
          {name}
        </h4>
        <img
          src={image}
          alt={name}
          style={{
            ...imageStyle,
          }}
        />
      </div>
    </>
  );
};

export default PlantCard;
