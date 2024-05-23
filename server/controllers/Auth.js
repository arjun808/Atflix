const User= require("../models/User")
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")
require("dotenv").config();


exports.Signup=async(req,res)=>{
try{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(501).json({
            message:"Fill all the details",
            success:false
        })
    }      
    const existUser=  await User.findOne({email});
    console.log(existUser)
    if(existUser){
        return res.status(400).json({
            success:false,
            message:"User Already registered"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })
    return res.status(200).json({
        success: true,
        user,
        message: "User registered successfully",
      })
}catch(err){
    console.log(err);
    return res.status(401).json({
        success:false,
        message:"err while sign up"
    })

}


   


}
exports.login = async (req, res) => {
    try {
   
        const { email, password } = req.body
        console.log(email)
    
       
        if (!email || !password) {
         
          return res.status(400).json({
            success: false,
            message: `Please Fill up All the Required Fields`,
          })
        }
    
  
        const user = await User.findOne({ email })
    console.log(user)
       
        if (!user) {
     
          return res.status(401).json({
            success: false,
            message: `User is not Registered with Us Please SignUp to Continue`,
          })
        }
     
  
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_KEY,
            {
              expiresIn: "24h",
            }
          )
    
         
          user.token = token
          user.password = undefined
       
          const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
          }
          res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
          })
        } else {
          return res.status(401).json({
            success: false,
            message: `Password is incorrect`,
          })
        }
      } catch (error) {
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Login Failure Please Try Again`,
        })
      }
}