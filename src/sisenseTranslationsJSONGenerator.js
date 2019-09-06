/**
 * This module generate the JSON that contains the translated labels for widget names, formulas, fields, etc ... used by Sisense
 *
 */

const utility = require('./utilityModule');

module.exports = {
  createTranslationJSON,
};

const pathForEnglishModel = '././input/translatedFiles/en/supervisor.json';
const partialPathForLanguageModels = '././input/translatedFiles/';

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

/** This function will return a String which will represent a JSON. It will be resulted by processing the array of the "English keys"
 *
 * @param {Array} englishKeys
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function processEnglishKeys(englishKeys, languageModel, englishModel, nrBigSpaces) {
  let innerJSON = '{\n';
  for (let i = 0; i < englishKeys.length - 1; i++) {
    if (languageModel[englishKeys[i]]) {
      innerJSON += utility.generateSpaces(nrBigSpaces) + '"' + utility.accessValueInJSON(englishModel, englishKeys[i], true) +
          '" : "' +utility.accessValueInJSON(languageModel, englishKeys[i], false)+ '",\n';
    } else {
      innerJSON += resolveUnfoundKeyException(englishKeys[i], languageModel, englishModel, nrBigSpaces);
    }
  }

  if ( languageModel[englishKeys[englishKeys.length - 1]] ) {
    innerJSON += utility.generateSpaces( nrBigSpaces ) + '"' +
        englishModel[englishKeys[englishKeys.length - 1]] + '" : "' + languageModel[englishKeys[englishKeys.length - 1]] + '"';
  } else {
    innerJSON += resolveUnfoundKeyException(englishKeys[englishKeys.length - 1], languageModel, englishModel, nrBigSpaces);
  }

  innerJSON += '\n' + utility.generateSpaces( nrBigSpaces ) + '}';

  return innerJSON;
}

/** In some of the cases the inner keys in the JSON will be only partial keys in the model JSON. In this case I will have to iterate all the language JSON and to find out
 * if the partial key is a component of the complete key and it also starts with that component
 *
 * @param {Array} innerArray
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function processInnerArray(innerArray, languageModel, englishModel, nrBigSpaces) {
  let text = '{\n';
  let i=0;
  for ( ; i < innerArray.length - 1; i++) {
    // This line could end with exception if a key value in not found
    text += utility.generateSpaces( nrBigSpaces ) + '"' + utility.accessValueInJSON(languageModel, innerArray[i], false)
        + '" : "' + utility.accessValueInJSON(englishModel, innerArray[i], true) + '",\n';
  }

  if (languageModel[innerArray[i]] === undefined) {
    throw Error(`la/${innerArray[i]}`);
  }

  if (englishModel[innerArray[i]] === undefined) {
    throw Error(`en/${innerArray[i]}`);
  }
  text += utility.generateSpaces( nrBigSpaces ) + '"' + languageModel[innerArray[i]] + '" : "' + englishModel[innerArray[i]] + '"\n';
  text += utility.generateSpaces( nrBigSpaces ) + '},';

  return text;
}

/** Sometimes the value of a key in the model JSON is not an array of keys, but an inner JSON. This function will handle the particular case
 *
 * @param {JSON} innerObject
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function processInnerObject(innerObject, languageModel, englishModel, nrBigSpaces) {
  let text = '{\n';

  Object.keys(innerObject).forEach((key) => {
    text += utility.generateSpaces( nrBigSpaces ) + '"' + utility.accessValueInJSON(englishModel, key, true) +
        '" : ' + processInnerArray(innerObject[key], languageModel, englishModel, nrBigSpaces + 1) + '\n';
  });

  text = text.substring(0, text.length - 2) + '\n';
  return text + utility.generateSpaces( nrBigSpaces ) + '}';
}

/** In some of the cases the inner keys in the JSON will be only partial keys in the model JSON. In this case I will have to iterate all the language JSON and to find out
 * if the partial key is a component of the complete key and it also starts with that component
 *
 * @param {String} partialKey
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function resolveUnfoundKeyException(partialKey, languageModel, englishModel, nrBigSpaces) {
  let text = '';
  let count = 0;
  for ( const itr in languageModel ) {
    if ( itr.startsWith( partialKey ) ) {
      // This operation could end with exception
      count++;
      text += utility.generateSpaces( nrBigSpaces ) + '"' + utility.accessValueInJSON(englishModel, itr, true)
          + '" : ' + '"' + utility.accessValueInJSON(languageModel, itr, false) + '",\n';
    }
  }

  if (count == 0) {
    throw Error('la/' + partialKey);
  }
  text = text.substring(0, text.length - 2) + '\n';
  return text;
}

/** Every key in the final JSON (like en, fr, ja...) will contain a value, also JSON which will contain words and expressions in English and its translations in the required languages
 *
 * @param {String} principalKey
 * @param {Array} englishKeys
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @param {Boolean} specialIndentationRequired
 * @return {String}
 * @private
 */
