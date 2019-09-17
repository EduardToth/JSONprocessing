const firstJSON = require('./dashboardNamesDuplications');
const secondJSON = require('./sisenseTranslationsJSONGenerator');
const jsonminify = require('jsonminify');
const utility = require('./utilityModule');
module.exports = {
  duplicationJSONAndTranslationJSON,
};


/** The final output have to be a javascript file, which will contain the translation JSON and the duplication JSON
 *
 * @param {JSON} model
 * @return {String}
 * @public
 */
function duplicationJSONAndTranslationJSON( model ) {
  let duplicationJSON;
  let translationJSON;
  try {
    duplicationJSON = JSON.parse(firstJSON.createDuplicationJSON(model));
  } catch ( e ) {
    throw Error('The duplication JSON that the program generated in not valid JSON.');
  }

  try {
    translationJSON = JSON.parse(secondJSON.createTranslationJSON(model) );
  } catch ( e ) {
    throw Error('The translation JSON that the program generated is not a valid JSON');
  }

  const finalFormat = 'prism.run([\'$q\', \'$http\', function ($q, $http) {\n' +
        '   /* eslint-disable no-unused-vars*/\n' +
        '   /* eslint-disable max-len */\n' +
        '   /* Translations definition - start */\n' +
        '   let translationsGlobal = \n' +
         jsonminify( JSON.stringify(duplicationJSON) ) + ';\n' +
        ' let translations = \n' +
        jsonminify( JSON.stringify(translationJSON) ) + ';\n}' +
        '])\n' +
        '  /*' + utility.dateOfProgramExecution() + '*/\n' +
        '  /* Translations definition - end */';
  return finalFormat;
}


