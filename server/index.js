/* This is the server file. It is importing express and cors, setting up the server, and importing the
controller. */
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getFuture } = require('./controller')

 
app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.get("/api/future", getFuture)

app.listen(4000, () => console.log("Server running on 4000"));
