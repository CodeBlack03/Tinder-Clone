import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js"
import Cors from "cors";
//App Config
const app = express();
const connection_url =
  "mongodb+srv://admin:heropanti003@tinder-clone.qcp9p.mongodb.net/tinderdb?retryWrites=true&w=majority";
//Middlewares
app.use(express.json())
app.use(Cors())
//DB config
mongoose.connect(connection_url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});


//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/tinder/cards", (req,res) => {
    const dbCard=req.body;
    Cards.create(dbCard, (err,data) =>{
        if(err){
            req.status(500).send(err)
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.get("/tinder/cards", (req,res)=>{
    Cards.find((err,foundCard) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(foundCard)
        }
    })
})


//Listener
app.listen(process.env.PORT || 1000, function (err) {
  if (err) throw err;
  console.log("Server is running on port 1000");
});
