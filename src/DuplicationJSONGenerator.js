const fs = require('fs');
const utility = require('./UtilityModule');

var languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

module.exports = {
    createDuplicationJSON
};

function addAllVariations(variations, languageVersion, englishVersion, nrSpaces) {
    var text = utility.generateSpaces(nrSpaces) + '"' + englishVersion + '" : "' + languageVersion + '",\n';

    for (var i = 0; i < variations.length; i++) {
        text += utility.generateSpaces(nrSpaces) + '"' + englishVersion + variations[i] + '" : "' + languageVersion + variations[i] + '",\n';
    }

    return text.substr(0, text.length - 2);
}

function processArray(variations, arr, languageModel, englishModel, nrSpaces) {

    let innerJSON = '{\n';
    for (var i = 0; i < arr.length - 1; i++)
        if (languageModel[arr[i]]) {
            innerJSON += addAllVariations(variations, languageVersion, englishversion, nrSpaces);
        }

    if (languageModel[arr[arr.length - 1]])
        innerJSON += addAllVariations(variations, languageModel[arr[arr.length - 1]], englishModel[arr[arr.length - 1]], nrSpaces);

    innerJSON += '\n' + utility.generateSpaces(nrSpaces) + '}';

    return innerJSON;
}

 /** This function has to iterate the model JSON and create a String in JSON format using it and the language models
     *
     * @param {String[]} variations
     * @param {JSON} model
     * @param {JSON} languageModel
     * @param {JSON} englishModel
     * @param {Number} nrBigSpaces
     * @private
     */
function createRankTwoJSON(variations, principalKey, arr, languageModel, englishModel, nrBigSpaces, ok) {
    let output = '';

    if (ok) {
        output = '  "' + principalKey + '" : ';
    }
    else {
        output = utility.generateSpaces(nrBigSpaces) + '"' + principalKey + '": ';
    }

    output += processArray(variations, arr, languageModel, englishModel, nrBigSpaces + 1);

    return output;
}

 /** This function has to iterate the model JSON and create a String in JSON format using it and the language models
     *
     * @param {String[]} variations
     * @param {JSON} model
     * @param {JSON} languageModel
     * @param {JSON} englishModel
     * @param {Number} nrBigSpaces
     * @returns {String}
     * @private
     */
function iterateModelJSON(variations, model, languageModel, englishModel, nrBigSpaces) {
    let partialString = '  {\n';

    for (var itr in model) {
        if (itr == "dashboards") {
            partialString += createRankTwoJSON(variations, itr, model[itr], languageModel, englishModel, nrBigSpaces + 1, false) + ',\n';
        }
    }
    return partialString.substring(0, partialString.length - 2) + '\n' + utility.generateSpaces(nrBigSpaces + 1) + '}';
}

 /** This function will generate a JSON which will contain all the duplications of the dashboard names with their translations
     *
     * @param {JSON} model
     * @returns {String}
     * @public
     */
function createDuplicationJSON(model) {

    var variations = [
        "(1)",
        "(2)",
        "(3)",
        "(4)",
        "(1) (1)", "(1) (2)", "(1) (3)", "(1) (4)",
        "(2) (1)", "(2) (2)", "(2) (3)", "(2) (4)",
        "(3) (1)", "(3) (2)", "(3) (3)", "(3) (4)",
        "(4) (1)", "(4) (2)", "(4) (3)", "(4) (4)"
    ];

    let finalJSON = '';


    let englishModel = utility.parseJSONFile( '././Input/translatedFiles/en/supervisor.json' );

    for (var i = 0; i < languages.length - 1; i++) {
        let languageModel = utility.parseJSONFile('././Input/translatedFiles/' + languages[i] + '/supervisor.json');
        finalJSON += '  "' + languages[i] + '": ' + iterateModelJSON(variations, model, languageModel, englishModel, 1) + ",\n";

    }


    languageModel = utility.parseJSONFile( '././Input/translatedFiles/' + languages[languages.length - 1] + '/supervisor.json' );

    finalJSON += '  "' + languages[languages.length - 1] + '": ' + iterateModelJSON(variations, model, languageModel, englishModel, 1);

    return '{\n' + finalJSON + '\n}';

}