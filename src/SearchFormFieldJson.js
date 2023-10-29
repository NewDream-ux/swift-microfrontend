export const SearchFormFields = 
    {
        title:"Search Form Fields Details",
        fields:[
            {
                targetElement:"number",
                label:"Number",
                type:"text",
                classFromProps:"mb-3 col-12",
                isRequired:true,
                validationMsg:'',
                regex:"^[0-9#!%*?-]*$",
                regexErrorMessage:'Please enter a valid number'
            },
            {
                targetElement:"name",
                label:"Name",
                type:"text",
                classFromProps:"mb-3 col-12",
                isRequired:true,
                validationMsg:'',
                regex:"^[A-Za-z#!%*?-]*$",
                regexErrorMessage:'Please enter a valid name'
            },
            {
                targetElement:"address",
                label:"Address",
                type:"text",
                classFromProps:"mb-3 col-12",
                isRequired:true,
                validationMsg:'',
                regex:'',
                regexErrorMessage:'Please enter a valid address'
            },
            {
                targetElement:"postcode",
                label:"Postcode",
                type:"text",
                classFromProps:"mb-3 col-12",
                isRequired:true,
                validationMsg:'',
                regex:"^[0-9A-Za-z#!%*?-]*$",
                regexErrorMessage:'Please enter a valid postcode'
            },
            {
                targetElement:"level",
                label:"Level",
                type:"select",
                classFromProps:"mb-3 col-12 col-md-6",
                isRequired:true,
                validationMsg:'Please select a level',
                identifier:'slug',
                regex:'',
                regexErrorMessage:'',
                option:[
                    {id:1, value:"Group"},
                    {id:1, value:"Parent Group"},
                    {id:1, value:"Reg Sub Group"}
                ]

                
            },
            {
                targetElement:"status",
                label:"Status",
                type:"select",
                classFromProps:"mb-3 col-12 col-md-6",
                isRequired:true,
                validationMsg:'Please select a status',
                identifier:'slug',
                regex:'',
                regexErrorMessage:'',
                option:[
                    {id:1, value:"Active"},
                    {id:2, value:"Lapsed"},
                    {id:3, value:"No Sale"},
                    {id:2, value:"Pended"},
                    {id:3, value:"Suspend"}
                ]
            },
            {
                targetElement:"customerBook",
                label:"Customer Book",
                type:"select",
                classFromProps:"mb-3 col-12 col-md-6",
                isRequired:true,
                validationMsg:'Please select a customer book',
                identifier:'slug',
                regex:'',
                regexErrorMessage:'',
                option:[
                    {id:1, value:"Company"},
                    {id:2, value:"Corporate"},
                    {id:3, value:"Personal"}
                ]
            }
        ]
    }
