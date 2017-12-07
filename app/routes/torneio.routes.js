module.exports = function(app){
  var manipulador =  require("../controllers/torneio.controllers")
  app.use("/torneio.html",manipulador.torneio)
}
