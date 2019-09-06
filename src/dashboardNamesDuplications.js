/**
 * This module generate the JSON that contains the duplicate names of the default dashboards : Production Analitycs
 *
 */
const utility = require('./utilityModule');

const pathForEnglishModel = '././input/translatedFiles/en/supervisor.json';
const partialPathForLanguageModels = '././input/translatedFiles/';
module.exports = {
  createDuplicationJSON,
};
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];
/** This function will create a String object which will represent a JSON with all the variations for the dashboard key
 *
 * @param {Array} variations
 * @param {JSON} languageVersion
 * @param {JSON} englishVersion
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function addAllVariations(variations, languageVersion, englishVersion, nrBigSpaces) {
  let text = utility.generateSpaces(nrBigSpaces) + '"' + englishVersion + '" : "' + languageVersion + '",\n';

  for (let i = 0; i < variations.length; i++) {
    text += utility.generateSpaces(nrBigSpaces) + '"' + englishVersion + variations[i] + '" : "' + languageVersion + variations[i] + '",\n';
  }

  return text.substr(0, text.length - 2);
}

/** This function processes the value array of the "dashboard" key in the JSON
 *
 * @param {Array} variations
 * @param {Array} arr
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function processArray(variations, arr, languageModel, englishModel, nrBigSpaces) {
  let innerJSON = '{\n';
  for (let i = 0; i < arr.length - 1; i++) {
    innerJSON += addAllVariations(variations, utility.accessValueInJSON(languageModel, arr[i], false),
        utility.accessValueInJSON(englishModel, arr[i], true), nrBigSpaces);
  }
  innerJSON += addAllVariations(variations, utility.accessValueInJSON(languageModel, arr[arr.length - 1], false),
      utility.accessValueInJSON(englishModel, arr[arr.length - 1], true), nrBigSpaces);

  innerJSON += '\n' + utility.generateSpaces(nrBigSpaces) + '}';

  return innerJSON;
}

/** This function has to iterate the model JSON and create a String in JSON format using it and the language models
 *
 * @param {Array} variations
 * @param {String} principalKey
 * @param {Array} arr
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @param {Boolean} ok
 * @return {String}
 * @private
 */
function createRankTwoJSON(variations, principalKey, arr, languageModel, englishModel, nrBigSpaces, ok) {
  let output = '';

  if (ok) {
    output = '  "' + principalKey + '" : ';
  } else {
    output = utility.generateSpaces(nrBigSpaces) + '"' + principalKey + '": ';
  }
  output += processArray(variations, arr, languageModel, englishModel, nrBigSpaces + 1);

  return output;
}

/** This function has to iterate the model JSON and create a String in JSON format using it and the language models
 *
 * @param {Array} variations
 * @param {JSON} model
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function iterateModelJSON(variations, model, languageModel, englishModel, nrBigSpaces) {
  let partialString = '  {\n';

  for (const itr in model) {
    if (itr == 'dashboards') {
      partialString += createRankTwoJSON(variations, itr, model[itr], languageModel, englishModel, nrBigSpaces + 1, false) + ',\n';
    }
  }
  return partialString.substring(0, partialString.length - 2) + '\n' + utility.generateSpaces(nrBigSpaces + 1) + '}';
}

/** This function will generate a JSON which will contain all the duplications of the dashboard names with their translations
 *
 * @param {JSON} model
 * @return {String}
 * @public
 */
function createDuplicationJSON(model) {
  const variations = [
    '(1)',
    '(2)',
    '(3)',
    '(4)',
    '(1) (1)', '(1) (2)', '(1) (3)', '(1) (4)',
    '(2) (1)', '(2) (2)', '(2) (3)', '(2) (4)',
    '(3) (1)', '(3) (2)', '(3) (3)', '(3) (4)',
    '(4) (1)', '(4) (2)', '(4) (3)', '(4) (4)',
  ];

  let finalJSON = '';


  const englishModel = utility.parseJSONFile(pathForEnglishModel );

  for (let i = 0; i < languages.length - 1; i++) {
    const languageModel = utility.parseJSONFile(partialPathForLanguageModels + languages[i] + '/supervisor.json');
    try {
      finalJSON += '  "' + languages[i] + '": ' + iterateModelJSON(variations, model, languageModel, englishModel, 1) + ',\n';
    } catch ( e ) {
      throw (e.message.substring(0, 2) == 'en')? Error(utility.createUnderstandableErrorMessage( e.message))
          : Error(utility.createUnderstandableErrorMessage(e.message, partialPathForLanguageModels + languages[i] + '/supervisor.json'));
    }
  }


  languageModel = utility.parseJSONFile(partialPathForLanguageModels + languages[languages.length - 1] + '/supervisor.json');

  try {
    // prettier-ignore
    // eslint-disable-next-line max-len
    finalJSON += '  "' + languages[languages.length - 1] + '": ' + iterateModelJSON(variations, model, languageModel, englishModel, 1);
  } catch ( e ) {
    throw (e.substring(0, 2) == 'en')? Error(utility.createUnderstandableErrorMessage( e.message))
        : Error(utility.createUnderstandableErrorMessage(e.message, partialPathForLanguageModels + languages[languages.length - 1] + '/supervisor.json'));
  }
  return '{\n' + finalJSON + '\n}';
}
