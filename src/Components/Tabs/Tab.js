import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import TabContent from "./TabContent";
import './Tab.css';

const Tab = (props) => {
  const {tableVisible, searchedData, tabIdentifier, tabNameIdentifier} = props;
  const {tabData, defaultActive} = props.data;
  const [activeTab, setActiveTab] = useState(defaultActive);
  return (
    <>
    <div className="Tabs">
      <ul className={`nav ${tabIdentifier == "summary" ? `summaryTab` : ``}`}>
        {tabData.map((item) => {
          const { name, activeIdentifier } = item;
          return (
            <li className={activeTab === activeIdentifier ? "active" : ""} onClick={() => setActiveTab(activeIdentifier)}>{name}</li>
          )
        })}
      </ul>
    </div>
    <div className="outlet">
        <TabContent activeTab={activeTab} tableVisible={tableVisible} searchedData={searchedData} tabNameIdentifier={tabNameIdentifier}/>
      </div>
    </>
  );
};
export default Tab;

