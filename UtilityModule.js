const fs = require('fs');

module.exports = {
    generateSpaces,
    parseJSONFile
};

 /** This function will return a string will a number of "big spaces" (five simple spaces). The function will be used for indentation
     * @param {Integer} nrBigSpaces
     * @returns {String}
     * @public
     */
function generateSpaces(nrBigSpaces) {
    let text = '';
    for (var i = 0; i < nrBigSpaces; i++)
        text += '     ';
    return text;
}

 /** This function will read a JSON from a file and also will show an error message when it won't be able to read the JSON
     * @param {String} path  This will be the path to the JSON file
     * @returns {JSON} 
     * @public
     */
function parseJSONFile( path ) {
    let rawData = fs.readFileSync( path );
    if(typeof rawData === 'undefined'){
        console.log('I cannot find this file: ' + path);
    }

    let modelData;

    try{
    modelData = JSON.parse( rawData );
    }catch( e )
    {
        console.log( e );
    }

    console.log( modelData );
    return modelData;
}
