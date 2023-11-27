import React, { useEffect, useState } from "react";
import axios from "axios";
import AppConfig from "../../../app.config";
import {useLocation} from "react-router-dom";
import "./GroupSummary.css";

const GroupSummary = () => {
  const {groupSummary} = AppConfig.endPoints;
  const Location = useLocation();
  const number = Location.state.key;
  const [summaryData, setSummaryData] = useState([]);

  useEffect(()=>{
    const url = `${groupSummary}?GROUP_ID=${number}`;
    axios.get(url).then((response) => {
      console.log("response", response.data);
      setSummaryData(response.data[0]);
    });
  }, [number])
  return (
    <div className="summaryContainer">
      <h5>Group Summary</h5>
      <hr />
      {summaryData && 
      <>
        <div className="row rowContainer">
        <div className="col-lg-4">
            <span className="summaryLabel">Group Number : </span><span>{summaryData.GROUP_ID}</span>
        </div>
        <div className="col-lg-4">
        <span className="summaryLabel">Group Name : </span><span>{summaryData.GROUP_NAME}</span>
        </div>
        <div className="col-lg-4">
        <span className="summaryLabel">Group Membership : </span><span>{summaryData.GROUP_MEMBERSHIP_TYPE_TEXT}</span>
        </div>
      </div>

      <div className="row rowContainer">
        <div className="col-lg-4">
            <span className="summaryLabel">Group Status : </span><span>{summaryData.CUSTOMER_STATUS_CODE_TEXT}</span>
        </div>
        <div className="col-lg-4">
        <span className="summaryLabel">Customer Book : </span><span>{summaryData.INT_ORG_UNIT_ID_TEXT}</span>
        </div>
        <div className="col-lg-4">
        <span className="summaryLabel">Contact Relationship : </span><span>{summaryData.CONTRACT_RELATIONSHIP_CODE}</span>
        </div>
      </div>

      <div className="row rowContainer">
        <div className="col-lg-4">
            <span className="summaryLabel">Group Level : </span><span>{summaryData.GROUP_LEVEL_CODE_Text}</span>
        </div>
        <div className="col-lg-4">
            <span className="summaryLabel">Funding Method : </span><span>{summaryData.FUNDING_METHOD_TEXT}</span>
        </div>
        <div className="col-lg-4">
        <span className="summaryLabel">Contact Type : </span><span>{summaryData.CONTRACT_TYPE_CODE_Text}</span>
        </div>
      </div>

      <div className="row rowContainer">
        <div className="col-lg-4">
        <span className="summaryLabel">Contract : </span>
        <select className="groupName">
          <option>From 05/01/2014</option>
        </select>
        </div>
        <div className="col-lg-4">
        <span className="summaryLabel">Payment Group : </span>
        <select className="groupName">
          <option>MB</option>
        </select>
        </div>
        <div className="col-lg-4">
        <span className="summaryLabel">Digital Invite : </span>
        <select className="groupName">
          <option>{summaryData.DIGITAL_ACCESS_IND}</option>
        </select>
        </div>
      </div>

      <div className="row rowContainer">
        <div className="col-lg-4">
        <input type="checkbox" checked={summaryData.ALLOW_MEMBER_CLAIM_EFT_IND}/><span className="summaryLabel"> Claim EFT Indicator </span>
        </div>
        <div className="col-lg-4">
        <input type="checkbox" checked={summaryData.BESPOKE_FULFILMENT_IND}/><span className="summaryLabel"> Group E - Fulfilment</span>
        </div>
      </div>
      </>
      }
    
    </div>
  )
}

export default GroupSummary;