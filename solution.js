'use strict'

var languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl'];

function generateSpaces(nrTabs) {
	let text = '';
	for (var i = 0; i < nrTabs; i++)
		text += '     ';
	return text;
}

function processArray(arr, languageModel, englishModel, nrTabs) {
	let innerJSON = '{\n';
	for (var i = 0; i < arr.length - 1; i++)
		if (languageModel[arr[i]]) {
			innerJSON += generateSpaces(nrTabs) + '"' + englishModel[arr[i]] + '":"' + languageModel[arr[i]] + '",\n';
		}
		else
			innterJSON += resolveUnfoundKeyException(arr[i], languageModel, englishModel, nrTabs);

	if (languageModel[arr[arr.length - 1] ] )
		innerJSON += generateSpaces(nrTabs) + '"' +
			englishModel[arr[arr.length - 1]] + '":"' + languageModel[arr[arr.length - 1]] + '"';
	else {
		innerJSON += resolveUnfoundKeyException(arr[arr.length - 1], languageModel, englishModel, nrTabs);
	}
	innerJSON += generateSpaces(nrTabs) + '\n' + generateSpaces(nrTabs) + '}';

	return innerJSON;
}

function processInnerArray(innerArray, languageModel, englishModel, nrTabs)
{
	let text =  '{\n';

	for(var i=0; i < innerArray.length; i++) {
		text += generateSpaces( nrTabs ) + '"' + languageModel[ innerArray[ i ] ] + '" : "' + englishModel[ innerArray[ i ] ] + '",\n';  
	}

	text += generateSpaces( nrTabs ) + '}';

	return text;
}

function processInnerObject(innerObject, languageModel, englishModel, nrTabs) {
	let text = '{\n';
	for (var itr in innerObject) {
		text += generateSpaces( nrTabs ) + '"' + englishModel[itr] + '" : ' + processInnerArray(innerObject[ itr ], languageModel, englishModel, nrTabs + 1) +  '\n';
	}

	return text  + generateSpaces( nrTabs ) + '}';
}

function resolveUnfoundKeyException(partialKey, languageModel, englishModel, nrTabs) {
	let text = "";

	for (var itr in languageModel) {
		if (itr.includes(partialKey)) {
			text += generateSpaces(nrTabs) + '"' + englishModel[itr] + '": ' + '"' + languageModel[itr] + '"\n';
		}
	}

	return text;
}

function createTheAlmostMostImportantJSON(principalKey, arr, languageModel, englishModel, nrBigSpaces, ok) {
	let output = '';
	if (ok) {
		output = '  "' + principalKey + '":';
	}
	else {
		output = generateSpaces(nrBigSpaces) + '"' + principalKey + '":';
	}

	output += processArray(arr, languageModel, englishModel, nrBigSpaces + 1);

	return output;
}

function createSpecialJSON(keyName, innerObject, languageModel, englishModel, nrBigSpaces)
{
	return generateSpaces( nrBigSpaces ) + '"' + keyName + '" : ' +
	                  processInnerObject(innerObject, languageModel, englishModel, nrBigSpaces + 1) + ',\n';
}

function iterateModelJSON(model, languageModel, englishModel, nrBigSpaces) {
	let partialString = '  {\n';

	for (var itr in model) {
		if (itr != "dashboards") {
			if (Array.isArray(model[itr])) {
				partialString += createTheAlmostMostImportantJSON(itr, model[itr], languageModel, englishModel, nrBigSpaces + 1, false) + ',\n';
			} else if (typeof model[itr] === 'object') {
				partialString += createSpecialJSON(itr, model[ itr ], languageModel, englishModel, nrBigSpaces + 1);
			}
		}
	}

	return partialString.substring(0, partialString.length - 2) + '\n  }';
}

function createSecondJSON() {
	let finalJSON = '';

	const fs = require('fs');

	//Here I read the model file
	let rawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\plugin\\metaTranslations\\model.json');
	let model = JSON.parse(rawData);

	//Here I read the english translation
	let englishRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\en\\supervisor.json');
	let englishModel = JSON.parse(englishRawData);

	//Here I iterate every language and I create the JSONs
	for (var i = 0; i < languages.length - 1; i++) {
		let languageRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\' + languages[i] + '\\supervisor.json');
		let languageModel = JSON.parse(languageRawData);

		finalJSON += '  "' + languages[i] + '": ' + iterateModelJSON(model, languageModel, englishModel, 1) + ",\n";
	}

	let languageRawData = fs.readFileSync('C:\\Users\\User\\Desktop\\myVersion\\translatedFiles\\' + languages[languages.length - 1] + '\\supervisor.json');
	let languageModel = JSON.parse(languageRawData);
	finalJSON += '  "' + languages[languages.length - 1] + '": ' + iterateModelJSON(model, languageModel, englishModel, 1);

	return '{\n' + finalJSON + '\n}';
}

const fs = require('fs');
fs.writeFile("test.json", createSecondJSON(), function (err) {
	if (err) {
		return console.log(err);
	}

	console.log("The file was saved!");
}); 
