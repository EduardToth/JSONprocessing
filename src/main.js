const fs = require('fs');
const lib = require('./FinalJSGenerator');
const keyLabel = require( './KeyLabelModule' );
const utility = require('./UtilityModule');

/** The main function is only used
 * 
 */
function main() {

    fs.writeFile("././Output/metaTranslator.js", lib.finalFormat(utility.parseJSONFile('./Input/plugin/metaTranslations/model.json') ), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    fs.writeFile("././Output/sisenseKeys.json", keyLabel.createKeyLabelJSON('./Input/plugin/metaTranslations/keyLabelInput.json'), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
    
}

main();