import "./navbar.css";
import neonLogo from "../assets/logoneon.png";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div className="navbar">
      <h1></h1>
      <img className="neonlogo" src={neonLogo} alt="" />
      <ul className="categories">
        <li>Inicio</li>
        <li>Mockups</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar;