import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home.....</h2>
      <Link to="/produto/456">Ir para a pagina Produto</Link>
    </div>
  );
}

export default Home;
