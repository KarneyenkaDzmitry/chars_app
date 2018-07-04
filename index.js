'use strict';
const finder = require('./finder.js');
const args = require('yargs')
    .usage('Usage: node $0 --id [string] --type [string]')
    .example('$0 -n Alex').example('$0 --st Alive')
    .option('id').alias('i', 'id').nargs('id', 1).describe('i', 'Number of ID')
    .option('name').alias('n', 'name').nargs('n', 1).describe('n', 'Name of character')
    .option('status').alias('st', 'status').nargs('st', 1).describe('st', 'Status: alive or dead')
    .option('species').alias('sp', 'species').nargs('sp', 1).describe('sp', 'Species of character(e.g. Human)')
    .option('type').alias('t', 'type').nargs('t', 1).describe('t', 'Type')
    .option('gender').alias('g', 'gender').nargs('g', 1).describe('g', 'Gender: male or female')
    .option('origin').alias('o', 'origin').nargs('o', 1).describe('o', 'Origin name (e.g. Earth)')
    .option('location').alias('l', 'location').nargs('l', 1).describe('l', 'Location name(e.g. Earth)')
    .help('h').alias('h', 'help')
    .epilogue('Created by Dzmitry Karneyenka')
    .argv

function second() {
    const keys = ['id', 'name', 'species', 'status', 'type', 'gender', 'origin', 'location'];
    let result = '{';
    keys.forEach((el) => {
        result += typeof (args[el]) === 'undefined' ? '' : '\"' + el + '\":\"' + args[el] + '\",';
    });
    return JSON.parse(result.slice(0, -1) + '}');
}
finder.main(second());




