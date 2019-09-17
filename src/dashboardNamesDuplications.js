const utility = require('./utilityModule');

const pathForEnglishModel = '././input/labels-supervisor/en/supervisor.json';
const partialPathForLanguageModels = '././input/labels-supervisor/';
module.exports = {
  createDuplicationJSON,
};
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

/**This function will add all variations to a translation and also to the original form
 * @param {Array} variations
 * @param {JSON} languageVersion
 * @param {JSON} englishVersion
 * @param {JSON} outputJSON
 * @returns {JSON}
 */
function addAllVariations(variations, languageVersion, englishVersion, outputJSON) {
  outputJSON[englishVersion] = languageVersion;

  for (let i = 0; i < variations.length; i++) {
    outputJSON[englishVersion + variations[i]] = languageVersion + variations[i];
  }

  return outputJSON;
}

/**This function will process the value of the input JSON when it will be an array and will createa JSON as result
 * @param {Array} variations
 * @param {Array} arr
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @return {JSON}
 * @private
 */
function processInnerArray(variations, arr, languageModel, englishModel) {
  let innerJSON = {};
  for (let i = 0; i < arr.length; i++) {
    innerJSON = addAllVariations(variations, utility.accessValueInJSON(languageModel, arr[i], false),
        utility.accessValueInJSON(englishModel, arr[i], true), innerJSON);
  }

  return innerJSON;
}

/**This function will build an object which will be the body of the value in the ouput JSON
 * @param {Array} variations
 * @param {String} principalKey
 * @param {Array} arr
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @return {JSON}
 * @private
 */
function createInnerObject(variations, principalKey, arr, languageModel, englishModel) {
  const outputJSON = {};
  outputJSON[principalKey] = processInnerArray(variations, arr, languageModel, englishModel);
  return outputJSON;
}

/**This function will iterate the model JSON and will find the important keys
 *
 * @param {Array} variations
 * @param {JSON} model
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @returns {JSON}
 * @private
 */
function iterateModelJSON(variations, model, languageModel, englishModel) {
  let partialJSON;
  for (const itr in model) {
    if (itr === 'dashboards') {
      partialJSON = createInnerObject(variations, itr, model[itr], languageModel, englishModel);
    }
  }
  return partialJSON;
}

/**This function will be used to return a JSON in string format which will represent the "duplication JSON"
 * @param {JSON} model
 * @returns {string}
 */
function createDuplicationJSON( model ) {
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

  const finalJSON = {};
  const englishModel = utility.parseJSONFile( pathForEnglishModel );
  for (let i=0; i < languages.length; i++) {
    const languageModel = utility.parseJSONFile(partialPathForLanguageModels + languages[i] + '/supervisor.json');
    try {
      finalJSON[languages[i]] = iterateModelJSON( variations, model, languageModel, englishModel);
    } catch ( e ) {
      throw (e.message.substring(0, 2) == 'en')? Error(utility.createUnderstandableErrorMessage( e.message))
          : Error(utility.createUnderstandableErrorMessage(e.message, partialPathForLanguageModels + languages[i] + '/supervisor.json'));
    }
  }
  return JSON.stringify( finalJSON );
}

