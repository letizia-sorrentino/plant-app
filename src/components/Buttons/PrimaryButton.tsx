export interface IButton {
  onClick: () => void;
  label: string;
  className?: string;
}

const PrimaryButton: React.FC<IButton> = ({ onClick, label, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
