const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(morgan('tiny'));

app.use(function (req,res,next) {
    //console.log("my request is reached to middleware");
    next();
})

const accountRoutes = require('./routes/accounts');
const customerRoutes = require('./routes/customers');
app.use("/api/accounts",accountRoutes);
app.use("/api/customers",customerRoutes);

app.listen(3000,()=>{
    console.log('API Server is running on http://localhost:3000/');
})