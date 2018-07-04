'use strict';
const fs = require('fs');
const startUrl = "https://rickandmortyapi.com/api/character/";
const request = require('request-promise-native');

function main(parameters) {
    getBase(startUrl)
        .then(data => getCharacter(data, parameters))
        .then(characters => {
            characters.forEach(element=>{
                console.log(element);
            });
            fs.writeFileSync('./resources/result.json', JSON.stringify(characters), 'utf8');
        })
        .catch(error=>console.log(error));
};

function getBase(url) {
        let result = [];
        const getChars = (url) => request(url, {json: true}).then((body) => {
            result =[...result,...body.results];
            if (body.info.next !== '') {
                return getChars(body.info.next);
            } else return result;
        });
        return getChars(url);
    }
    
function getCharacter(dataBase, parameters) {
    Object.keys(parameters).forEach(elem => {
        if (elem === 'id') {
            dataBase = dataBase.filter(
                element => element[elem].toString().toLowerCase() === parameters[elem].toString().toLowerCase());
        } else {
            dataBase = dataBase.filter(
                element => element[elem].toString().toLowerCase().indexOf(parameters[elem].toString().toLowerCase()) > -1);
        }
    });
    return dataBase;
}
exports.main = main;