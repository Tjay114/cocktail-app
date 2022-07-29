import React from "react";
function Cocktail({cocktails}){

    const cockTailsDisplay = cocktails.map((element)=> 
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
        <div className="row mt-2 g-1">
        {cockTailsDisplay}
        </div>
    )
}

export default Cocktail;