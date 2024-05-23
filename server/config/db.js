const mongoose= require('mongoose')
const dotenv= require('dotenv')
    dotenv.config();

exports.database=()=>{
    try{
mongoose.connect(process.env.MONGO_URL).then(console.log("Db connection succesfully"))
    }catch(err){
        console.log(`err while connecting to database ${err}`)
    }
}