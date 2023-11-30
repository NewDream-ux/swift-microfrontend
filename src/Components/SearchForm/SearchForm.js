import React, { useEffect, useState } from "react";
import style from './SearchForm.module.css';
import { useForm } from 'react-hook-form';
import { SearchFormFields } from "../../Contents/SearchFormFieldJson";
import FormBuilder from "../FormBuilder/FormBuilder";
import Button from "../Button/Button";
import axios from 'axios';
import AppConfig from "../../../app.config";
import ViewSummary from "../ViewSummary/ViewSummary";
const SearchForm = (props) => {
  const {container, formStyle, buttonAlign} = style;
  const {constantItems} = AppConfig;
  const { companyUrl, groupView } = AppConfig.endPoints;
  const { tableVisible, searchedData } = props;
  const { fields } = SearchFormFields;
  const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm({ mode: 'onTouched' });
  const [groupViewDetails, setGroupViewDetails] = useState([]);

  const onSubmit = (dataItem) => {
    const { address, customerBook, level, name, number, postcode, status } = dataItem;
    const url = `${companyUrl}?GROUPID_like=${number}&GROUPNAME_like=${name}&FORMATTEDADDRESS_like=${address}&POSTCODE_like=${postcode}&CONTRACT_TYPE_CODE_like=${level}&GROUP_STATUS_like=${status}&INTORGUNITID_like=${customerBook}`; // url for data table

    const groupViewUrl = `${groupView}`; // url for data table
    axios.get(url).then((response) => {
      searchedData(response.data)
    });
    axios.get(groupViewUrl).then((response) => {
      setGroupViewDetails(response.data)
    });
    tableVisible(true);
  }

  const resetForm = () => {
    console.log("Alll");
    reset({
      number: "",
      name: "",
      address: "",
      postcode: "",
      level: "",
      status: "",
      customerBook: ""
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
export default SearchForm;