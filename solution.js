'use strict'

var languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

	

function processArray( arr, languageModel, englishModel ) {
	let innerJSON = '{\n';
	for(var i=0; i < arr.length - 1; i++)
		innerJSON += englishModel[ arr[ i ] ] + ":" + languageModel[ arr[ i ] ] + ',\n';
	innerJSON += englishModel[ arr[ i ] ] + ":" + languageModel[ arr[ i ] ];
	innerJSON += '\n}';
	
	return innerJSON;
}
	
function iterateModelJSON(model, languageModel, englishModel) {

	for(var itr in model)
		if( Array.isArray( model[ itr ] ) )
			console.log( processArray(model[ itr ], languageModel, englishModel ) + '\n' );
}

function createSecondJSON()
{
	const fs = require('fs');
	
	let rawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\plugin\\metaTranslations\\model.json');
    let model = JSON.parse( rawData );
	
	let englishRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\en\\supervisor.json');
    let englishModel = JSON.parse( englishRawData );
	
	for(var i=0; i < languages.length; i++) {
		let languageRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\' +  languages[ i ] + '\\supervisor.json');
	    let languageModel = JSON.parse( languageRawData );
		
		iterateModelJSON(model, languageModel, englishModel);
	}	
}

createSecondJSON();





