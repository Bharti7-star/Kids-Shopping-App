const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// PRODUCTS API
app.get("/products",(req,res)=>{

  const sql = "SELECT * FROM products";

  db.query(sql,(err,result)=>{

    if(err){
      return res.json(err);
    }

    res.json(result);
  });
});

app.listen(5000,()=>{
  console.log("Server Running on 5000");
});
