const express=require("express")
const dao=require("./usersdao")
const enqdao=require("./enqdao.js")

const app=express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
/*********************************       *insert   *********************************** */
app.post("/cruser",function(req,res){

dao.addUser(req.body)

  .then(function(msg){
    res.send(msg);
    
  })
  
  .catch(function(err){
    res.send(err);
  })

})

/****************************** delete   *********************************************                          */


app.delete("/dluser",function(req,res){

    
    dao.deleteUser(req.body.username)
  
    .then(function(msg){
      res.send(msg);
      
    })
    
    .catch(function(err){
      res.send(err);
    })
  
  })


  /**************************************** All User  ********************************************** */

app.get("/allUser",function(req,res){
    dao.allUsers()
    .then(function(data){

        res.send(data);
    })

    .catch(function(err){
        res.send(err)
    })
})




/************************ENQIURE*********************************** */


app.post("/crenq",function(req,res){


  enqdao.addEnq(req.body)

  .then(function(msg){
    res.send(msg);
    
  })
  
  .catch(function(err){
    res.send(err);
  })

})



app.delete("/dlenq",function(req,res){

    
  enqdao.delEnq(req.body.id)

  .then(function(msg){
    res.send(msg);
    
  })
  
  .catch(function(err){
    res.send(err);
  })

})

app.get("/allenq",function(req,res){
  enqdao.allEnq()
  .then(function(data){

      res.send(data);
  })

  .catch(function(err){
      res.send(err)
  })
})




app.listen(3000,function(){
    console.log("3000 server is Started")
})





