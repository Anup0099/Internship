import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Hero from "./components/Hero/Hero";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows";
function App() {
  return (
    <div className="App">
      {/* <div className="bg">
        <Navbar />
        <Hero />
      </div> */}
      <UpcomingShows />
    </div>
  );
}

export default App;
