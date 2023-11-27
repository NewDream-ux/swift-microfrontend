import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from './Modules/Header/Header';
import Footer from "./Modules/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
     <div className="main-container">
     <Routing />
     </div>
     <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
