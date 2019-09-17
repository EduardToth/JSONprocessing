const metadataTranslatorValidation = require('./metadataTranslatorJSONvalidator');
const utility = require('./utilityModule');
const pathForModelJSON = './././input/models/metadataTranslatorModel.json';
module.exports = {
  verify,
};

/** The purpose of this function is to find out if the translated files from the input have or not duplicated values.
 * If it is so, an error message is thrown.
 * @return {undefined}
 * @public
 */
function verify() {
  const model = utility.parseJSONFile( pathForModelJSON );
  let text = '';
  if ( (text = metadataTranslatorValidation.isInputPreparedForSisenseTranslationsgeneration( model ) ).length > 0 ) {
    throw Error( text );
  }
}

verify();
