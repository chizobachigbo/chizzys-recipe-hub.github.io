import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const location = useLocation();
   
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "recipe-hub/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" href="!#" className="logo">
          Chizzy's <span>Recipe</span> Hub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink className={location.pathname === link.path  ? "active" : ""} to={link.path} key={link.name}>
              {link.name}
            </NavLink>
          ))
          }
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
