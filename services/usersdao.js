const MongoClient=require("mongodb").MongoClient;
const client=new MongoClient("mongodb://localhost:27017");

/*=================Inserting a record=========*/

async function addUser(user){
    await client.connect();
    var db=await client.db("master");
    var collect= await db.collection("user");
    await collect.insertOne(user);
    await client.close();
    return " user Record inserted";
}



async function deleteUser(username){
    await client.connect();
    var db=await client.db("master");
    var collect=await db.collection("user");
    await collect.deleteOne({username:username});
    await client.close();
    return " User Record Deleted";
}


async function allUsers(){
    await client.connect();
    var db=await client.db("master");
    var collect=await db.collection("user");
   var find= await collect.find().toArray();
    await client.close();
    return find;
}

 




module.exports={
    "addUser":addUser,
    "deleteUser":deleteUser,
    "allUsers":allUsers
}