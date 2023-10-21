import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-6 font-bold justify-center my-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addcoffee">Add Coffee</NavLink>
            <NavLink to="/addmanager">Add Manager</NavLink>
            <NavLi to="/managers">Managers</NavLi
        </div>
    );
};

export default Header;