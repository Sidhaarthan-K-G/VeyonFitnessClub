import "./index.css";
import { FaCircle, FaArrowRight } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="h-app-title">
        <FaCircle className="h-dot" />
        <h1 className="h-title">VEYON FITNESS CLUB</h1>
      </div>
      <nav className="h-links">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Routes</a>
        <a href="#">Community</a>
        <a href="#">Blogs</a>
      </nav>
      <button className="h-btn">
        JOIN NOW <FaArrowRight className="h-arrow" />
      </button>
    </div>
  );
};
export default Header;
