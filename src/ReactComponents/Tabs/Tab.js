"use client"
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import AdvancedSearch from "../AdvancedSearch";
import './Tab.css';

const Tab = (props) => {
  const {tabData, defaultActive} = props.data;
  const [activeTab, setActiveTab] = useState(defaultActive);
  return (
    <div className="Tabs">
      <ul className="nav">
        {tabData.map((item) => {
          const { name, activeIdentifier } = item;
          return (
            <li className={activeTab === activeIdentifier ? "active" : ""} onClick={() => setActiveTab(activeIdentifier)}>{name}</li>
          )
        })}
      </ul>
      <div className="outlet">
        {activeTab == 'search' ?
          <SearchForm />
          :
          <AdvancedSearch />
        }
      </div>
    </div>
  );
};
export default Tab;

