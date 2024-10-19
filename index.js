const express = require('express');
const app = express();

let customers = [
    {
        id : 1,
        name : "Soham Khobrekar",
        phone : "8989876789"
    },
    {
        id : 2,
        name : "Sufiyan Mogal",
        phone : "8989876789"
    },
    {
        id : 3,
        name : "momin zayed",
        phone : "8989876789"
    },
]

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/customer",(req,res)=>{
    //logic to pull all customers from db
    //convert them to json
    res.status(200).json(customers);
});

app.get("/api/customer/:id",(req,res)=>{
    let customerId = req.params.id;
    let customer = customers.find(cust=>cust.id ==customerId);

    if(!customer){
        res.status(404).send('No customer with id'+customerId);
    }
    res.status(200).json(customer);
});

app.post("/api/customer",async (req,res)=>{
    let customerId = customers.at(-1).id + 1;
    let customer = {
        id : customerId,
        name : req.body.name,
        phone : req.body.phone
    };
    customers.push(customer);
    res.status(201).json(customer);
});

app.delete("/api/customer/:id",(req,res)=>{
    let customerId = req.params.id;
    let customer = customers.find(cust=>cust.id ==customerId);

    if(!customer){
        res.status(404).send('No customer with id '+customerId);
    }

    customers = customers.filter(item=>item.id != customerId);
    res.status(200).send();
});

app.put("/api/customer/:id",(req,res)=>{
    let customerId = req.params.id;
    let customer = customers.find(cust=>cust.id ==customerId);

    if(!customer){
        res.status(404).send('No customer with id'+customerId);
    }

    customer.name = req.body.name;
    customer.phone = req.body.phone;

    res.status(200).json(customer);
});

app.listen(3000,()=>{
    console.log('API Server is running on http://localhost:3000/');
})