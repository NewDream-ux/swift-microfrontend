export const SearchFormFields =
{
    title: "Search Form Fields Details",
    fields: [
        {
            targetElement: "number",
            label: "Number",
            type: "text",
            classFromProps: "mb-3 col-12",
            isRequired: true,
            validationMsg: '',
            regex: "^%([a-zA-Z0-9, ]+)%$",
            regexErrorMessage: 'Please enter a number in %---% form'
        },
        {
            targetElement: "name",
            label: "Name",
            type: "text",
            classFromProps: "mb-3 col-12",
            isRequired: true,
            validationMsg: '',
            regex: "^%([a-zA-Z0-9, ]+)%$",
            regexErrorMessage: 'Please enter a name in %---% form'
        },
        {
            targetElement: "address",
            label: "Address",
            type: "text",
            classFromProps: "mb-3 col-12",
            isRequired: true,
            validationMsg: '',
            regex: '^%([a-zA-Z0-9, ]+)%$',
            regexErrorMessage: 'Please enter a address in %---% form'
        },
        {
            targetElement: "postcode",
            label: "Postcode",
            type: "text",
            classFromProps: "mb-3 col-12",
            isRequired: true,
            validationMsg: '',
            regex: "^%([a-zA-Z0-9, ]+)%$",
            regexErrorMessage: 'Please enter a postcode in %---% form'
        },
        {
            targetElement: "level",
            label: "Level",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: true,
            validationMsg: 'Please select a level',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "GRP", text: "Group" },
                { value: 1, text: "Parent Group" },
                { value: 1, text: "Reg Sub Group" }
            ]
        },
        {
            targetElement: "status",
            label: "Status",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: true,
            validationMsg: 'Please select a status',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "A", text: "Active" },
                { value: "L", text: "Lapsed" },
                { value: "NS", text: "No Sale" },
                { value: "P", text: "Pended" },
                { value: "S", text: "Suspend" }
            ]
        },
        {
            targetElement: "customerBook",
            label: "Customer Book",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: true,
            validationMsg: 'Please select a customer book',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: 1, text: "Company" },
                { value: 2, text: "Corporate" },
                { value: 3, text: "Personal" }
            ]
        }
    ]
}

export const GroupSummaryData = {
    tittle: "GroupSummary",
    fields: [
        {
            targetElement: "groupNumber",
            label: "Group Number",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "fundingMethod",
            label: "Funding Method",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        
        {
            targetElement: "groupStatus",
            label: "Group Status",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "groupName",
            label: "Group Name",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "groupMembership",
            label: "Group Membership",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "contactType",
            label: "Contact Type",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "groupLevel",
            label: "Group Level",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "customerBook",
            label: "Customer Book",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "contactRelationship",
            label: "Contact Relationship",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "paymentGroup",
            label: "Payment Group",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            disable: false,
            isRequired: true,
            validationMsg: '',
            identifier: '',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "GRP", text: "Group" },
                { value: 1, text: "Parent Group" },
                { value: 1, text: "Reg Sub Group" }
            ]
            
        },
        {
            targetElement: "contact",
            label: "Contact",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            disable: false,
            isRequired: true,
            validationMsg: '',
            identifier: '',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "GRP", text: "Group" },
                { value: 1, text: "Parent Group" },
                { value: 1, text: "Reg Sub Group" }
            ]
        },
        {
            targetElement: "digitalInvite",
            label: "Digital Invited",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            disable: false,
            validationMsg: '',
            identifier: '',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "GRP", text: "Group" },
                { value: 1, text: "Parent Group" },
                { value: 1, text: "Reg Sub Group" }
            ]
        },
        
        {
            targetElement: "groupEFullfilment",
            label: "Group E-Fulfilment",
            type: "checkbox",
            classFromProps: "mb-3 col-12",
            disable: false
        },
        
        {
            targetElement: "claimEftIndicator",
            label: "Claim EFT Indicator",
            type: "checkbox",
            classFromProps: "mb-3 col-12",
            disable: false,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        }
    ]
}

export const GeneralDetails={
    tittle:"GeneralDetails",
    fields:[
        {
            targetElement: "organization",
            label: "Organization",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "creationDate",
            label: "Creation Date",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "formationDate",
            label: "Formation Date",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "3rdPartyNumber",
            label: "3rd Party Number",
            type: "text",
            classFromProps: "mb-3 col-12",
            disable: true,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "underwritingApplied",
            label: "Underwriting Applied",
            type: "checkbox",
            classFromProps: "mb-3 col-12",
            disable: false,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "generalDatepicker",
            label: "General Datepicker",
            type: "datepicker",
            classFromProps: "mb-3 col-12",
            disable: false,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "showGroupNameOnMemberDocument",
            label: "Show Group Name On Member Documents",
            type: "checkbox",
            classFromProps: "mb-3 col-12",
            disable: false,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "bespokeFilfilment",
            label: "Bespoke Filfilment",
            type: "checkbox",
            classFromProps: "mb-3 col-12",
            disable: false,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
        {
            targetElement: "bespokeRenewalLetter",
            label: "Bespoke Renewal Letter",
            type: "checkbox",
            classFromProps: "mb-3 col-12",
            disable: false,
            isRequired: true,
            validationMsg: '',
            regex: "",
            regexErrorMessage: ''
        },
    ]
}

export const columns = [
    {
        name: 'Group ID',
        selector: row => row.groupId,
    },
    {
        name: 'Group Name',
        selector: row => row.groupName,
    },
    {
        name: 'Postcode',
        selector: row => row.postcode,
    },
    {
        name: 'Address',
        selector: row => row.address,
    },
    {
        name: 'Customer Book',
        selector: row => row.customerBook,
    },
    {
        name: 'Frequency Type',
        selector: row => row.frequencyType,
    },
    {
        name: 'Intermediary',
        selector: row => row.intermediary,
    },
    {
        name: 'Payment Type',
        selector: row => row.paymentType,
    }
];
