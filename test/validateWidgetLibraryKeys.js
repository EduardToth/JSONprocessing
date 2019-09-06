const fs = require('fs');

let rawdata = fs.readFileSync('././output/widgetLibraryKeys.json');
let sisenseJSON = JSON.parse( rawdata );

console.log( 'Checking if widgetLibraryKeys.json is valid....' );
if( sisenseJSON ) {
    console.log( 'widgetLibraryKeys.json is valid !' );
}else {
    console.log('ERROR: parsing the widgetLibraryKeys.json file as a JSON failed');
}