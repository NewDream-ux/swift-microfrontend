import React from "react";
import Tab from "../../ReactComponents/Tabs/Tab";
import  './Home.css';

const Home=()=>{
  const tabTittle = {
    defaultActive:"search",
    tabData:[
      {name:"Search", activeIdentifier:"search"},
      {name:"Advanced Search", activeIdentifier:"advancedSearch"}
    ]
  }

  
    return(
        <div className="homeContainer">
          <Tab data = {tabTittle}/>
        </div>
    )
}

export default Home;