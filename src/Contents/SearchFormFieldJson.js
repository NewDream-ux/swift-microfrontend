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

export const GeneralDetails = {
    tittle: "GeneralDetails",
    fields: [
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

export const AdvancedSearchFormFields = {
    title: "Advanced Search Form Fields Details",
    fields: [
        {
            targetElement: "productName",
            label: "Product Name",
            type: "text",
            classFromProps: "mb-3 col-12",
            isRequired: false,
            validationMsg: '',
            regex: "^%([a-zA-Z0-9, ]+)%$",
            regexErrorMessage: 'Please enter a number in %---% form'
        },
        {
            targetElement: "productType",
            label: "Product Type",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: false,
            validationMsg: 'Please select a level',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "BUPA Select", text: "BUPA Select" },
                { value: "Cash Plan", text: "Cash Plan" },
                { value: "Dental", text: "Dental" },
                { value: "Travel", text: "Travel" },
                { value: "Welfare", text: "Welfare" }
            ]
        },
        {
            targetElement: "paymentType",
            label: "Payment Type",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: false,
            validationMsg: 'Please select a level',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "Direct Pay Common Renewal", text: "Direct Pay Common Renewal" },
                { value: "Direct Pay Non-common Renewal", text: "Direct Pay Non-common Renewal" },
                { value: "Group Pay", text: "Group Pay" },
                { value: "Group Pay Non-Common Renewal", text: "Group Pay Non-Common Renewal" },
                { value: "Subsidy", text: "Subsidy" },

            ]
        },
        {
            targetElement: "renewalMonth",
            label: "Renewal Month",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: false,
            validationMsg: 'Please select a level',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "January", text: "January" },
                { value: "February", text: "February" },
                { value: "March", text: "March" },
                { value: "April", text: "April" },
                { value: "May", text: "May" },
                { value: "June", text: "June" },
                { value: "July", text: "July" },
                { value: "August", text: "August" },
                { value: "September", text: "September" },
                { value: "October", text: "October" },
                { value: "November", text: "November" },
                { value: "December", text: "December" },

                
            ]
        },
        
        {
            targetElement: "groupDiscount",
            label: "Group Discount",
            type: "text",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: false,
            validationMsg: '',
            regex: "^%([a-zA-Z0-9, ]+)%$",
            regexErrorMessage: 'Please enter a number in %---% form'
        },
        {
            targetElement: "scale",
            label: "Scale",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: false,
            validationMsg: 'Please select a level',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                {value:"BPCNetwork500", text: "BUPACare Network (£500 Ther, £20 NHS, £100 Excess)"},
                {value:"BPCNetwork800", text: "BUPACare Network (£800 Ther, £30 NHS, £100 Excess)"},
                {value:"countrywide", text: "Countrywide"},
                {value:"countryLondon", text: "Countrywide with London Upgrade"},
                {value:"countrywideGuide", text: "Countrywide with London Upgrade and Guided Care"},
                {value:"essential", text: "Essential Access facility"},
                {value:"essentialGuide", text: "Essential Access with Guided Care"},
                {value:"extChoice", text: "Ext Choice with Central London and Guided Care"},
                {value:"extended", text: "Extended"},
                {value:"extendedChoice", text: "Extended Choice"},
                {value:"extendeChoiceFac", text: "Extended Choice facility"},
                {value:"extendedChoiceLondon", text: "Extended Choice with Central London"},
                {value:"extendedChoiceLondonFac", text: "Extended Choice with Central London facility"}
            ]
        },
        {
            targetElement: "paymentFreq",
            label: "Payment Freq",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: false,
            validationMsg: 'Please select a level',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "annual", text: "Annual " },
                { value: "biAnnual", text: "BiAnnual" },
                { value: "quarterly", text: "Quarterly" },
                { value: "monthly", text: "Monthly" }
            ]
        },
        {
            targetElement: "excess",
            label: "Excess",
            type: "select",
            classFromProps: "mb-3 col-12 col-md-6",
            isRequired: false,
            validationMsg: 'Please select a level',
            identifier: 'slug',
            regex: '',
            regexErrorMessage: '',
            option: [
                { value: "included", text: "Included" },
                { value: "noExcess", text: "No Excess" },
                { value: "e0", text: "£0" },
                { value: "e000", text: "£1,000" },
                { value: "e00", text: "£100" },
                { value: "e1000", text: "£1000" },
                { value: "e1000AdultOnly", text: "£1000 / Adults only" },
                { value: "e150", text: "£150" },
                { value: "e2000", text: "£2,000" },
                { value: "e200", text: "£200" },
                { value: "e2000", text: "£2000" },
                { value: "e2000AdultOnly", text: "£2000 / Adults only" },
                { value: "e250", text: "£250" },
                { value: "e2500", text: "£2500" },
                { value: "e300", text: "£300" },
                { value: "e50", text: "£50" },
                { value: "e500", text: "£500" },
            ]
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

export const advancedSearchColumns = [
    {
        name: 'Product Name',
        selector: row => row.productName,
    },
    {
        name: 'Product Type',
        selector: row => row.productType,
    },
    {
        name: 'Payment Type',
        selector: row => row.paymentType,
    },
    {
        name: 'Renewal Month',
        selector: row => row.renewalMonth,
    },
    {
        name: 'Group Discount',
        selector: row => row.groupDiscount,
    },
    {
        name: 'Scale',
        selector: row => row.scale,
    },
    {
        name: 'Payment Freq',
        selector: row => row.paymentFreq,
    },
    {
        name: 'Excess',
        selector: row => row.excess,
    }
];
