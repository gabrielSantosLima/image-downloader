const google = require('googleapis').google
const customSearch = google.customsearch('v1');

const credentials = require('./../../credentials/config.json')

const input = require('../input')

module.exports = {
    async searchImages(query){
        try{
            const response = await customSearch.cse.list({
                auth: credentials.apiKey,
                cx: credentials.searchEngineid,
                q: query,
                searchType: 'image',
                imgSize: 'large',
                num: 5
            });

            return response.data.items.map((item) => item.link);
        }catch(error){
            return { error };
        }
    },

    async downloadImage(url){
        return {}
    }
};