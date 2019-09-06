const fs = require('fs');
const lib = require('./metadataTranslatorGenerator');
const keyLabelGenarator = require( './widgetLibraryKeysGenerator' );
const utility = require('./utilityModule');
const validate = require('./translatedFilesValidation');
const metadataTranslatorPath = '././output/metadataTranslator.js';
const modelJSONPath = '././input/plugin/metaTranslations/model.json';
const inputWidgetLibraryKeysPath = '././output/widgetLibraryKeys.json';
const outputWidgetLibraryKeysPath = '././input/plugin/metaTranslations/widgetLibraryKeysModel.json';

/** The main function is only used
 *@return {undefined}
 */
function main() {
  try {
    fs.writeFile(metadataTranslatorPath,
        lib.finalFormat(utility.parseJSONFile(
            modelJSONPath)),
        function(err) {
          if (!err) {
            console.log('metadataTranslator.js generated!');
          } else {
            return console.log(err);
          }
        });
  } catch ( e ) {
    console.error( e.message );
  }


  fs.writeFile(inputWidgetLibraryKeysPath,
      keyLabelGenarator.createKeyLabelJSON(
          outputWidgetLibraryKeysPath),
      function(err) {
        if (err) {
          return console.log(err);
        }

        console.log('widgetLibraryKeys.json generated!');
      });
}


try {
  validate.validateTranslatedFiles();
  main();
} catch ( e ) {
  console.error( e.message );
}
