import "./App.css";
import Login from "./pages/Login.jsx";
import UserPage from "./pages/UserPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import SingleBlog from "./pages/SingleBlog";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/user'>
            <UserPage/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/blog/:id'>
            <SingleBlog/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
