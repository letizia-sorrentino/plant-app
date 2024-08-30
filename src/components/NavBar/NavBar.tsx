import HomeIcon from "../../assets/home-icon.png";
import SearchIcon from "../../assets/explore-icon.png";
import ScanIcon from "../../assets/scan-icon.png";
import LibraryIcon from "../../assets/saved-icon.png";
import AccountIcon from "../../assets/profile-icon.png";
import "./NavBar.css";
const Nav = () => {
  // const handleClick = () => {
  //   console.log("clicked");
  // };
  return (
    <>
      <div className="navBarContainer">
        <img src={HomeIcon} alt="home-tab" />
        <img src={SearchIcon} alt="search-tab" />
        <img src={ScanIcon} alt="scan-tab" />
        <img src={LibraryIcon} alt="library-tab" />
        <img src={AccountIcon} alt="account-tab" />
      </div>
    </>
  );
};

export default Nav;
