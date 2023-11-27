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
export const getTableData =(apiResponse)=>{
    console.log("apiResponse", apiResponse)
    let data = [];
    for(let i = 0; i<apiResponse.length; i++){
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
    }
return data
    
}