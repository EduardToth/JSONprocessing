const fs = require('fs');

module.exports = {
  generateSpaces,
  parseJSONFile,
  dateOfProgramExecution,
  accessValueInJSON,
  createUnderstandableErrorMessage,
};

/** This function will return a string will a number of "big spaces" (five simple spaces). The function will be used for indentation
 * @param {Number} nrBigSpaces
 * @return {String}
 * @public
 */
function generateSpaces(nrBigSpaces) {
  let text = '';
  for (let i = 0; i < nrBigSpaces; i++) {
    text += '     ';
  }
  return text;
}

/** This function will read a JSON from a file and also will show an error message when it won't be able to read the JSON
 * @param {String} path  This will be the path to the JSON file
 * @return {JSON}
 * @public
 */
function parseJSONFile( path ) {
  const rawData = fs.readFileSync( path );
  if (typeof rawData === 'undefined') {
    throw Error(`I could not read this file '${path}'`);
  }

  let modelData;

  try {
    modelData = JSON.parse( rawData );
  } catch ( e ) {
    throw e;
  }

  return modelData;
}

/** This function will return a string with the date of the execution of the project
 *
 * @return {String}
 * @public
 */
function dateOfProgramExecution() {
  return 'This file was created at: ' + Date() + '';
}

/** The meaning of this function is simple. It will be used to access a value in a JSON using a key. The function will throw an error if
 * the doesn't exist in the JSON
 *@param {JSON} model
 *@param {String} key
 *@param {Boolean} isEnglishModel  This parameter will tell me if the model is a JSON which will be used from translations into english or
 * from translations to another language. I found it necessary to do this, because there are situations when the I can't find a key in a "english model"
 * and to threat that case in completely different manner
 * @return {String}
 * @public
 */
function accessValueInJSON(model, key, isEnglishModel) {
  if (model[key] !== undefined) {
    return model[key];
  } else {
    throw isEnglishModel ? Error('en/' + key) : Error('la/' + key);
  }
}

/** There are situations when the program will have to create errors when unfound keys appears. This function will be used to create
 * error messages easily
 *@param {String} message
 *@param {String} path
 * @return {String}
 * @public
 */
function createUnderstandableErrorMessage( message, path = 'input/plugin/translatedFiles/en/supoervisor.json') {
  // return 'I cannot find this key: ' + message.substring(3) + ' in this file: ' + path;
  return `I cannot find this key '${message.substring( 3 )}' in this file '${path}'`;
}
