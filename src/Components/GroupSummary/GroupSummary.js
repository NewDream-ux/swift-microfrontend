import React, { useEffect, useState } from "react";
import axios from "axios";
import AppConfig from "../../../app.config";
import {useLocation} from "react-router-dom";
import style from "./GroupSummary.module.css";
import FormBuilder from "../FormBuilder/FormBuilder";
import { GroupSummaryData } from "../../Contents/SearchFormFieldJson";
import { useForm } from 'react-hook-form';


const GroupSummary = () => {
  const {fields} = GroupSummaryData;
  const {summaryContainer, rowContainer, summaryLabel, groupName, summaryHeader} = style;
  const {groupSummary} = AppConfig.endPoints;
  const Location = useLocation();
  const number = Location.state.key;
  const [summaryData, setSummaryData] = useState([]);
  const { register, setValue, handleSubmit, reset, setFocus, formState: { errors } } = useForm({ mode: 'onTouched' });


  useEffect(()=>{
    const url = `${groupSummary}?GROUP_ID=${number}`;
    axios.get(url).then((response) => {
      console.log("response", response.data);
      setSummaryData(response.data[0]);
    });
  }, [number])

  useEffect(()=>{
    console.log("summaryData", summaryData);
    setValue("groupNumber", summaryData.GROUP_ID);
    setValue("fundingMethod", summaryData.FUNDING_METHOD_TEXT);
    setValue("groupStatus", summaryData.CUSTOMER_STATUS_CODE_TEXT);
    setValue("groupName", summaryData.GROUP_NAME);
    setValue("groupMembership", summaryData.GROUP_MEMBERSHIP_TYPE_TEXT);
    setValue("contactType", summaryData.CONTRACT_TYPE_CODE_Text);
    setValue("groupLevel", summaryData.GROUP_LEVEL_CODE_Text);
    setValue("customerBook", summaryData.INT_ORG_UNIT_ID_TEXT ? summaryData.INT_ORG_UNIT_ID_TEXT : "NA");
    setValue("contactRelationship", summaryData.CONTRACT_RELATIONSHIP_CODE ? summaryData.CONTRACT_RELATIONSHIP_CODE : "NA");
    setValue("groupEFullfilment", summaryData.BESPOKE_FULFILMENT_IND);
    setValue("claimEftIndicator", summaryData.ALLOW_MEMBER_CLAIM_EFT_IND);
  }, [summaryData])
  
  return (
    <div className={summaryContainer}>
      <h5 className={summaryHeader}>Group Summary</h5>
      {console.log("fields", fields)}
      {fields.map((item) => {
        const { type, label, classFromProps, validationMsg, regex, regexErrorMessage, option, targetElement, disable } = item;

        return (
          <FormBuilder
            type={type}
            label={label}
            register={register}
            errors={errors}
            classFromProps={classFromProps}
            required={validationMsg}
            validationMsg={validationMsg}
            regex={new RegExp(regex && regex, 'i')}
            regexErrorMessage={regexErrorMessage}
            option={option && option}
            targetElement={targetElement}
            componentIdentifier={"GroupSummary"}
            disable={disable}
          />
        )
      })
    }
    
    </div>
  )
}

export default GroupSummary;