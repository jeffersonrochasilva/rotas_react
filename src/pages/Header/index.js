import Reaact from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <h1>Sujeito</h1>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/abount">Abount</Link>
      </div>
    </header>
  );
}
export default Header;
