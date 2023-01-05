const mongoose = require("mongoose");


//created/intialized database
mongoose.connect("mongodb://localhost:27017/channel")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))


//Collection Schema
const ProfileSchema=  new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    organisation: String,
    posts : Number,
    password : String,
    password:String,
    date:{
        type:Date,
        default:Date.now
    }

})

//created collection(Table in sql)
const Profile =  new mongoose.model("ProfileSchema",ProfileSchema);


const createDocument= async()=>{
    try{
        const jsPlaylist = new Profile({
            name : "Chirag",
            organisation : "XYZ",
            posts : 90,
            password : "chirag",
            eamil:"cht",
        })

        // const mongoPlaylist = new playList({
        //     name : "Mongo",
        //     type : "database",
        //     videos : 20,
        //     author : "chirag",
        //     active : true,
        // })
        // const mongoosePlaylist = new playList({
        //     name : "Mongoose",
        //     type : "database",
        //     videos : 12,
        //     author : "chirag",
        //     active : true,
        // })

        // const expressPlaylist = new playList({
        //     name : "express",
        //     type : "Back End",
        //     videos : 12,
        //     author : "chirag",
        //     active : true,
        // })
    
    
        const result =  await Profile.insertMany([jsPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
   

}

createDocument();


// //to read document
// const getDocument = async()=>{
//     const res = await playList
//     .find({author:"chirag"})
//     .select({name:1})
//     .sort({name:1})
    
//     console.log(res);

// }
// //getDocument();




// const updateDocument = async (_id)=>{
//     try{
//         const res =await playList
//         .findByIdAndUpdate({_id},{$set:{name:"Javascript"}})
//         console.log(res);
//     }catch(err){
//         console.log(err)
//     }

// }

// // updateDocument("62fa5a25915c7423d1712e98")


// //delte 
// const deleteDocument = async(_id)=>{
//     try{
//         const res = await playList
//         .deleteOne({_id})

//         console.log(res);
//     }catch(err){
//         console.log(err)
//     }
// }


// // deleteDocument("62fa5a25915c7423d1712e98")