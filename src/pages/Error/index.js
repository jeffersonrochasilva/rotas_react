import { Link } from "react-router-dom";
import "./style.css";

function Error() {
  return (
    <div className="container">
      <h2 className="titulo">Esta pagina não existe.</h2>
      <br />
      <Link to="/">Home</Link>
      <Link to="/abount">Abount</Link>
    </div>
  );
}

export default Error;
