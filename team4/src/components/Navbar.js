import alarm from "../assets/alarm.gif";
import { useState, useEffect } from "react";
import "../css/Navbar.css";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bell, setBell] = useState([false]);
  useEffect(() => {}, [bell]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-home">
          <a href="/" className="homeButton">
            <GrHomeRounded />
          </a>
        </div>
        <div className="navbar-menu">
          <Link to="/PostWrite" className="matchingPost">
            끼리모집
          </Link>
          <Link to="/MatchingBoard" className="matchingSearch">
            끼리찾기
          </Link>
          <a href="/" className="review">
            끼리후기
          </a>
          <a href="/" className="community">
            커뮤니티
          </a>
        </div>

        <div className="navbar-alarm">
          <a href="/" className="alarm">
            <img
              src={alarm}
              style={{ height: "40px", width: "auto" }}
              alt="alarm"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
