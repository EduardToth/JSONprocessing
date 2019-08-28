const utility = require('./UtilityModule');

module.exports = { 
    createKeyLabelJSON
};

/** This function will return a String which will represent a JSON. It will be resulted by processing the array of the "English keys"
 * 
     * @param {String} key
     * @param {String} value
	 * @param {Number} nrBigSpaces
     * @param {Boolean} isNecessarrySpacing  //This variable will be used only for indentation
	 * @returns {String}
     * @private
     */
function createInnerObject( key, value, nrBigSpaces, isNecessarrySpacing ) {
       let outputString = '';

       if( isNecessarrySpacing ) {
           outputString += utility.generateSpaces( nrBigSpaces ) + '{\n';
       }else{
           outputString += '{\n';
       }

       outputString += utility.generateSpaces( nrBigSpaces + 1 ) +  '"key": "' + key + '",\n';
       outputString += utility.generateSpaces( nrBigSpaces + 1 ) + '"label": "' + value + '"';
       
       outputString += '\n' + utility.generateSpaces( nrBigSpaces ) + '},\n';

       return outputString;
}

/** This function will help the createValueArray function to perform its task. Its purpose it's to reduce the complexity of the driver function
 * 
     * @param {String[]} englishKeys
     * @param {JSON} languageModel
     * @param {JSON} englishModel
	 * @param {Number} nrBigSpaces
	 * @returns {String}
     * @private
     */
function createValueArrayUtil(englishModel, partialValue, nrBigSpaces) {
     let outputString = '';
     var count = 0;
     for( var itr in englishModel ) {
         if( itr.startsWith( partialValue ) ) {
            count++ == 0? outputString += createInnerObject( itr, englishModel[ itr ], nrBigSpaces, false ) : outputString += createInnerObject( itr, englishModel[ itr ], nrBigSpaces, true );
             
         }
     }

     return outputString.substring(0, outputString.length - 2) + '\n';
}

/** This function will create the main value for every primary key in the input JSON
 * 
     * @param {JSON} englishModel    
     * @param {String[]} partialValueArray  This variable will pont to the partial keys in the input JSON
     * @param {Number} nrBigSpaces
	 * @returns {String}
     * @private
     */
function createValueArray(englishModel, partialValueArray, nrBigSpaces) {
     let outputString = '[';
     for( var i=0; i < partialValueArray.length; i++ ) {
         outputString += createValueArrayUtil(englishModel, partialValueArray[ i ], nrBigSpaces + 1);
     }
     return outputString + utility.generateSpaces( nrBigSpaces ) + '],\n';
}

/** This function will return a String which will represent a JSON. It will be resulted by processing the array of the "English keys"
 * 
	 * @param {String} inputPath This parameter is the path to the JSON file that will be processed
	 * @returns {String}  The output will be a string which will represent a JSON format
     * @public
     */
function createKeyLabelJSON( inputPath ) {

    let finalJSON = '';
    const keyLabelInputJSON = utility.parseJSONFile( inputPath );
    const englishModel = utility.parseJSONFile('././Input/translatedFiles/en/supervisor.json');

    for(var key in keyLabelInputJSON) {
             finalJSON += utility.generateSpaces( 1 ) + '"' + key + '": ' + createValueArray(englishModel, keyLabelInputJSON[ key ], 2);
    }

    if( finalJSON.length > 2 )
       finalJSON = finalJSON.substring( 0, finalJSON.length - 2 );
    return '{\n' + finalJSON + '\n}';
}