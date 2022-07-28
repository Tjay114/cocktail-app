import React from "react";
import './App.css';
// import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import { Route, Switch } from "react-router-dom";
function App() { 
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </div>



    // <NavBar />,
    // <Footer />,
    // <SearchForm />,
    // <About />,
    // <Home />

        );
}

export default App;
