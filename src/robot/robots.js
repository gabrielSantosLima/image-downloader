const image = require('./image');

module.exports = {
  async pesquisarImagem(query){
    const data = await image.searchImages(query) ;

    return data;
  },
  
  async baixarImagem(url){
    const mensagem = await image.downloadImage(url); 

    return mensagem;
  }
}