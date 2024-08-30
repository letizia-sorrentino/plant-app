
export interface IButton {
  onClick: () => void;
  icon: string;
  className?: string;
}

const PrimaryDarkButton: React.FC<IButton> = ({ onClick, icon, className }) => {
  return (
    <button className={className} onClick={onClick}>
      <img className="iconButton" src={icon} alt="icon" />
    </button>
  );
};

export default PrimaryDarkButton;
