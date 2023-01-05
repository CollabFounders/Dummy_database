const mongoose = require("mongoose");


//created/intialized database
mongoose.connect("mongodb://0.0.0.0:27017/category")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))

const Category=  new mongoose.Schema({
    postIds:[String],
    childs:[String],
})

const computerscince =  new mongoose.model("ComputerScience",Category);
const webapp =  new mongoose.model("Web_dev",Category);

const findDoc = async(root)=>{
    root.find((err,data)=>{
        try{
          console.log(data[0].postIds);
           let childrens =  data[0].childs;
           childrens.map(element => {
            const cs =  new mongoose.model(element,Category);
            findDoc(cs);
           });

        }catch(err){
            console.log(err);
        }
    })
    
}

findDoc(computerscince);
