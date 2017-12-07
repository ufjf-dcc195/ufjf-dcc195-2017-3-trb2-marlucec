module.exports.sobre = function (req, res, next){
  res.render('autora/sobre',{nome: "Marluce Aparecida Vitor",curso: "Sistemas de Informação", matricula: "201276026",email: "marlucecancio@gmail.com"})
}
