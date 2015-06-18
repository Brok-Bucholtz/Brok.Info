<div ng-app="brok.page.main">
	<div class="row"><div class="spacer hidden-xs hidden-sm"></div></div>
	<div class="row">
		<div class="col-md-8 col-md-offset-2" id="main-search-container">
			<div class="row"><h3 class="text-center">What Experience Are You Looking For?</h3></div>
			<div class="row">
				<form  ng-controller="SearchController as searchCrtl">
					<div class="row" mass-autocomplete="searchCrtl.autocomplete_options" class="form-group"  id="autocomplete-container">
						<input mass-autocomplete-item="searchCrtl.autocompleteItem_options"
							ng-model="searchCrtl.searchText"
							ng-model-options="{ debounce: {'default': 0, 'blur': 0} }"
							type="text"
							class="form-control"
							placeholder="Java, MVC, etc.."
							id="main-search-field">
					</div>
					<div class="row ng-cloak" id="searchResults-container">
						<div class="row experience-row"
							ng-repeat="selectedTerm in searchCrtl.selectedTerms track by $index"
							ng-class-odd="'experience-odd'" ng-class-even="'experience-even'">
							<div class="col-xs-1">
								<a class="img-link delete-img-link" ng-click="searchCrtl.unselectTermById($index)"><img src="/lib/material-design-icons/1.0.1/navigation/2x_web/ic_close_grey600_18dp.png" /></a>
							</div>
							<div class="col-xs-10 description-block">
								<div class="experienceHeader"><span>{{selectedTerm.value}}</span></div>
								<hr />
								<div ng-show="selectedTerm.obj.yearsOfExperience == 0">
									<div>No Experience in {{selectedTerm.value}}, but Brok has experience in the following {{selectedTerm.obj.edges[0].relatedExperience.relashionship.name}}</div>
									<div>
										<div class="row" ng-repeat="relatedExperience in selectedTerm.obj.edges track by $index">
											<div class="col-xs-1">
												<a class="img-link expand-img-link" ng-click=""><img src="/lib/material-design-icons/1.0.1/navigation/2x_web/ic_expand_less_grey600_18dp.png" /></a>
											</div>
											<div class="col-xs-10">
												{{relatedExperience.target.name}}</span>
											</div>
										</div>
									</div>
								</div>
								<div ng-show="selectedTerm.obj.yearsOfExperience > 0">
									<div >
										<ng-pluralize
											count="selectedTerm.obj.yearsOfExperience"
											when="{'1': 'A Years of {{selectedTerm.obj.experienceType.name}} Experience',
												'other': '{} Years of {{selectedTerm.obj.experienceType.name}} Experience'}">
										</ng-pluralize>
									</div>
									<div class="row" ng-repeat="position in selectedTerm.obj.positions track by $index">
										<div class="col-xs-1">
											<a class="img-link expand-img-link" ng-click=""><img src="/lib/material-design-icons/1.0.1/navigation/2x_web/ic_expand_less_grey600_18dp.png" /></a>
										</div>
										<div class="col-xs-10">
											<span>{{position.companyName}} as a <span class="position-name">{{position.name}}</span>
										</div>
									</div>
								</div>
								<div ng-show="selectedTerm.obj.projects.length > 0">
										<ng-pluralize
											count="selectedTerm.obj.projects.length"
											when="{'1': 'Personal Project',
												'other': 'Personal Projects'}">
										</ng-pluralize>
									<div>
										<div class="row" ng-repeat="project in selectedTerm.obj.projects track by $index">
											<div class="col-xs-1">
												<a class="img-link expand-img-link" ng-click=""><img src="/lib/material-design-icons/1.0.1/navigation/2x_web/ic_expand_less_grey600_18dp.png" /></a>
											</div>
											<div class="col-xs-10">
												<span>{{project.name}}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>