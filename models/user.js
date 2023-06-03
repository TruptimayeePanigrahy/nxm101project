const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    mobileNumber:{
        type:Number,
        require:true
    }

})

const usermodel=mongoose.model("users",userSchema)


module.exports={usermodel}