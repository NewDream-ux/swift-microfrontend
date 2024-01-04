import React, { useEffect, useState } from "react";
import style from './AdvancedSearch.module.css';
import { useForm } from 'react-hook-form';
import { AdvancedSearchFormFields } from "../../Contents/SearchFormFieldJson";
import FormBuilder from "../FormBuilder/FormBuilder";
import Button from "../Button/Button";
import axios from 'axios';
import AppConfig from "../../../app.config";
import ViewSummary from "../ViewSummary/ViewSummary";
const AdvancedSearch = (props) => {
  const {container, formStyle, buttonAlign} = style;
  const {constantItems} = AppConfig;
  const { advanceSearchUrl, groupView } = AppConfig.endPoints;
  const { tableVisible, searchedData, tabNameIdentifier } = props;
  const { fields } = AdvancedSearchFormFields;
  const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm({ mode: 'onTouched' });
  const [groupViewDetails, setGroupViewDetails] = useState([]);

  const onSubmit = (dataItem) => {
    console.log("dataItem", dataItem);
    const { excess, groupDiscount, paymentFreq, paymentType, productName, productType, renewalMonth, scale } = dataItem;
    const url = `${advanceSearchUrl}?EXCESS_like=${excess}&GROUP_DISCOUNT_like=${groupDiscount}&Payment_Freq_like=${paymentFreq}&Payment_Type_like=${paymentType}&Product_Name_like=${productName}&Product_Type_like=${productType}&Renewal_Month_like=${renewalMonth}&Scale_like=${scale}`; // url for data table

    const groupViewUrl = `${groupView}`; // url for data table
    axios.get(url).then((response) => {
      searchedData(response.data)
    });
    axios.get(groupViewUrl).then((response) => {
      setGroupViewDetails(response.data)
    });
    tableVisible(true);
    tabNameIdentifier("AdvancedSearch");
  }
  

  const resetForm = () => {
    console.log("Alll");
    reset({
      excess: "",
      groupDiscount: "",
      paymentFreq: "",
      paymentType: "",
      productName: "",
      productType: "",
      renewalMonth: "",
      scale:""
    });
    window.scrollTo(0, 0);
  }

  
  return (
    <div className={`row container ${container}`}>
      <div className="col-lg-9">
        <div className={formStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item) => {
            const { type, label, classFromProps, validationMsg, regex, regexErrorMessage, option, targetElement } = item;

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
                componentIdentifier={"advancedSearch"}
              />
            )
          })}
          <div className={buttonAlign}>
            <Button type="submit" value="Find Now" />
            <Button type="button" value="New Search" onclick={resetForm} />
            <Button type="button" value="Show Products" isDisable={true} />
          </div>
        </form>
        </div>
      </div>

      <div className="col-lg-3">
       <ViewSummary  summaryIdentifier="search" viewLabel = {constantItems.groupView} groupViewDetails={groupViewDetails}/>
      </div>

    </div>
  );
};
export default AdvancedSearch;