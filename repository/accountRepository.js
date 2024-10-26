const data = [
    {
        id : 1,
        fullname : "John Doe",
        email : "abc@gmail.com",
        phone : "1234567890",
        gender : "male",
        accountType : "current",
        amount : "5000",
    },
    {
        id : 2,
        fullname : "jane Smith",
        email : "abcd@gmail.com",
        phone : "9875456789",
        gender : "female",
        accountType : "saving",
        amount : "8000",
    },
    {
        id : 3,
        fullname : "Michael Johnson",
        email : "mjohnson@gmail.com",
        phone : "8767890987",
        gender : "male",
        accountType : "saving",
        amount : "12000",
    }
]

async function createAccount(record){
    record.id = data.at(-1).id + 1;
    data.push(record);
    return record;
}

async function getAllAccounts(){
    return data;
}

async function getAccountById(id){
    return data.find((record)=>record.id == id);
}

async function updateAccount(id,updatedRecord){
    const index = data.findIndex((record)=>record.id == id);

    if(index != -1){
        //update logic here
        data[index] = {...data[index],...updatedRecord}
        return data[index]; 
    }else{
        return null
    }
}

async function deleteAccount(id){
    const index = data.findIndex((record)=>record.id == id);

    if(index != -1){
       const deletedRecord = data.splice(index,1);
       return deletedRecord[0];
    }else{
        return null
    }
}

module.exports = {
    createAccount,
    getAllAccounts,
    getAccountById,
    updateAccount,
    deleteAccount
}