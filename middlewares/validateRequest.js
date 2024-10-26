
const validateRequest = (schema) => async (req,res,next) => {

    const validation = schema.safeParse(req.body);

    if(!validation.success){
        const errorMessages = validation.error.errors.map((err)=>{
            return `${err.path[0]} : ${err.message}`;
        });

        return res.status(400).json({
            message : "Validation Error",
            errors : errorMessages
        });
    }

    next();
}

module.exports = validateRequest;