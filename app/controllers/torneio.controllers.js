
module.exports.torneio =  function(req,res,next){
  if(req.session.rodada)
    console.log("RODADA ATUAL: "+req.session.rodada);
  if(req.method=='GET'){
      req.session.rodada = 0;
      res.render('torneio/equipes')
  }else if(req.method == 'POST'){
    if(req.session.rodada==0){

      var equipes = req.body.nomes;
      console.log(equipes);
      var jogos = []
      var num =0
      for(var i = 0; i < equipes.length;i+=2){
          jogos[num]={e1 : equipes[i], e2 : equipes[i+1]};
          num ++;
      }
      console.log(jogos);
      req.session.jogos = jogos;
      req.session.rodada++;
      //console.log(equipes);

      res.render('torneio/torneio',{'jogos': jogos})
    }else{
      var jogos = req.session.jogos;
      console.log(jogos);
      var passaram  = [];
      var conta_passaram = 0;
      var e = [];
      for(var i in jogos){
        e[i];
        var rand = Math.floor(Math.random()+0.5);
        if(rand == 0){
            e[i]= jogos[i].e1;
        }else{
            e[i]= jogos[i].e2;
        }
      }
      console.log(e);
      if(req.session.rodada==4){
        res.render('torneio/vencedor',{vencedor: e[0]})
      }else{
        var cont = 0;
        for(var i=0;i<e.length;i+=2){
          passaram[cont]={e1: e[i], e2: e[i+1]}
          cont ++;
        }
        req.session.jogos=passaram;
        req.session.rodada++;
        //console.log(req.session.rodada);
        res.render('torneio/torneio',{'jogos': passaram})
      }

    }
  }
}
