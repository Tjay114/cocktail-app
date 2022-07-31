import React, {useEffect, useState} from "react";
import './App.css';
// import { BrowserRouter,Route, Switch } from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import Home from "./pages/Home";
import About from "./pages/About";
// import Footer from "./components/Footer"
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Cocktail from "./components/Cocktail";
function App() { 
  const [cocktails, setCocktails] = useState([]);
  const [drinks, setDrinks] = useState([]);
  // 
  // const [tailcock, setTailCock] = useState([])
  useEffect(() => {
    fetch("https://cocktailjson.herokuapp.com/drinks")
      .then((response) => response.json())
      .then((data) => 
        setCocktails(data)
        
      )

  }, []);
  
            // console.log(cocktails)
            // function handleChange(event){
            //   setSearch(event.target.value)
            //   const alcohol = cocktailsDisplay.filter((element)=>{
            //     return(element.strDrink.toLowerCase().includes(search.toLowerCase))
                
            //   })
            //   return(
            //     <Cocktail cocktails={alcohol} />
            //   )
            // }

            // const cocktailsDisplay = cocktails.filter((element)=>{
            //   // console.log(element.strDrink)
            //   element.strDrink.toLowerCase().includes(search.toLowerCase)
            // })
            // console.log(cocktailsDisplay)
            
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home cocktailsDisplay={cocktails}/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/cocktails">
          <Cocktail cocktails={cocktails}/>
        </Route>
        <Route exact path="/ingredients">
          <Ingredients drinks={drinks}/>
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
