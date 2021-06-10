import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Routing
import PrivateRoute from './components/routing/PrivateRoute';

//  Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import PrivateScreen from "./components/screensLogin/PrivateScreen";
import LoginScreen from "./components/screensLogin/LoginScreen";
import RegisterScreen from "./components/screensLogin/RegisterScreen";
import ForgotPasswordScreen from "./components/screensLogin/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screensLogin/ResetPasswordScreen";


//Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          {/* Login screens */}
          {/* Definir un solo / después */}
          <PrivateRoute exact path="/" component={PrivateScreen} /> 
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
