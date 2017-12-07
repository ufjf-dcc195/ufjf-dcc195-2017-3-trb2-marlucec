module.exports.amigo_oculto = function(req,res,next){
  if(req.method=='GET'){
    res.render("amigo_oculto/informa_nomes")
  }else if(req.method=='POST'){
    var nomes = req.body.nomes.split("\n");
    var pares = []
    var contaPar=0;
    var numParticipantes = nomes.length
    for(var i=0;i<numParticipantes-1;i++){
      pares[contaPar]={ 'nome1': nomes[i],'nome2': nomes[i+1]}
      contaPar++;
    }
    pares[contaPar]={nome1:nomes[numParticipantes-1],nome2: nomes[0]}
    res.render("amigo_oculto/saida",{amigos: pares})
  }
}
