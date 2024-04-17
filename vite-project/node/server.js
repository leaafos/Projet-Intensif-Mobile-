const express = require('express');

const app = express();
const Articles = 

app.use(express.json());
app.use(express.urlencoded({extended: true })); //peut lire des requetes et récupérer le body des champs

app.get("/", (req, res) => {
    res.send("hello");
});


app.get("/articles", (req, res)=>{
    const articles = Articles.getArticles();
    res.json(articles);
})



app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});




// scripts start node server.js name server version 1.0.0
//express ne fait que du routing mais on peut lui mettre des logiques metiers middle where ???