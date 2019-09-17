const utility = require('./utilityModule');

module.exports = {
  createTranslationJSON,
};

const pathForEnglishModel = '././input/labels-supervisor/en/supervisor.json';
const partialPathForLanguageModels = '././input/labels-supervisor/';

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

function resolveUnfoundKeyException(partialKey, languageModel, englishModel, resultJSON) {
  let itsFine = true;
  for ( const itr in languageModel ) {
    if ( itr.startsWith( partialKey ) ) {
      // This operation could end with exception
      itsFine = false;
      resultJSON[utility.accessValueInJSON(englishModel, itr, true)] = languageModel[itr];
    }
  }

  if (itsFine) {
    throw Error('la/' + partialKey);
  }
  return resultJSON;
}

function processInnerArray(innerArray, languageModel, englishModel) {
  let resultJSON = {};
  for (let i=0; i < innerArray.length; i++) {
    if(languageModel[ innerArray[ i ] ]){
      // This line could end with exception if a key value in not found
      resultJSON[ utility.accessValueInJSON(englishModel, innerArray[ i ], false)] =
          languageModel[ innerArray[ i ] ];
    } else {
      resultJSON = resolveUnfoundKeyException(innerArray[ i ], languageModel, englishModel, resultJSON);
    }
  }

  return resultJSON;
}

function processInnerObject(innerObject, languageModel, englishModel) {
  let resultJSON = {};

  Object.keys(innerObject).forEach((key) => {
    resultJSON[ utility.accessValueInJSON(englishModel, key, true)] = processInnerArray(innerObject[key], languageModel, englishModel);
  });
  return resultJSON;
}

function iterateModelJSON(model, languageModel, englishModel) {
  let resultJSON = {};

  for (const itr in model) {
    if (itr !== 'dashboards') {
      if (!Array.isArray(model[itr])) {
        if (typeof model[itr] === 'object') {
          resultJSON[ itr ] = processInnerObject(model[ itr ], languageModel, englishModel);
        }
      } else {
        resultJSON[itr] = processInnerArray(model[ itr ], languageModel, englishModel);
      }
    }
  }
  return resultJSON;
}

function createTranslationJSON( model ) {
  let finalJSON = {};

  const englishModel = utility.parseJSONFile( pathForEnglishModel );

  for(let i = 0; i < languages.length; i++) {
    const languageModel = utility.parseJSONFile( partialPathForLanguageModels + languages[i] + '/supervisor.json');

    try {
      finalJSON[ languages[ i ] ] = iterateModelJSON(model, languageModel, englishModel);
    } catch ( e ) {
      throw (e.message.substring(0, 2) == 'en')? Error(utility.createUnderstandableErrorMessage( e.message))
          : Error(utility.createUnderstandableErrorMessage(e.message,
              partialPathForLanguageModels + languages[i] + '/supervisor.json'));
    }
  }

  return JSON.stringify( finalJSON );
}

