const robots = require('../robot/robots')

module.exports = {
  
  async pesquisar(req, resp){
    try{
      const { query } = req.body
      
      console.log(query)
      
      const urls = await robots.pesquisarImagem(query)

      return resp.json({
        message: "Enviado com sucesso",
        url: urls
      })
    }catch(error){
      
      return resp.json({
        message: `Erro! Tente novamente! Messagem: ${error}` 
      })
    }
    
    
  }
  
}

