const express = require("express");
require("dotenv").config();

const ourRoutes = require('./routes/route')
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

// Run for every request that comes in
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/workout/', ourRoutes)


// connect ot DB
mongoose.connect(process.env.MONGO_URL)
        .then(()=> {
            console.log("connected")
            app.listen(process.env.PORT, () => {
                console.log("Listening on port", process.env.PORT);
            });            
        })
        .catch((err)=> {
            console.log(err)
        })
