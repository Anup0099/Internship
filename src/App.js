import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Hero from "./components/Hero/Hero";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows";
import Reviews from "./components/Reviews/Reviews";

import ReviewCard from "./components/Reviews/Reviewcard";

function App() {
    return (
        <div className="App">
            <div className="bg">
             <Navbar />
              <Hero />
            </div>
            <UpcomingShows/>
           
           <ReviewCard/>

        </div>
    );
}

export default App;
