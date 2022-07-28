import React from "react";
import CockTailList from "../components/CockTailList";
import SearchForm from "../components/SearchForm";
import FetchData from "./FetchData";
import Footer from "../components/Footer"

const Home = () => {
    return (
      <main>
        <h2>Home</h2>
        <FetchData />
        <SearchForm/>
        <CockTailList/> 
        <Footer />
      </main>
    )
}

export default Home;