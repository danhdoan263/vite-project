//logo
import logo from "../../assets/ins-logo.svg";
import activityFeed from "../../assets/menu-icon/activityFeed.svg";
import findPeople from "../../assets/menu-icon/findPeople.svg";
import homeFill from "../../assets/menu-icon/homeFill.svg";
import messenger from "../../assets/menu-icon/messenger.svg";
import newPost from "../../assets/menu-icon/newPost.svg";
//scss
import "../../icomoon.css";
import "./HeaderAppBar.scss";
const HeaderAppBar = () => {
  return (
    <div className="HeaderAppBar">
      <div className="headerAppBar-position">
        {/* Logo */}
        <div className="HeaderAppBar-logo">
          <img src={logo} alt="" />
        </div>
        {/* Searching Bar */}
        <div className="HeaderAppBar-SearchBar">
          <input
            className="searchBar"
            placeholder=" &#xe901; Search "
            type="text"
          />
        </div>
        {/* Menu item */}
        <div className="HeaderAppBar-Menu">
          <img src={homeFill} alt="homeFill" />
          <img src={messenger} alt="messenger" />
          <img src={newPost} alt="newPost" />
          <img src={findPeople} alt="findPeople" />
          <img src={activityFeed} alt="activityFeed" />
          <div className="Menu-user"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAppBar;
