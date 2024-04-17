const express = require("express");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  if (req.headers.authorization) {
    req.user = await User.getUserById(parseInt(req.headers.authorization));
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(require("./routes/security"));
const genericRouter = require('./routes/generique');
app.use(genericRouter(require('./models/produitModel')));
app.use(genericRouter(require('./models/alerteModel')));
app.use(genericRouter(require('./models/annonceModel')));
app.use(genericRouter(require('./models/categorieModel')));
app.use(genericRouter(require('./models/collectionModel')));
app.use(genericRouter(require('./models/favorisModel')));
app.use(genericRouter(require('./models/historiqueModel')));
app.use(genericRouter(require('./models/logModel')));
app.use(genericRouter(require('./models/messageModel')));
app.use(genericRouter(require('./models/notificationModel')));
app.use(genericRouter(require('./models/orderDetailsModel')));
app.use(genericRouter(require('./models/orderModel')));
app.use(genericRouter(require('./models/poubelleModel')));
app.use(genericRouter(require('./models/userModel')));
app.use(genericRouter(require('./models/vendeurModel')));


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




// scripts start node server.js name server version 1.0.0
//express ne fait que du routing mais on peut lui mettre des logiques metiers middle where ???