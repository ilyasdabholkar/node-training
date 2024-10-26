const router = require("express").Router();

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


router.get("/",(req,res)=>{
    //logic to pull all customers from db
    //convert them to json
    res.status(200).json(customers);
});

router.get("/:id",(req,res)=>{
    let customerId = req.params.id;
    let customer = customers.find(cust=>cust.id ==customerId);

    if(!customer){
        res.status(404).send('No customer with id'+customerId);
    }
    res.status(200).json(customer);
});

router.post("/",async (req,res)=>{
    let customerId = customers.at(-1).id + 1;
    let customer = {
        id : customerId,
        name : req.body.name,
        phone : req.body.phone
    };
    customers.push(customer);
    res.status(201).json(customer);
});

router.delete("/:id",(req,res)=>{
    let customerId = req.params.id;
    let customer = customers.find(cust=>cust.id ==customerId);

    if(!customer){
        res.status(404).send('No customer with id '+customerId);
    }

    customers = customers.filter(item=>item.id != customerId);
    res.status(200).send();
});

router.put("/:id",(req,res)=>{
    let customerId = req.params.id;
    let customer = customers.find(cust=>cust.id ==customerId);

    if(!customer){
        res.status(404).send('No customer with id'+customerId);
    }

    customer.name = req.body.name;
    customer.phone = req.body.phone;

    res.status(200).json(customer);
});


module.exports = router;
