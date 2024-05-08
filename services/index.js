const express=require("express")
const dao=require("./usersdao")
const app=express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/cruser",function(req,res){

  var  user={
             "username":req.body.username,
             "Password":req.body.Password,
             "Roll":req.body.Roll
            }
  
  dao.addUser(user)

  .then(function(msg){
    res.send(msg);
    
  })
  
  .catch(function(err){
    res.send(err);
  })

})

/****************************** delete                              */


app.delete("/dluser",function(req,res){

    
    dao.deleteUser(req.body.username)
  
    .then(function(msg){
      res.send(msg);
      
    })
    
    .catch(function(err){
      res.send(err);
    })
  
  })

app.get("/allUser",function(req,res){
    dao.allUsers()
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




