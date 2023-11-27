import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import AdvancedSearch from "../AdvancedSearch";
import Details from "../Details/Detail";

const TabContent=(props)=>{
    const {activeTab, tableVisible, searchedData} = props; 
    return(
        <>
          {activeTab == 'search' ?
          <SearchForm tableVisible={tableVisible} searchedData={searchedData}/>
          :activeTab == 'advancedSearch' ? 
          <AdvancedSearch />
          :activeTab == 'details' ? 
          <Details />
          :null
        }
        </>
    )
}

export default TabContent;