import React, { useEffect, useState } from "react";
import style from "./Detail.module.css"
import Datepicker from "../DatePicker/DatePicker";
import ViewSummary from "../ViewSummary/ViewSummary";
import AppConfig from "../../../app.config";
import axios from 'axios';
import { GeneralDetails } from "../../Contents/SearchFormFieldJson";
import FormBuilder from "../FormBuilder/FormBuilder";
import { useForm } from 'react-hook-form';


const Details = () => {
    const { detailContainer, generalText, detailContent, detailLeftsection, verticalLine } = style;
    const { constantItems } = AppConfig;
    const { groupView } = AppConfig.endPoints;
    const [groupViewDetails, setGroupViewDetails] = useState([]);
    const { fields } = GeneralDetails;
    const { register, setValue, handleSubmit, reset, setFocus, formState: { errors } } = useForm({ mode: 'onTouched' });


    useEffect(() => {
        const groupViewUrl = `${groupView}`; // url for data table
        axios.get(groupViewUrl).then((response) => {
            setGroupViewDetails(response.data)
        });
    }, [])
    return (
        <>
            <div className={detailContainer}>
                <span className={generalText}>General</span>
                <div className="row">
                    <div className={`col-lg-5 ${detailContent}`} >
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
                                    componentIdentifier={"Details"}
                                    disable={disable}
                                />
                            )
                        })
                        }
                        {/* <div className={verticalLine}></div> */}
                    </div>
                    <div className="col-lg-7">
                        <ViewSummary summaryIdentifier="summary" viewLabel={constantItems.groupHierarchyView} groupViewDetails={groupViewDetails} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Details;