const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const hbs=require("hbs");
require("./db/conn");
const User=require("./models/userSchema");

const app=express();
const PORT=process.env.PORT||80;
app.use(express.urlencoded({extended:false}));

const staticpath=path.join(__dirname,"../public");
const viewpath=path.join(__dirname,"../template/views");
const partialpath=path.join(__dirname,"../template/partials");
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));


app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",viewpath);
hbs.registerPartials(partialpath);

app.get("/",(req,res)=>{
   res.render("home");
})
app.get("/register",(req,res)=>{
   res.render("register");
})
app.post("/register",(req,res)=>{
   const UserData=new User(req.body);
   UserData.save().then(()=>{
      res.send("save");
   }).catch((err)=>{
      console.log(err);
   })
})

app.get("/signin",(req,res)=>{
   res.render("signin");
})

app.listen(PORT,()=>{
    console.log(`this website will run on port number ${PORT}`);
})