angular.module('brok.page.main', ['brok.page.main.controllers']);

brok.page = brok.page || {};
brok.page.main = (function() {	
	var publicObjects = {}
	publicObjects.availableTerms = [];
	
	//Convert the list of terms to objects usable by Angular Mass Autocomplete
	for(experienceNodeKey in brok.static_data.experienceGraph.nodes){
		publicObjects.availableTerms.push({
			value : brok.static_data.experienceGraph.nodes[experienceNodeKey].name,
			label : brok.static_data.experienceGraph.nodes[experienceNodeKey].name,
			obj: brok.static_data.experienceGraph.nodes[experienceNodeKey]
		});
	}
	
	return publicObjects;
}());