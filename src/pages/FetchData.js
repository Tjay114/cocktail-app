import React, { useEffect, useState } from "react";


function FetchData(){
    const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/drinks")
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data);
      });
  }, []);
            console.log(cocktails)
    return(
        <div>
        
          
        </div>
    )
}

export default FetchData