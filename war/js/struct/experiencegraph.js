var brok = brok || {};

/**
 * Enum for Technology Type
 * @enum {object}
 */
brok.TECH_TYPE = {
	OBJECT_ORIENTED_LANGUAGE: {value: 0, name: "Object Oriented Language"},
	MVC_FRAMEWORK: {value: 1, name: "MVC Framework"},
	SOURCE_CONTROL: {value: 2, name: "Source Control"},
	JS_FRAMEWORK: {value: 3, name: "JS Framework"},
	SCRIPTING_LANGUAGE: {value: 4, name: "Scripting Language"},
	MOBILE_DEVELOPMENT: {value: 5, name: "Mobile Development"}
};

/**
 * Enum for Experience Types
 * @enum {object}
 */
brok.EXPERIENCE = {
	NONE: {value: 1, name: "None"},
	AMATEUR: {value: 1, name: "Amateur"},
	PROFESSIONAL: {value: 2, name: "Professional"}
};

/**
 * Professional Position
 * @constructor
 */
brok.ProfessionalPosition = function(companyName, positionName, positionUrl) {
	var position = {};
	position.companyName = companyName;
	position.name = positionName;
	position.url = positionUrl;
	
	return position;
}

/**
 * Project
 * @constructor
 */
brok.Project = function(projectName, projectUrl) {
	project = {};
	project.name = projectName;
	project.url = projectUrl;
	
	return project;
}

/**
 * Experience Node
 * @constructor
 */
brok.ExperienceNode = function(name, expType, yearsOfExp, positions, projects){
	positions = positions || [];
	projects = projects || [];
	
	this.edges = [];
	this.name = name;
	this.experienceType = expType;
	this.yearsOfExperience = yearsOfExp;
	this.positions = positions;
	this.projects = projects;
};

/**
 * Experience Edge Factory
 * @constructor
 */
brok.ExperienceEdgeFactory = function(){
	EdgeFactory.call(this)
}
goog.inherits(brok.ExperienceEdgeFactory, EdgeFactory);

/**
 * Builds Edge for Experience Graph
 * @param {object} source Source Node
 * @param {object} target Target Node
 * @param {object} relashionship Relashionship from source node to target node
 * @return {object} Edge between source and target with relashionship
 * @override
 */
brok.ExperienceEdgeFactory.prototype.build = function(source, target, relashionship) {
    var e = jQuery.extend(true, {}, this.template);
    e.relashionship = relashionship;
    e.source = source;
    e.target = target;
    return e;
}

/**
 * Experience Graph
 * @constructor
 */
brok.ExperienceGraph = function(){
	Graph.call(this);
	this.edgeFactory = new brok.ExperienceEdgeFactory();
}
goog.inherits(brok.ExperienceGraph, Graph);

/**
 * Adds an edge in an Experience Graph
 * @param {object} source Source Node
 * @param {object} target Target Node
 * @param {object} relashionship Relashionship from source node to target node
 * @param {object} style Visual Style between the nodes
 * @override
 */
brok.ExperienceGraph.prototype.addEdge = function(source, target, relashionship, style) {
    var s = this.addNode(source.name, source);
    var t = this.addNode(target.name, target);
    var edge = this.edgeFactory.build(s, t, relashionship);
    jQuery.extend(edge.style,style);
    s.edges.push(edge);
    this.edges.push(edge);
}