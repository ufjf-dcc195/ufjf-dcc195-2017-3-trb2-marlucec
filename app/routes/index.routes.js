module.exports = function (app){
  var manipulador = require("../controllers/index.controllers")
  app.use("/",manipulador.layout)
  app.use("/index.html",manipulador.layout)
}
