const firstJSON = require('./dashboardNamesDuplications');
const secondJSON = require('./sisenseTranslationsJSONGenerator');
const jsonminify = require('jsonminify');
const utility = require('./utilityModule');
module.exports = {
  finalFormat,
};


/** The final output have to be a javascript file, which will contain the translation JSON and the duplication JSON
 *
 * @param {JSON} model
 * @return {String}
 * @public
 */
function finalFormat( model ) {
  const finalFormat = 'prism.run([\'$q\', \'$http\', function ($q, $http) {\n' +
        '   /* eslint-disable no-unused-vars*/\n' +
        '   /* eslint-disable max-len */\n' +
        '   /* Translations definition - start */\n' +
        '   let translationsGlobal = \n' +
        jsonminify(firstJSON.createDuplicationJSON(model) ) + ';\n' +
        ' let translations = \n' +
        jsonminify(secondJSON.createTranslationJSON(model) ) + ';\n}' +
        '' +
        '' +
        '])\n' +
        '  /*' + utility.dateOfProgramExecution() + '*/\n' +
        '  /* Translations definition - end */';
  return finalFormat;
}
