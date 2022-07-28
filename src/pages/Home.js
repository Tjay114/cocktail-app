import React from "react";
import CockTailList from "../components/CockTailList";
import SearchForm from "../components/SearchForm";
import FetchData from "./FetchData";
import Footer from "../components/Footer"

const Home = () => {
    return (
      <main>
        <FetchData />
        <SearchForm/>
        <CockTailList/> 
        <Footer />
      </main>
    )
}

export default Home;