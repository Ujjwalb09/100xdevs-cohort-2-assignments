const express = require('express');
const app = express();
const port  = 3000;
const card = require('./database');
const cors = require("cors");

app.use(express.json());
app.use(cors());


app.post("/card", async (req, res)=>{
    const cardBody = req.body;

    await card.create({
        name: cardBody.name,
        description: cardBody.description,
        interests: cardBody.interests,
        socials: cardBody.socials
    })

    res.json({message: "Card created successfully"});
})


app.post("/getCard", async (req, res)=>{
    const name = req.body.name;

    const cards = await card.find({
        name
    })

    res.json({
        card: cards[0]
})
})



app.listen(port);



