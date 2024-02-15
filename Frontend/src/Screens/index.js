import DashBoard from "./DashBoard";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPizza from "./AddPizza";
import "./styles/common.css";
import address from "../Components/Address";
import ThankYou from "./ThankYou";
import AdminController from "./AdminController";
import Payment from "./Payment";
import AdminCard from "./AdminCard";
import UpdatePizza from "./UpadtePizza";
import PendingOrders from "./PendingOrders"
import Chart from "./Chart";
function Controller() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/RegisterUser" component={RegisterUser} />
          <Route exact path="/About" component={About} />
          <Route exact path="/addpizza" component={AddPizza} />
          <Route exact path="/update" component={AdminCard} />
          <Route exact path="/edit" component={UpdatePizza} />
          <Route exact path="/vieworders" component={PendingOrders} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/chart" component={Chart} />
          <ProtectedRoute exact path="/admin" component={AdminController} />
          <ProtectedRoute exact path="/pizza" component={Card} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkout" component={address} />
          <Route exact path="/thank-you" component={ThankYou} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Controller;
