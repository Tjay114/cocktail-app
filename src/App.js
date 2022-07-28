import React, {useEffect, useState} from "react";
import './App.css';
// import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Footer from "./components/Footer"
import NavBar from "./components/NavBar";
// import SearchForm from "./components/SearchForm";
import { Route, Switch } from "react-router-dom";
import Cocktail from "./components/Cocktail";
function App() { 
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data);
      });
  }, []);
            console.log(cocktails)
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
        <Route exact path="/cocktails">
          <Cocktail cocktails={cocktails}/>
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
