const utility = require('./utilityModule');
const translatedFilesPath = '././input/labels-supervisor';
module.exports = {
  validateTranslatedFiles,
};

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

/** This function receives a key and a value of a JSON and also the JSON where they belong. The function returns true if the value is unique and false otherwise
 *
 * @param {String} criticalKey
 * @param {String} criticalValue
 * @param {JSON} translationJSON
 * @return {Boolean}
 * @private
 */
function isUniqueValue(criticalKey, criticalValue, translationJSON) {
  let booleanResult = true;
  Object.keys( translationJSON ).forEach( ( key ) => {
    if (!key.startsWith('<<') && translationJSON[key] === criticalValue && criticalKey !== key) {
      booleanResult = false;
      console.log(`${translationJSON[key]}  ${criticalValue}  ${criticalKey}  ${key}`);
    }
  });
  return booleanResult;
}

/** This functions receives a JSON an it finds out if it has duplicated values that will harm the sisens algorithms. If it is so, the machine will throw an error, otherwise, it will return nothing
 *
 * @param {String} pathToTranslatedFiles
 * @return {undefined}
 * @private
 */
function validateJSON( pathToTranslatedFiles ) {
  const translationJSON = utility.parseJSONFile( pathToTranslatedFiles );
  Object.keys( translationJSON ).forEach( ( key ) => {
    if ( !isUniqueValue(key, translationJSON[key], translationJSON) ) {
      throw Error(`This value: '${translationJSON[key]}'
           appears two times in this path: '${pathToTranslatedFiles}'. This is a problem for the Sisense machine. Also values should be unique in the translated files`);
    }
  });
}

/** The purpose of this function is to find out if the translated files don't have duplicated values. If it doesn't so, the function will return an error, else it will return nothing (undefined).
 *
 * @return {undefined}
 * @public
 */
function validateTranslatedFiles() {
  for (let i=0; i < languages.length; i++) {
    pathToTranslatedFile = `${translatedFilesPath}/${languages[i]}/supervisor.json`;
    validateJSON( pathToTranslatedFile );
  }
}

validateTranslatedFiles();


