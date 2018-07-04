# chars_app version 1.0.0 ([AT Lab#19])

The application finds a character with entered properties on [rickandmortyapi.com](https://rickandmortyapi.com/).<br>
[Data base of all characters as json data](https://rickandmortyapi.com/api/character/)

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

### Available options for filtering:

* --version        Show version number                                 [boolean]
* --id, -i         Number of ID
* --name, -n       Name of character
* --status, --st   Status: alive or dead
* --species, --sp  Species of character(e.g. Human)
* --type, -t       Type
* --gender, -g     Gender: male or female
* --origin, -o     Origin name (e.g. Earth)
* --location, -l   Location name (e.g. Earth)
* --help, -l       Show help                                           [boolean]

### Note

The filter finds a full match id, but a partial match for  other options.<br> In addition it compares with ignoring case. 

### Examples:
`node index.js --name rick --status dead --gender male --location 'Citadel of Ricks'`<br>
`node index.js --id 45`<br>
`node index.js --name rick --status dead`<br>
`node index.js --status dead --location 'Citadel of Ricks`<br>
`node index.js --gender male --location 'Citadel of Ricks`<br>

	
## Author 

### Dzmitry_Karneyenka, Republic of Belarus, Minsk
