import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  return (
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Redirect to="/rooms/9XtcxltG8iZTyJyM2QUl" />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
