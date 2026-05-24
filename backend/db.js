const mysql = require("mysql2");

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"kids_shop"
});

db.connect((err)=>{

  if(err){
    console.log(err);
  }else{
    console.log("MySQL Connected");
  }
});

module.exports = db;
