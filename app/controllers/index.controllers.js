module.exports.layout = function(req,res,next){
  res.render('layout',{layout : [
    {questao:"/",link :"/"},
    {questao:"index.html",link :"/index.html"},
    {questao:"Sobre",link :"/sobre.html"},
    {questao:"Amigo Oculto",link :"/amigo_oculto.html"},
    {questao:"Jogo da velha",link :"/velha.html"},
    {questao:"Torneio",link :"/torneio.html"}
  ]})
}
