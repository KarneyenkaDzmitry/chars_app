# chars_app version 1.0.0 ([AT Lab#19])

The application finds a character with entered properties on [rickandmortyapi.com](https://rickandmortyapi.com/).<br>

## Implementation

### Dependencies

The application needs to have the following dependencies:
1. npm --version 6.1.0
2. node --version 8.11.3

### Deploy

#### $ npm install

Before start the program is supposed to run the command [npm install].<br> 
It downloads needed modules and prepars the programm for start.<br>
There is a list of modules and their versions:
* yargs      version  ^11.0.0
* request    version  ^2.87.0
* request-promise-native version  ^1.0.5

## Usage

#### Available options for filtering:

* --version        Show version number                                 [boolean]
* --id, -i         Number of ID
* --name, -n       Name of character
* --status, --st   Status: alive or dead
* --species, --sp  Species of character(e.g. Human)
* --type, -t       Type
* --gender, -g     Gender: male or female
* --origin, -o     Origin(e.g. Earth)
* --location, -l   Location(e.g. Earth)
* --help, -l       Show help                                           [boolean]



Examples:

	index.js -n Alex

	index.js --st Alive



	

## Author 

### Dzmitry_Karneyenka, Republic of Belarus, Minsk
