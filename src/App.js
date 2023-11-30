import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from './Modules/Header/Header';
import Footer from "./Modules/Footer/Footer";
import style from "./App.Module.css";

function App() {
  const {mainContainer} = style;
  return (
    <>
     <BrowserRouter>
     <Header />
     <div className={mainContainer}>
     <Routing />
     </div>
     <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
