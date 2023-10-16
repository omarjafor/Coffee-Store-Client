import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-6 font-bold justify-center my-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addcoffee">Add Coffee</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
        </div>
    );
};

export default Header;