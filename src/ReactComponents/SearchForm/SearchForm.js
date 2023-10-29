import React from "react";
import './SearchForm.css';
import {useForm} from 'react-hook-form';
import { SearchFormFields } from "../../SearchFormFieldJson";
import FormBuilder from "../FormBuilder/FormBuilder";
const SearchForm = () => {
  const {fields} = SearchFormFields;
  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit=()=>{
    alert("Success");
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
         {fields.map((item)=>{
          const {type, label, classFromProps, validationMsg, regex, regexErrorMessage, option, targetElement} = item;

          return(
            <FormBuilder 
               type={type}
               label={label}
               register={register}
               errors={errors}
               classFromProps={classFromProps}
               required={validationMsg}
               validationMsg={validationMsg}
               regex={regex}
               regexErrorMessage={new RegExp(regex && regex, 'i')}
               option={option && option}
               targetElement={targetElement}
            />
          )
         })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default SearchForm;