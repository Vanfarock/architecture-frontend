import React from "react";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import FlexComponent from "./components/hoc/flexComponent";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts";
import Projects from "./components/projects";
import Project from "./components/project";
import About from "./components/about";
import BudgetForm from "./components/budgetForm";
import NotFound from "./components/notFound";
import AdminPage from "./components/adminPage";

function App() {
  return (
    <BrowserRouter>
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
        <Route
          path="/projetos/:id"
          render={(props) => <FlexComponent {...props} Component={Project} />}
        />
        <Route
          path="/projetos"
          render={(props) => <FlexComponent {...props} Component={Projects} />}
        />
        <Route
          path="/sobre"
          render={(props) => <FlexComponent {...props} Component={About} />}
        />
        <Route
          path="/solicitar-orcamento"
          render={(props) => (
            <FlexComponent {...props} Component={BudgetForm} />
          )}
        />
        <Route
          path="/admin"
          render={(props) => <FlexComponent {...props} Component={AdminPage} />}
        />
        <Route
          path="/not-found"
          render={(props) => <FlexComponent {...props} Component={NotFound} />}
        />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
