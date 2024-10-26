const router = require("express").Router();
const accountRepository = require("../repository/accountRepository");
const validateRequest = require("../middlewares/validateRequest");
const createAcctSchema = require("../schemas/accountSchema");

router.get("/",async (req,res)=>{
    let accounts = await accountRepository.getAllAccounts();
    res.status(200).json(accounts);
});

router.get("/:id",async (req,res)=>{
    let accountId = req.params.id;
    let account = await accountRepository.getAccountById(accountId);
    if(!account){
        res.status(404).send('No account with id '+accountId);
    }
    res.status(200).json(account);
});


router.post("/",validateRequest(createAcctSchema),async (req,res)=>{
   try{
    let newAcct = {
        fullname : req.body.fullname,
        email : req.body.email,
        phone : req.body.phone,
        gender : req.body.gender,
        accountType : req.body.accountType,
        amount : req.body.amount
       }
    let account = await accountRepository.createAccount(newAcct);
    res.status(201).json(account);
   }catch(ex){
    res.status(400).json({error:ex});
   }
   
});

module.exports = router;