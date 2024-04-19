
const express = require("express");

const app = express();
const users = require('./models/userModel.js');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.use(async (req, res, next) => {
  if (req.headers.authorization) {
    req.user = await users.getUserById(parseInt(req.headers.authorization));
  }
  next();
});*/

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(require("./routes/security.js"));
const genericRouter = require('./routes/generique.js');
app.use(genericRouter(require('./models/produitModel.js')));
app.use(genericRouter(require('./models/alerteModel.js')));
app.use(genericRouter(require('./models/annonceModel.js')));
app.use(genericRouter(require('./models/categorieModel.js')));
app.use(genericRouter(require('./models/collectionModel.js')));
app.use(genericRouter(require('./models/favorisModel.js')));
app.use(genericRouter(require('./models/historiqueModel.js')));
app.use(genericRouter(require('./models/logModel.js')));
app.use(genericRouter(require('./models/messageModel.js')));
app.use(genericRouter(require('./models/notificationModel.js')));
app.use(genericRouter(require('./models/orderDetailsModel.js')));
app.use(genericRouter(require('./models/orderModel.js')));
app.use(genericRouter(require('./models/poubelleModel.js')));
app.use(genericRouter(require('./models/userModel')));
app.use(genericRouter(require('./models/vendeurModel.js')));


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




