const data = require("./dummy");
const express = require("express");
const dotenv = require("dotenv"); 
const res = require("express/lib/response");
dotenv.config();
const app = express();
app.get("/",(req,resp)=>{
  resp.send("running");
});

app.get("/api",(request,response) => {
  response.send(data);
});

app.get("/api/:id",(req,res)=>{
  const param = req.params;
  const dataResponse = data.filter(elem=>elem.id === param.id);
  res.send(dataResponse);
});
const PORT =  process.env.PORT || 3232;
app.listen(3232);