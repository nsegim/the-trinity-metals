
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import './Menu.css'
const Menus = () =>{
   const renderMenu = (menuItems)=>
       menuItems.map((item, index) => (
        <li key={index} className={`menu-item ${item.children ? "has-children" : ""}`}>
            <Link className="the_link-item" to={item.path}>{item.name}</Link>
            {item.children && (
            <ul className="dropdown">{renderMenu(item.children)}</ul>
            )}
        </li>
        
       ))
       
   


   
    return(
         <>
           <nav className="menu">
             <ul className="menuWrapper">{renderMenu(routes)}</ul>
           </nav>
        </>
    )
       
    
}
export default Menus