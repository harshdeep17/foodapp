//creating a Mongodb Client
const mongoClient = require("mongodb").MongoClient
//connecting with mongodb database
const url = 'mongodb+srv://foodapp2023:foodapp2023%40@cluster0.ogmiamy.mongodb.net/'
const dbName = 'Foodapp'
var db
async function client (){
    mongoClient.connect(url, {useUnifiedTopology : true},(err, client)=>{
        if(err){
            console.log(err)
        } else{
            console.log("Connected to database")
            db = client.db(dbName)
            return db
            // collection = db.collection('pizza')
        }
    })
}
module.exports=client