import React, { useState } from "react";
import Tab from "../../Components/Tabs/Tab";
import Table from "../../Components/Table/Table";
import style from './Home.module.css';

const Home = () => {
  const {homeContainer} = style;
  const [tableVisible, setTableVisible] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [tabName, setTabName] = useState("");

  const tabTittle = {
    defaultActive: "search",
    tabData: [
      { name: "Search", activeIdentifier: "search" },
      { name: "Advanced Search", activeIdentifier: "advancedSearch" }
    ]
  }


  return (
    <div className={homeContainer}>
      <Tab data={tabTittle} tableVisible={setTableVisible} searchedData={setSearchedData} tabIdentifier="search" tabNameIdentifier={setTabName}/>
      {tableVisible && <Table searchedData={searchedData} tableVisible={setTableVisible} tabName={tabName}/>}

    </div>
  )
}

export default Home;