import React from "react";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import flexComponent from "./components/hoc/flexComponent";
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
        <Route path="/" exact component={flexComponent(Home)} />
        <Route path="/contato" component={flexComponent(Contacts)} />
        <Route path="/projetos/:id" component={flexComponent(Project)} />
        <Route path="/projetos" component={flexComponent(Projects)} />
        <Route path="/sobre" component={flexComponent(About)} />
        <Route
          path="/solicitar-orcamento"
          component={flexComponent(BudgetForm)}
        />
        <Route path="/admin" component={flexComponent(AdminPage)} />
        <Route path="/not-found" exact component={flexComponent(NotFound)} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
