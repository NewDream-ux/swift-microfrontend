"use client"
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import AdvancedSearch from "../AdvancedSearch";
import TabContent from "./TabContent";
import './Tab.css';

const Tab = (props) => {
  const {tableVisible, searchedData, tabIdentifier} = props;
  const {tabData, defaultActive} = props.data;
  const [activeTab, setActiveTab] = useState(defaultActive);
  return (
    <>
    {tabIdentifier == "summary" ? <hr /> : null}
    <div className="Tabs">
      <ul className={`nav ${tabIdentifier == "summary" ? `summaryTab` : ``}`}>
        {tabData.map((item) => {
          const { name, activeIdentifier } = item;
          return (
            <li className={activeTab === activeIdentifier ? "active" : ""} onClick={() => setActiveTab(activeIdentifier)}><strong>{name}</strong></li>
          )
        })}
      </ul>
    </div>
    <div className="outlet">
        <TabContent activeTab={activeTab} tableVisible={tableVisible} searchedData={searchedData}/>
      </div>
    </>
  );
};
export default Tab;

