'use strict'

var languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

function generateSpace( nrTabs )
{
	let text = '';
	for(var i = 0; i < nrTabs; i++)
	   text += '     ';
    return text;
}

function processArray( arr, languageModel, englishModel, nrTabs) {
	let innerJSON = '{\n';
	for(var i=0; i < arr.length - 1; i++)
		innerJSON += generateSpace( nrTabs ) + '"' + englishModel[ arr[ i ] ] + '":"' + languageModel[ arr[ i ] ] + '",\n';
	innerJSON += generateSpace( nrTabs ) + '"' + englishModel[ arr[ i ] ] + '":"' + languageModel[ arr[ i ] ] + '"';
	innerJSON += generateSpace( nrTabs ) + '\n' + generateSpace( nrTabs ) + '}';
	
	return innerJSON;
}

function createTheAlmostMostImportantJSON(principalKey, arr, languageModel, englishModel, nrTabs, ok)
{
	let output = '';
	if( ok ){
		  output = '  "' + principalKey + '":';
	}
	else {
		  output =  generateSpace( nrTabs ) +  '"' + principalKey + '":';
	}

	output += processArray(arr, languageModel, englishModel, nrTabs + 1);

	return output;
}
	
function iterateModelJSON(model, languageModel, englishModel, nrTabs) {

    let partialString = '';
	let ok = true;
	for(var itr in model)
		if( Array.isArray( model[ itr ] ) )
		  if( ok ){
			 partialString +=  createTheAlmostMostImportantJSON(itr, model[ itr ], languageModel, englishModel, nrTabs + 1, true) + ',\n';
			 ok = false;
		  }else	
		     partialString += createTheAlmostMostImportantJSON(itr, model[ itr ], languageModel, englishModel, nrTabs + 1, false) + ',\n';
	return partialString.substring(0, partialString.length - 2);
}

function createSecondJSON()
{
	let finalJSON = ''; 
	
	const fs = require('fs');
	
	//Here I read the model file
	let rawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\plugin\\metaTranslations\\model.json');
    let model = JSON.parse( rawData );
	
	//Here I read the english translation
	let englishRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\en\\supervisor.json');
    let englishModel = JSON.parse( englishRawData );
	
	//Here I iterate every language and I create the JSONs
	for(var i=0; i < languages.length - 1; i++) {
		let languageRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\' +  languages[ i ] + '\\supervisor.json');
	    let languageModel = JSON.parse( languageRawData );
		
		finalJSON += '  "' +  languages[ i ] + '": ' +  iterateModelJSON(model, languageModel, englishModel, 1)  + ",\n";
	}	
	
	let languageRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\' +  languages[ languages.length - 1 ] + '\\supervisor.json');
	let languageModel = JSON.parse( languageRawData );
	finalJSON += '  "' + languages[ languages.length - 1] + '": ' + iterateModelJSON(model, languageModel, englishModel, 1);
	
	return '{\n' + finalJSON + '\n}';
}

const fs = require('fs');
fs.writeFile("test.json", createSecondJSON(), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 





