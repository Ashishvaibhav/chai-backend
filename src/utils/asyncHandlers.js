const asyncHandler =(requestHandler)=>{

    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }

}









export {asyncHandler}

//const asyncHandler=()=>{}
//const asyncHandle=(func)=>()=>{}
//const asyncHandler=(func)=>async()=>{}



//    try{
    //    await fn(req,res,next)
//            res.status(err.code ||500).json({
               // sucess:false,
              //  message:err.message
           // })
//    }



