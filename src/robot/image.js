const google = require('googleapis').google;
const customSearch = google.customsearch('v1');
const downloader = require('image-downloader');

const credentials = require('./../../credentials/config.json');

const input = require('../input');

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
            
            const items = response.data.items.map((item) => item.link); 

            let index = 0;

            const data = items.map(item => {
                index++;
                
                return {
                    id: index,
                    url: item
                }
            })

            return data;
        }catch(error){
            return { error };
        }
    },
    
    downloadImage(url){
        const options = {
            url: url,
            dest: process.env.USERPROFILE + "/Downloads"
        };
        
        return downloader.image(options)
        .then(({ filename }) => {
            return `Salvo ${filename}`;
        })
        .catch((error) => {
            return { error };
        });
    }
};