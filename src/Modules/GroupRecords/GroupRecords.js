import React from "react";
import GroupSummary from "../../Components/GroupSummary/GroupSummary";
import Tab from "../../Components/Tabs/Tab";
import style from './GroupSummary.module.css';

const GroupRecords=()=>{
  const {handleSummaryContent} = style;
  const tabTittle = {
    defaultActive: "details",
    tabData: [
      { name: "Details", activeIdentifier: "details" },
      { name: "Address and Contact", activeIdentifier: "addressContact" },
      { name: "Contract and Billing", activeIdentifier: "contractBilling" },
      { name: "Products", activeIdentifier: "products" },
      { name: "Eligibility", activeIdentifier: "eligibility" },
      { name: "Members", activeIdentifier: "members" },
      { name: "Document Preferences", activeIdentifier: "documentPreference" }
    ]
  }
    return(
        <>
        <div className="row">
         <div className={`col-lg-12 ${handleSummaryContent}`}>
         <GroupSummary />
         </div>
        </div>
          <Tab data = {tabTittle} tabIdentifier="summary"/>
        </>
    )
}

export default GroupRecords;