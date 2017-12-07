module.exports = function (app) {
  var manipulador = require("../controllers/autora.controllers")
  app.use("/sobre.html",manipulador.sobre)
}
