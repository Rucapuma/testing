import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import AccountManage from "./pages/AccountManage";
import Refer from "./pages/Refer";
import updateInfo from "./pages/updateInfo";
import Referrals from "./pages/Referrals";
import Report from "./pages/Report";
import Test from "./pages/test";



function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navbar">
            <div className="links">
              <Link to="/home"> Home Page</Link>
              <Link to="/accountmanage"> Account Management</Link>
              <Link to="/refer"> Refer a Student</Link>
              {!authState.status && (
                <>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link>
                </>
              )}
            </div>
            <div className="loggedInContainer">
              {authState.status && <button onClick={logout}> Logout</button>}
            </div>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/accountmanage" exact component={AccountManage} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/refer" exact component={Refer} />
            <Route path="/login" exact component={Login} />
            <Route path="/updateInfo" exact component={updateInfo} />
            <Route path="/referrals" exact component={Referrals} />
            <Route path="/report" exact component={Report} />
            <Route path="/test" exact component={Test} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
