const express=require("express");
const app=express();
const path=require("path");
const port=9091;
app.use(express.static(path.join(__dirname,"/views")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{   // server starts
    console.log(`listening on port ${port}`);
    
});

app.get("/home",(req,res)=>{
   
    res.render("home.ejs");
});
app.get("/projects",(req,res)=>{
   
    res.render("projects.ejs");
});
app.get("/education",(req,res)=>{
   
    res.render("education.ejs");
});
app.get("/otherprofiles",(req,res)=>{
   
    res.render("profiles.ejs");
});