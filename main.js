const fs = require('fs');
const lib = require('./FinalJSGenerator');
const utility = require('./UtilityModule');

/** The main function is only used
     */
function main() {
    let rawData = fs.readFileSync('plugin/metaTranslations/model.json');
    if (typeof rawData === 'undefined') {
        console.log('unfound file');
    } {
        try {
           
        } catch (e) {
            console.log(e);
        }
    }

     let model = JSON.parse(rawData);
            fs.writeFile("test.js", lib.finalFormat( utility.parseJSONFile( 'plugin/metaTranslations/model.json') ), function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
}

main();