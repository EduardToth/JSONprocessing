const fs = require('fs');

module.exports = {
  parseJSONFile,
  generateSpaces,
};
/** This function will read a JSON from a file and also will show an error message when it won't be able to read the JSON
 * @param {String} path  This will be the path to the JSON file
 * @return {JSON}
 * @public
 */
function parseJSONFile(path) {
  const rawData = fs.readFileSync(path);

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

