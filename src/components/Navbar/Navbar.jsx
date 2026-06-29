
import logo from "../../assets/images/0ee3d15a-6a57-4a72-8529-7a145811f189.jpg";

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Justine Jay Nangcas" className="navbar-logo-img" />
            </div>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>   
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
} 

export default Navbar;