import React from "react";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import FlexComponent from "./components/hoc/flexComponent";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <FlexComponent Component={Home} />
      <Footer />
    </div>
  );
}

export default App;
