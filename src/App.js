import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { LOGIN_PATH, ROOT_PATH, REGISTER_PATH } from "./utils/static_constants";
import { Login, Home, Register } from "./containers";
import { useComponentWillMount } from "./components/useComponentWillMount";
import NavBar from "./components/NavBar";

function App() {
  const reconnect = async () => {
    try {
      console.log("reconnecting");
    } catch (error) {
      throw error;
    }
  };

  useComponentWillMount(() => {
    reconnect()
      .then(() => console.log("reconnected"))
      .catch(err => console.log("error ComponentWillMount", err));
  });
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path={ROOT_PATH} component={Home} />
      <Route exact path={LOGIN_PATH} component={Login} />
      <Route exact path={REGISTER_PATH} component={Register} />
    </BrowserRouter>
  );
}
export default App;
