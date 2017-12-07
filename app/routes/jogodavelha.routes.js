module.exports = function(app){
  var manipulador = require("../controllers/jogodavelha.controllers")
  app.use("/velha.html",manipulador.jogodavelha)
}
