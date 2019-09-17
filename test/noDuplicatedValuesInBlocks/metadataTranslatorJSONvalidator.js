const utility = require('./utilityModule');
const partialPathForLanguageModels = './././input/labels-supervisor/';
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

module.exports = {
  isInputPreparedForSisenseTranslationsgeneration,
};

/** The purpose of this function is to copy the elements of the source array to the destination array
 * @param {Array} destination
 * @param {Array} source
 * @return {undefined}
 * @private
 */
function arrayCopy(destination, source) {
  for (let i=0; i < source.length; i++) {
    destination.push( source[i]);
  }
}

/** The purpose of this function is to fund all the keys in the languageModel which starts with the partialKey. After this, the function will behave as the iterateInnerArray.
 * @param {String} partialKey
 * @param {JSON} languageModel
 * @param {Map} versionsMap
 * @return {Map}
 * @private
 */
function resolveUnfoundKeyException(partialKey, languageModel, versionsMap) {
  Object.keys( languageModel ).forEach( (key ) => {
    if ( key.startsWith( partialKey ) ) {
      const translation = languageModel[key];
      if ( versionsMap.has( translation ) ) {
        versionsMap.get( translation ).push( key );
      } else {
        versionsMap.set( translation, [key]);
      }
    }
  });
  return versionsMap;
}

/** This function will iterate an inner array of the metadataTranslatorModel.json. An inner array means a value of the JSON that is in a form of Array
 * @param {Array} innerArray
 * @param {JSON} languageModel
 * @return {Map}
 * @private
 */
function iterateInnerArray(innerArray, languageModel) {
  let versionsMap = new Map();

  Object.keys( innerArray ).forEach( ( key ) => {
    const translation = languageModel[innerArray[key]];
    if ( translation ) {
      if ( versionsMap.has( translation ) ) {
        versionsMap.get( translation ).push( innerArray[key] );
      } else {
        versionsMap.set(translation, [innerArray[key]] );
      }
    } else {
      versionsMap = resolveUnfoundKeyException(innerArray[key], languageModel, versionsMap );
    }
  });
  return versionsMap;
}

/** The purpose of this function is to start the validation of the translated files from the input in an inner object from the metadataTranslatorModel.json.
 * @param {JSON} valueObject
 * @param {JSON} languageModel
 * @return {Array}
 * @private
 */
function iterateInnerObject(valueObject, languageModel) {
  const resultArray = [];

  Object.keys( valueObject).forEach( (key) => {
    const versionsMap = iterateInnerArray(valueObject[key], languageModel);
    resultArray.push( versionsMap );
  });

  return resultArray;
}

/** The purpose of this function is to start the validation of the translated files from the input
 * @param {JSON} model
 * @param {JSON} languageModel
 * @return {Array}
 * @private
 */
function iterateModelJSON(model, languageModel) {
  const resultArray = [];

  Object.keys( model ).forEach( ( key ) =>{
    if (!Array.isArray( model[key] ) ) {
      if (typeof model[key] === 'object') {
        const versionsMaps = iterateInnerObject(model[key], languageModel);
        arrayCopy(resultArray, versionsMaps);
      }
    } else {
      const versionsMaps = iterateInnerArray(model[key], languageModel);
      resultArray.push( versionsMaps );
    }
  });
  return resultArray;
}

/** The purpose of this function is to format an array as a string in a proper form.
 * @param {Array} arr
 * @return {String}
 * @private
 */
function formatArrayAsString( arr ) {
  let text = '';
  for (let i=0; i < arr.length; i++) {
    text += utility.generateSpaces( 1) + '\'' + arr[i] + '\'\n';
  }
  return text;
}

/** The purpose of this function is to create an error message. The function will return an empty string if there are no issues.
 * @param {Array} resultArray  This one will be an array of maps
 * @param {String} pathToLanguageModel
 * @return {String}
 * @private
 */
function createErrorMessage(resultArray, pathToLanguageModel) {
  let text = '';
  /** This function is created to help the another function to perform its task.
   * @param {String} value
   * @param {String} key
   * @return {undefined} The function does not have to return anything.
   * @private
   */
  function processInformationFromMap(value, key) {
    if ( value.length > 1) {
      text += `This value: '${key}' from this file '${pathToLanguageModel}' appears as value for the following keys:\n${formatArrayAsString( value )}` +
      'Make sure that none of these keys have the same value. Otherwise, the output file cannot be generated\n\n';
    }
  }
  for (let i=0; i < resultArray.length; i++) {
    resultArray[i].forEach( processInformationFromMap );
  }
  return text;
}

/** This function is created to find out if there are duplicated values in the translated files from the input. The function will return an error message
 * if there are duplicated values and an empty string otherwise
 * @param {JSON} model
 * @return {String}
 * @public
 */
function isInputPreparedForSisenseTranslationsgeneration( model ) {
  let resultArray = [];
  let resultString = '';
  for (let i=0; i < languages.length; i++) {
    console.log(  partialPathForLanguageModels + languages[i] + '/supervisor.json' );
    const languageModel = utility.parseJSONFile( partialPathForLanguageModels + languages[i] + '/supervisor.json');
    resultArray = iterateModelJSON(model, languageModel);
    resultString += createErrorMessage(resultArray, partialPathForLanguageModels + languages[i] + '/supervisor.json');
  }
  return resultString;
}


