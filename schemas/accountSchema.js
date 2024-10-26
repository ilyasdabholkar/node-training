const {z} = require('zod');

const schema = z.object({
    fullname : z.string().min(1,"Full Name is required"),
    email : z.string().email("Invalid email address"),
    phone : z.string().min(10,"Phone number must be atleast 10 digits"),
    gender : z.enum(["male","female"],{
        errorMap : () => ({message:"Please select a gender"})
    }),
    accountType : z.enum(["current","savings"],{
        errorMap : () => ({message:"Please select account type"})
    }),
    amount : z.string().min(1,"Balance amount is required")
})

module.exports = schema;