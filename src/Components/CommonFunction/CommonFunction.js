export const getCurrentDomain=()=>{
    if(window.location.hostname == "localhost"){
       return "http://localhost:3000"
    } 
}

// const data = [
//     {
//         id: 1,
//         groupId: 'Beetlejuice',
//         year: '1988',
//     }
    
// ]
export const getTableData =(apiResponse, tabName)=>{
    console.log("apiResponse", apiResponse)
    let data = [];
    for(let i = 0; i<apiResponse.length; i++){
        if(tabName == "Search"){
            data.push({
                groupId:apiResponse[i].GROUPID,
                groupName:apiResponse[i].GROUPNAME,
                postcode:apiResponse[i].POSTCODE,
                address:apiResponse[i].FORMATTEDADDRESS,
                customerBook:apiResponse[i].INTORGUNITNAME,
                frequencyType:apiResponse[i].BILLINGFREQUENCYDESCR,
                intermediary:apiResponse[i].INTERMEDIARYNAME,
                paymentType:apiResponse[i].CONTRACTTYPEDESCR,
             })
        }else{
            data.push({
                excess:apiResponse[i].EXCESS,
                groupDiscount:apiResponse[i].GROUP_DISCOUNT,
                paymentFreq:apiResponse[i].Payment_Freq,
                paymentType:apiResponse[i].Payment_Type,
                productName:apiResponse[i].Product_Name,
                productType:apiResponse[i].Product_Type,
                renewalMonth:apiResponse[i].Renewal_Month,
                scale:apiResponse[i].Scale,
             })
        }
         
    }
return data
    
}