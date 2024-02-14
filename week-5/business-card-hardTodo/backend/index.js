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


app.get("/card", async (req, res)=>{
    const name = req.query.name;

        const cards = await card.findOne({
            name
        })
    
        if(!cards) res.json({message: `No card with name ${name} exists`});
        else res.json(cards)

})

app.delete("/card", async (req, res)=>{
     const name = req.query.name;

     await card.deleteOne({name});

     res.json({
        message: "Card deleted Successfully!"
     })
})

app.listen(port);



