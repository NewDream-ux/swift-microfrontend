import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";
import Details from "../Details/Detail";

const TabContent=(props)=>{
    const {activeTab, tableVisible, searchedData, tabNameIdentifier} = props; 
    return(
        <>
          {activeTab == 'search' ?
          <SearchForm tableVisible={tableVisible} searchedData={searchedData} tabNameIdentifier={tabNameIdentifier}/>
          :activeTab == 'advancedSearch' ? 
          <AdvancedSearch tableVisible={tableVisible} searchedData={searchedData} tabNameIdentifier={tabNameIdentifier}/>
          :activeTab == 'details' ? 
          <Details />
          :null
        }
        </>
    )
}

export default TabContent;