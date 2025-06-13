import { Link, useLocation } from "react-router-dom";

import './Menu.css';
import RoutesConfig from "../../routes/routes";

const Menus = () => {
  const location = useLocation(); // Get the current URL path

  const routes = RoutesConfig()

  const renderMenu = (menuItems) =>
    menuItems.map((item, index) => {
      const isActive = location.pathname === item.path; // Check if this is the active link
      
      return (
        <li
          key={index}
          className={`menu-item ${item.children ? "has-children" : ""} ${isActive ? "active" : ""}`}
        >
          <Link className="the_link-item" to={item.path}>
            {item.name}
          </Link>
          {item.children && <ul className="dropdown">{renderMenu(item.children)}</ul>}
        </li>
      );
    });

  return (
    <nav className="menu">
      <ul className="menuWrapper">{renderMenu(routes)}</ul>
    </nav>
  );
};

export default Menus;
