(function() {
	angular
		.module('brok.page.main.controllers', ['brok.page.main.services', 'ngSanitize', 'MassAutoComplete'])
		.controller('SearchController', ['$sce', '$q', function($sce, $q) {
			var this_ = this;
			this_.searchText = "";
			this_.allTerms = brok.page.main.availableTerms;
			this_.selectedTerms = [];
			this_.fuzzySearchAllTerms = new Fuse(this_.allTerms, {
				shouldSort: true,
				caseSensitive: false,
				id: false,
				keys: ['value'],
				threshold: 0.4,
			});
			
			/**** Mass Autocomplete Methods ******/
			/**
			 * Remove a selected term
			 * @param {int} index - The list index of the term to be removed.
			 */
			this_.unselectTermById = function(index) {
				this_.selectedTerms.splice(index, 1);
			};
			
			/**
			 * Highlight the text that matches the search using HTML
			 * @param {string} originalString - The string that will be highlighted, if the highlightPart is found
			 * @param {string} highlightPart - The part of the string that needs to be highlighted
			 * @returns {string} originalString with highlightPart highlighted
			 */
			this_.highlight = function(originalString, highlightPart) {
				var highlight_regex = new RegExp('(' + highlightPart + ')', 'gi');
				return originalString.replace(highlight_regex,
					'<span class="highlight">$1</span>');
			};
			
			/**
			 * Highlight term using the searchString
			 * @param {object} term - The search term object
			 * @param {string} searchString - The search string
			 * @returns {object} The search term with highlighted label using searchString
			 */
			this_.formatTermWithHighlight = function(term, searchString) {
				return {
					obj: term.obj,
					value: term.value,
					label: $sce.trustAsHtml(
						'<div class="container-fluid">' +
							'<div class="pull-left">' +
								this_.highlight(term.label, searchString) +
							'</div>' +
						'</div>')
				};
			};
			
			this_.autocomplete_options = { };
			this_.autocompleteItem_options = {
				suggest: function(searchString) {
					if (!searchString) {
						return [];
					}
					
					return this_.fuzzySearchAllTerms
						.search(searchString)
						.slice(0, 10)
						.map(function(term) { return this_.formatTermWithHighlight(term, searchString); });
				},
				on_select: function(selectedTerm) {
					this_.selectedTerms.push(selectedTerm);
					this_.searchText = "";
				}
			};
	}]);
})();