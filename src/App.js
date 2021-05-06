import React from "react";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import FlexComponent from "./components/hoc/flexComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="flex flex-col flex-1"> */}
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <FlexComponent {...props} Component={Home} />}
        />
        <Route
          path="/contato"
          render={(props) => <FlexComponent {...props} Component={Contacts} />}
        />
      </Switch>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
