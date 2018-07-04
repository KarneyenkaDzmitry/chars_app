'use strict';
const fs = require('fs');
const Client = require('node-rest-client').Client;
const client = new Client();
const fileDB = './resources/R&MDB.json'
const startUrl = "https://rickandmortyapi.com/api/character/";

async function main(parameters) {
    getBase(startUrl)
        .then(() => getCharacter(parameters))
        .then(character => {
            console.log(character);
            fs.writeFileSync('./resources/result.json', JSON.stringify(character), 'utf8');
        })
        .catch(error=>console.log(error));
};

function getBase(url) {
    let array = [];
    fs.existsSync(fileDB) ? '' : fs.writeFileSync(fileDB, '{"results":[]}', 'utf8');
    return new Promise((resolve, reject) => {
        try {
            client.get(url, (data, response) => {
                if (response.statusCode === 200) {
                    array = JSON.parse(fs.readFileSync(fileDB, 'utf8')).results;
                    array = [...array, ...data.results];
                    fs.writeFileSync(fileDB, '{\"results\": ' + JSON.stringify(array) + '}', 'utf-8');
                    url = data.info.next;
                    return url === '' ? array : getBase(url);
                }
                else {
                    console.log('Something went wrong! Response code:' + response.statusCode);
                }
            });
            return resolve(array);
        } catch (error) {
            return reject(error);
        }
    });
}

function getCharacter(parameters) {
    let dataBase = JSON.parse(fs.readFileSync(fileDB, 'utf8')).results;
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