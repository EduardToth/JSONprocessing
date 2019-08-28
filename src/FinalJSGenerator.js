const firstJSON = require('./DuplicationJSONGenerator');
const secondJSON = require('./TranslationJSONGenerator');

module.exports = {
    finalFormat
};

/** The final output have to be a javascript file, which will contain the translation JSON and the duplication JSON
     *
     * @param {JSON} model 
	 * @returns {String}
     * @public
     */
function finalFormat( model ) {
    let finalFormat = "prism.run(['$q', '$http', function ($q, $http) {\n" +
        '   /* Translations definition - start */\n' +
        '   var translationsGlobal = \n' +
        firstJSON.createDuplicationJSON(model) + ';\n' +
        ' var translations = \n' +
        secondJSON.createTranslationJSON(model) + ';\n}\n' +
        '  /* Translations definition - end */';
    return finalFormat;
}