import { NavLink } from "react-router-dom";
import "./sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to='/characters'> Characters </NavLink>
            <NavLink to='/episodes'> Episodes </NavLink>
            <NavLink to='/locations'> Locations </NavLink>
            <NavLink to='/my_watch_list'> My watch list </NavLink>
        </div>
    )
}

export default Sidebar;

