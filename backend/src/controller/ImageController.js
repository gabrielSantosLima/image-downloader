const robots = require('../robot/robots');

module.exports = {
  
  async pesquisar(req, resp){
    try{
      const { query } = req.body;
      
      console.log(query);
      
      const urls = await robots.pesquisarImagem(query);
      
      return resp.json({
        message: "Enviado com sucesso",
        url: urls
      });
    }catch(error){
      
      return resp.json({
        mensagem: `Erro! Tente novamente! Messagem: ${error}` 
      });
    }
  },
  
  async baixar(req, resp){
    try{
      const { url } = req.body;
      
      const mensagem = await robots.baixarImagem(url);
      
      return resp.json({ mensagem });
    }catch(error){
      return resp.json({
        message: `Erro! Tente novamente! Messagem: ${error}` 
      });
    }
  } 
}