const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = [`Your store is being robed, Apu.`, `You will find love on flag day!`, `The price of stamps will climb ever higher.`, `You will invent a humorous toilet lid.`, `You are a real winner!`, ]

  let randomNum = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomNum]

  res.status(200).send(randomFortune)
})

const {getGuitars, deleteGuitar, addGuitar, updatePrice} = require('./controller')

app.get('/api/guitars', getGuitars)
app.delete('/api/guitars/:id', deleteGuitar)
app.post('/api/guitars', addGuitar)
app.put('/api/guitars/:id', updatePrice)

app.listen(4000, () => console.log("Server running on 4000"));
