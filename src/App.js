import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Packages from './Pages/Home/Packages/Packages';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import About from './Pages/Header/About/About';
import MyOrders from './Pages/Header/MyOrders/MyOrders';
import ManageOrders from './Pages/Header/ManageOrders/ManageOrders';
import AddPackages from './Pages/Header/AddPackages/AddPackages';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Router exact path="/">
              <Home></Home>
            </Router>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addPackages">
              <AddPackages></AddPackages>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
