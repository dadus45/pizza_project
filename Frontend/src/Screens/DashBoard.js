import { Link } from "react-router-dom";
import './styles/Homepage.css'

function DashBoard() {

  return (
    <div className="home" style={{ backgroundImage: `url(./Data/pizza.jpeg)`,marginTop:-32 }}>
    <div className="headerContainer">
      <h1> Express Pizza</h1>
      <p> PIZZA TO FIT ANY TASTE</p>
      <Link to="/login">
        <button> ORDER HERE </button>
      </Link>
    </div>
  </div>
  );
}

export default DashBoard;
