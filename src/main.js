const fs = require('fs');
const metadataTranslatorGenerator = require('./metadataTranslatorGenerator');
const widgetLibraryKeysGenerator = require( './widgetLibraryKeysGenerator' );
const utility = require('./utilityModule');
const verifyInput = require('../test/noDuplicatedValuesInBlocks/translatedFilesValidator');
const outputMetadataTranslatorPath = '././output/metadataTranslator.js';
const modelJSONPath = '././input/models/metadataTranslatorModel.json';
const outputWidgetLibraryKeysPath = '././output/widgetLibraryKeys.json';
const inputWidgetLibraryKeysPath = '././input/models/widgetLibraryKeysModel.json';
/** The main function is only used
 *@return {undefined}
 */
function main() {
  // This statement will verify the input. If the input is not valid, the function will throw an error and the output files will not be generated
  verifyInput.verify();

  const modelData = utility.parseJSONFile(modelJSONPath);

  const resultedJSON = metadataTranslatorGenerator.duplicationJSONAndTranslationJSON(modelData);
  //  console.log("MetadataTranslator successfully generated the required files in memory.");

  fs.writeFile(outputMetadataTranslatorPath, resultedJSON, function(err) {
    if (err) {
      throw err;
    }
  }
  );
  console.log('MetdataTranslatorGenerator successfully run. Output written to: ' + outputMetadataTranslatorPath);


  fs.writeFile(outputWidgetLibraryKeysPath,
      widgetLibraryKeysGenerator.createKeyLabelJSON(
          inputWidgetLibraryKeysPath),
      function(err) {
        if (err) {
          return console.log(err);
        }

        console.log('widgetLibraryKeys.json generated!');
      });
}


main();
