module.exports = function(app){
  var manipulador = require("../controllers/mediador.controllers")
  app.use("/amigo_oculto.html",manipulador.amigo_oculto)
}
