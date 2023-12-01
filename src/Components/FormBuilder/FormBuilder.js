import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Checkbox from "../Checkbox/Checkbox";
import Datepicker from "../DatePicker/DatePicker";
const FormBuilder = (props) => {
    const { type, errors, label, register, classFromProps, required, option, regex, regexErrorMessage, targetElement, componentIdentifier, disable } = props;
    console.log("type", type)
    switch (type) {
        case "text": case 'email': case 'number':
            return (
                <Input
                    type={type}
                    label={label}
                    register={register}
                    errors={errors}
                    required={required}
                    regex={regex}
                    regexErrorMessage={regexErrorMessage}
                    targetElement={targetElement}
                    componentIdentifier={componentIdentifier}
                    disable={disable}
                />
            )
        case 'select':
            return (
                <Select
                type={type}
                label={label}
                register={register}
                errors={errors}
                required={required}
                regex={regex}
                regexErrorMessage={regexErrorMessage}
                option={option}
                targetElement={targetElement}
                componentIdentifier={componentIdentifier}
                />
            )
            case 'checkbox':
                return(
                    <Checkbox 
                    type={type}
                    label={label}
                    register={register}
                    errors={errors}
                    required={required}
                    regex={regex}
                    regexErrorMessage={regexErrorMessage}
                    option={option}
                    targetElement={targetElement}
                    componentIdentifier={componentIdentifier}
                    />
                )
                // case 'datepicker' :
                //     return(
                //         // <Datepicker />
                //     )

        default:
            return <></>
    }
}

export default FormBuilder;