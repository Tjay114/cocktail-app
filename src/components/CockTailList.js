import React from "react";
// import { useGlobalContext } from "../context";

const CockTailList = () => {
    const [cocktails, loading ] = useGlobalContext();

    if(loading) {
        return <Loading />
    } 
    if(cocktails.length < 1){
        return(
        <h2 className="section-title">
            no cocktail match your search
        </h2>)
        
    }
    return(
       <div>
            <h2>cocktail list</h2>
       </div>
    )
}

export default CockTailList;