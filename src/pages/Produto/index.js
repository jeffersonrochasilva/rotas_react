import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams();

  return <h2>Meu produto é {id}</h2>;
}

export default Produto;