function createPrincipalValueJSON(principalKey, englishKeys, languageModel, englishModel, nrBigSpaces, specialIndentationRequired) {
  let output = '';
  if ( specialIndentationRequired ) {
    output = '  "' + principalKey + '":';
  } else {
    output = utility.generateSpaces( nrBigSpaces ) + '"' + principalKey + '": ';
  }

  output += processEnglishKeys(englishKeys, languageModel, englishModel, nrBigSpaces + 1 );

  return output;
}

/** Sorts the classes to be instantiated.
 *
 * @param {String} keyName
 * @param {JSON}   innerObject
 * @param {String} languageModel
 * @param {String} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function createNestedValueJSON( keyName, innerObject, languageModel, englishModel, nrBigSpaces ) {
  return utility.generateSpaces( nrBigSpaces ) + '"' + keyName + '": ' +
      processInnerObject(innerObject, languageModel, englishModel, nrBigSpaces + 1 ) + ',\n';
}

/**  This function will iterate the JSON received as a parameter and will return a more complex
 *  JSON which will be a component of the final one that will be returned through the driver function of this file
 *
 * @param {JSON} model
 * @param {JSON} languageModel
 * @param {JSON} englishModel
 * @param {Number} nrBigSpaces
 * @return {String}
 * @private
 */
function iterateModelJSON(model, languageModel, englishModel, nrBigSpaces) {
  let partialString = '  {\n';

  for (const itr in model) {
    if (itr != 'dashboards') {
      if (!Array.isArray(model[itr])) {
        if (typeof model[itr] === 'object') {
          partialString += createNestedValueJSON(itr, model[itr], languageModel, englishModel, nrBigSpaces + 1);
        }
      } else {
        partialString += createPrincipalValueJSON(itr, model[itr], languageModel, englishModel, nrBigSpaces + 1, false) + ',\n';
      }
    }
  }

  return partialString.substring(0, partialString.length - 2) + '\n' + utility.generateSpaces( nrBigSpaces ) + '}';
}

/** This function will return a String that will serve to translate the content of the webpage from English to other languages
 * @param {JSON} model  It will be a JSON that will contain the key for the equivalent translation in different languages
 * @return {String} it will be a String that will represent a JSON that for
 *   every category will contain as keys the words or expressions in English and as values the translations in the required languages
 * @public
 */
function createTranslationJSON( model ) {
  let finalJSON = '';

  // Here I read the english translation
  const englishModel = utility.parseJSONFile(pathForEnglishModel );

  // Here I iterate every language and I create the subJSONs JSONs
  for (let i = 0; i < languages.length - 1; i++) {
    const languageModel = utility.parseJSONFile( partialPathForLanguageModels + languages[i] + '/supervisor.json');
    try {
      finalJSON += '  "' + languages[i] + '": ' + iterateModelJSON(model, languageModel, englishModel, 1) + ',\n';
    } catch ( e ) {
      throw (e.message.substring(0, 2) == 'en')? Error(utility.createUnderstandableErrorMessage( e.message))
          : Error(utility.createUnderstandableErrorMessage(e.message,
              partialPathForLanguageModels + languages[i] + '/supervisor.json'));
    }
  }

  const languageModel = utility.parseJSONFile( partialPathForLanguageModels + languages[languages.length - 1] + '/supervisor.json');
  try {
    finalJSON += '  "' + languages[languages.length - 1] + '": ' + iterateModelJSON(model, languageModel, englishModel, 1);
  } catch ( e ) {
    throw (e.substring(0, 2) == 'en')? Error(utility.createUnderstandableErrorMessage( e.message))
        : Error(utility.createUnderstandableErrorMessage(e.message,
            partialPathForLanguageModels + languages[languages.length - 1] + '/supervisor.json'));
  }

  return '{\n' + finalJSON + '\n   }';
}


