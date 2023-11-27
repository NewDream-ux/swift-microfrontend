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
                regex:"^%([a-zA-Z0-9, ]+)%$",
                regexErrorMessage:'Please enter a number in %---% form'
            },
            {
                targetElement:"name",
                label:"Name",
                type:"text",
                classFromProps:"mb-3 col-12",
                isRequired:true,
                validationMsg:'',
                regex:"^%([a-zA-Z0-9, ]+)%$",
                regexErrorMessage:'Please enter a name in %---% form'
            },
            {
                targetElement:"address",
                label:"Address",
                type:"text",
                classFromProps:"mb-3 col-12",
                isRequired:true,
                validationMsg:'',
                regex:'^%([a-zA-Z0-9, ]+)%$',
                regexErrorMessage:'Please enter a address in %---% form'
            },
            {
                targetElement:"postcode",
                label:"Postcode",
                type:"text",
                classFromProps:"mb-3 col-12",
                isRequired:true,
                validationMsg:'',
                regex:"^%([a-zA-Z0-9, ]+)%$",
                regexErrorMessage:'Please enter a postcode in %---% form'
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
                    {value:"GRP", text:"Group"},
                    {value:1, text:"Parent Group"},
                    {value:1, text:"Reg Sub Group"}
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
                    {value:"A", text:"Active"},
                    {value:"L", text:"Lapsed"},
                    {value:"NS", text:"No Sale"},
                    {value:"P", text:"Pended"},
                    {value:"S", text:"Suspend"}
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
                    {value:1, text:"Company"},
                    {value:2, text:"Corporate"},
                    {value:3, text:"Personal"}
                ]
            }
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
