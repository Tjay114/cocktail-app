import React, { useState } from "react";

function SearchForm (){
   
    return(
        <section className="section">
            <form className="search-form">
                <div className="form-control">
                    <input type="text" placeholder="Search Cocktail" />
                </div>
            </form>
        </section>
    )
}

   

export default SearchForm;