/*
 * I'm still playing around with different features for the search engine, so I'm holding off on putting the data in the database.
 */

brok.static_data = (function() {	
	//Private Properties
	var positionOptimalBlue = new brok.ProfessionalPosition("OptimalBlue", "Software Engineer", "/employers/optimalblue");
	var positionUwm = new brok.ProfessionalPosition("University of Wisconsin Milwaukee", "Web Developer", "/employers/uwm");
	var projectSteamBadger = new brok.Project("Steam Badger", "/project/steam_badger");
	var projectAgileRails = new brok.Project("AgileRails", "/project/agilerails");
	var projectBrokInfo = new brok.Project("Brok.Info", "/project/this_site")
	
	
	var experiencedObjectOrientedLanguageArray = [
	  	new brok.ExperienceNode("C++", brok.EXPERIENCE.AMATEUR, 1,
  			[],
  			[]),
	  	new brok.ExperienceNode(
  			"C#", brok.EXPERIENCE.PROFESSIONAL, 2, 
  			[positionOptimalBlue, positionUwm],
	  		[projectSteamBadger]),
	  	new brok.ExperienceNode(
  			"ColdFusion", brok.EXPERIENCE.PROFESSIONAL, 1,
  			[positionUwm],
  			[]),
	  	new brok.ExperienceNode("Java", brok.EXPERIENCE.AMATEUR, 3,
  			[],
  			[projectAgileRails, projectBrokInfo]),
	  	new brok.ExperienceNode("Visual Basic", brok.EXPERIENCE.PROFESSIONAL, 1,
  			[positionOptimalBlue],
  			[])
	];
	var experiencedMvcFrameworkArray = [
	  	new brok.ExperienceNode("ASP.NET (MVC)", brok.EXPERIENCE.PROFESSIONAL, 2,
  			[positionOptimalBlue, positionUwm],
  			[projectSteamBadger]),
	  	new brok.ExperienceNode("Spring MVC", brok.EXPERIENCE.AMATEUR, 1,
  			[],
  			[projectBrokInfo])
	];
	var experiencedSourceControlArray = [
	  	new brok.ExperienceNode("Git", brok.EXPERIENCE.PROFESSIONAL, 2,
  			[positionOptimalBlue, positionUwm],
  			[projectAgileRails, projectSteamBadger, projectBrokInfo]),
	  	new brok.ExperienceNode("TFS", brok.EXPERIENCE.PROFESSIONAL, 1,
  			[positionOptimalBlue],
  			[])
	];
	var experiencedJsFrameworkArray = [
	  	new brok.ExperienceNode("AngularJS", brok.EXPERIENCE.PROFESSIONAL, 1,
  			[positionOptimalBlue],
  			[projectBrokInfo])
	];
	var experiencedScriptingLanguageArray = [
	  	new brok.ExperienceNode("JavaScript", brok.EXPERIENCE.PROFESSIONAL, 3,
  			[positionOptimalBlue, positionUwm],
  			[projectBrokInfo]),
	  	new brok.ExperienceNode("Python", brok.EXPERIENCE.AMATEUR, 1,
  			[],
  			[]),
	  	new brok.ExperienceNode("PHP", brok.EXPERIENCE.PROFESSIONAL, 1,
  			[positionUwm],
  			[])
	];
	var experiencedMobileDevelopmentArray = [
	  	new brok.ExperienceNode("Android", brok.EXPERIENCE.AMATEUR, 2,
  			[],
  			[projectAgileRails])
	];
	var noExperienceObjectOrientedLanguagesArray = [
		new brok.ExperienceNode("ABAP", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Ada", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("AmigaE", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("BETA", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Blue", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Boo", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Chapel", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Clarion", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("CLU", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("COBOL", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Cobra", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Common Lisp", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Cool", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("CorbaScript", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Curl", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("D", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Dart", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("DataFlex", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Dylan", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("E", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Eiffel", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Falcon", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Fancy", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Fortran", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("FPr_", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("FreeBASIC", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("F-Script", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("F Sharp", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Gambas", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Graphtalk", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("IDLscript", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("J", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("J#", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("JADE", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Lasso", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Lava", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Lexico", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Lingo", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("LISP", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Logtalk", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("MATLAB", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Modula", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Nemerle", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("NetRexx", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Noop", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Oberon", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Omnis Studio", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Oz", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Perl since v5", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Power Builder", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Agora", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Cecil", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Cel", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("ECMAScript", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("ActionScript", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("JScript", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Etoys", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Io", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Lua", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Lisaac", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("MOO", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("NewtonScript", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Obliq", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("REBOL", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Self", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("REALbasic", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Revolution", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Ruby", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("S", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("R", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Scala", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Seed7", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("SenseTalk", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Simula", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Smalltalk", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Squirrel", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Superx++", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Swift", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("TADS", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Tcl", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Ubercode", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Vala", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Visual FoxPro", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Visual Prolog", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("XBase++", brok.EXPERIENCE.NONE, 0)
	];                        
	var noExperienceMvcFrameworksArray = [
		new brok.ExperienceNode("Django", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Backbone.js", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("SproutCore", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Sammy.js", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Spine.js", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Cappuccino", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Knockout.js", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Javascript MVC", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Google Web Toolkit", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Google Closure", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Ember.js", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Angular.js", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Batman.js", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("JSF", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Vaadin", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("GWT", brok.EXPERIENCE.NONE, 0)
	];
	var noExperienceSourceControlsArray = [
		new brok.ExperienceNode("AccuRev", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("GNU Bazaar", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("BitKeeper", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("CA Software Change Manager", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("ClearCase", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Code Co-op", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Codeville", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Concurrent Versions System", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("CVS", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("CVSNT", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("darcs", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Fossil", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("GNU arch", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("IC Manage", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("LibreSource Synchronizer", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Mercurial", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Monotone", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Perforce", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Plastic SCM", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("PVCS", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("IBM Rational Team Concert|Rational Team Concert", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Revision Control System", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("SCM Anywhere", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Source Code Control System", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Sourceanywhere Standalone", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("StarTeam", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Subversion", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Surround SCM", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("SVK", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Team Foundation Server", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Synergy", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Vault", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Veracity", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Vesta", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("Visual SourceSafe", brok.EXPERIENCE.NONE, 0),
		new brok.ExperienceNode("VSS", brok.EXPERIENCE.NONE, 0)
	];
	var noExperienceJsFrameworksArray = [
	 	new brok.ExperienceNode("Ample SDK", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("DHTMLX", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Dojo", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Echo3", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Ember.js", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Enyo", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Ext JS", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Google Web Toolkit", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("jQuery", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Kendo UI", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("MooTools", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("OpenUI5", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Prototype JavaScript Framework", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Pyjamas", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("qooxdoo", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("SmartClient", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("SproutCore", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Wakanda", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("ZK Framework", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Webix", brok.EXPERIENCE.NONE, 0)
	];
	var noExperienceScriptingLanguagesArray = [
	 	new brok.ExperienceNode("Erlang", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Unix Shell", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Windows PowerShell", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("ecl", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("DCL", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Scheme", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("JCL", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("m4", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("VBScript", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("AppleScript", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Ruby", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Lua", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Tcl", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Perl", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Pure", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Rexx", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("XSLT", brok.EXPERIENCE.NONE, 0)
	];
	var noExperienceMobileDevelopmentArray = [
	 	new brok.ExperienceNode("iOS", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Firefox OS", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Windows Phone", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("BlackBerry OS", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Mer", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Tizen", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Sailfish OS", brok.EXPERIENCE.NONE, 0),
	 	new brok.ExperienceNode("Ubuntu Touch", brok.EXPERIENCE.NONE, 0)
	];
	
	//Private Method
	function addEdgesByArrayHelper_(graph, arrayA, arrayB, relashionship){
		//O(n*m)
		for (var ai = 0; ai < arrayA.length; ++ai) {
			for (var bi = 0; bi < arrayB.length; ++bi) {
				graph.addEdge(arrayA[ai], arrayB[bi], relashionship);
			}
		}
	}
	
	var publicObjects = {}
	
	//Public Propertie
	publicObjects.experienceGraph = new brok.ExperienceGraph();
	
	//Build the experience Graph
	addEdgesByArrayHelper_(publicObjects.experienceGraph, noExperienceObjectOrientedLanguagesArray, experiencedObjectOrientedLanguageArray, brok.TECH_TYPE.OBJECT_ORIENTED_LANGUAGE);
	addEdgesByArrayHelper_(publicObjects.experienceGraph, noExperienceMvcFrameworksArray, experiencedMvcFrameworkArray, brok.TECH_TYPE.MVC_FRAMEWORK);
	addEdgesByArrayHelper_(publicObjects.experienceGraph, noExperienceSourceControlsArray, experiencedSourceControlArray, brok.TECH_TYPE.SOURCE_CONTROL);
	addEdgesByArrayHelper_(publicObjects.experienceGraph, noExperienceJsFrameworksArray, experiencedJsFrameworkArray, brok.TECH_TYPE.JS_FRAMEWORK);
	addEdgesByArrayHelper_(publicObjects.experienceGraph, noExperienceScriptingLanguagesArray, experiencedScriptingLanguageArray, brok.TECH_TYPE.SCRIPTING_LANGUAGE);
	addEdgesByArrayHelper_(publicObjects.experienceGraph, noExperienceMobileDevelopmentArray, experiencedMobileDevelopmentArray, brok.TECH_TYPE.MOBILE_DEVELOPMENT);
	
	return publicObjects;
}());

