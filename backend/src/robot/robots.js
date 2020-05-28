const image = require('./image')

module.exports = {
  async pesquisarImagem(query){
    const url = await image.searchImages(query) 

    return { url }
  }
}