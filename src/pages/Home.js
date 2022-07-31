import React, { useState } from "react";
import CockTailList from "../components/CockTailList";
import Footer from "../components/Footer"
import Ingredients from "./Ingredients";


const Home = ({cocktailsDisplay}) => {
  const [search, setSearch] = useState("")
function handleChange(event){
  setSearch(event.target.value)
}
  const alcohol = cocktailsDisplay.filter((element)=>{
    return(element.strDrink.toLowerCase().includes(search.toLowerCase()))
  })
  console.log(alcohol)
  // return(
  //   <Cocktail cocktail={alcohol} />
  // )

  const drinks=alcohol.map((element)=> 
  {return(
      <div className="col-md-3">
      <div className="card p-2">
           <div className="text-right"> <small>{element.strCategory}</small></div>
           <div className="text-center mt-2 p-3"> <img src={element.strDrinkThumb} width="flex" height="300"/> <span className="d-block font-weight-bold">{element.strDrink}</span>
               <hr/> <span>{element.strCategory}</span>
               <div className="d-flex flex-row align-items-center justify-content-center"> <i className="fa fa-map-marker"></i> <small className="ml-1">{element.strAlcoholic}</small> </div>
               <div className="d-flex justify-content-between mt-3"> <span>{element.strIngredient1}</span> <button className="btn btn-sm btn-outline-dark" style={{color: "red"}}>Delete</button> </div>
           </div>
       </div>
   </div>
  )})
    return (
      <main>
        <section className="section">
           <form className="search-form">
                 <div className="form-control">
                     <input type="text" onChange={handleChange}placeholder="Search Cocktail" />
                 </div>
             </form>
         </section>
        {/* <SearchForm handleChange={handleChange} />  */}
         <div className="row mt-2 g-1">
        {drinks}
        </div>
        {/* <Cocktail /> */}
        <Ingredients />
        <CockTailList/> 
        <Footer />
      </main>
    )
}

export default Home;