import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
const FormBuilder = (props) => {
    const { type, errors, label, register, classFromProps, required, option, regex, regexErrorMessage, targetElement } = props;
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
                />
            )

        default:
            return <></>
    }
}

export default FormBuilder;