const MongoClient=require("mongodb").MongoClient;
const client=new MongoClient("mongodb://localhost:27017");

/*=================Inserting a record=========*/

async function addEnq(enq){
    await client.connect();
    var db=await client.db("master");
    var collect= await db.collection("enquires");
    await collect.insertOne(enq);
    await client.close();
    return " Enqiure Records inserted";
}

async function delEnq(id){
    await client.connect();
    var db=await client.db("master");
    var collect=await db.collection("enquires");
    await collect.deleteOne({id:id});
    await client.close();
    return " Enquire Record Deleted";

}

async function allEnq(){
    await client.connect();
    var db=await client.db("master");
    var collect=await db.collection("enquires");
   var find= await collect.find().toArray();
    await client.close();
    return find;
}

module.exports={

    "addEnq":addEnq,
    "delEnq":delEnq,
    "allEnq":allEnq
}