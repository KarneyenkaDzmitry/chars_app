'use strict';
const fs = require('fs');
const startUrl = "https://rickandmortyapi.com/api/character/";
const request = require('request-promise-native');

function main(parameters) {
    getBase(startUrl)
        .then(data => getCharacter(data, parameters))
        .then(characters => {
            characters.forEach(element => {
                console.log(element);
            });
            fs.writeFileSync('./resources/result.json', JSON.stringify(characters), 'utf8');
        })
        .catch(error => console.log(error));
};

function getBase(url) {
    let result = [];
    const getChars = (url) => request(url, { json: true }).then((body) => {
        result = [...result, ...body.results];
        if (body.info.next !== '') {
            return getChars(body.info.next);
        } else return result;
    });
    return getChars(url);
}

function getCharacter(array, parameters) {
    let dataBase = array;
    Object.keys(parameters).forEach(elem => {
        switch (elem) {
            case 'id':
                dataBase = dataBase.filter(
                    element => element[elem].toString().toLowerCase() === parameters[elem].toString().toLowerCase());
                break;
            case 'location': case 'origin':
                dataBase = dataBase.filter(
                    element => element[elem].name.toString().toLowerCase().indexOf(parameters[elem].toString().toLowerCase()) > -1);
                break;
            default:
                dataBase = dataBase.filter(
                    element => element[elem].toString().toLowerCase().indexOf(parameters[elem].toString().toLowerCase()) > -1);
                break;
        }
    });
    return dataBase;
}
exports.main = main;