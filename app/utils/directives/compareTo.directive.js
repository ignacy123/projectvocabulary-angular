angular.module('projectvocabulary.utils').directive("compareTo", function () {
	return {
		require: "ngModel",
		scope: {
			otherModelValue: "=compareTo"
		},
		link: function (scope, element, attributes, ngModel) {

			ngModel.$validators.compareTo = function (modelValue) {
				var untouched = ngModel.$pristine;
				var value;
				if (scope.otherModelValue) {
					value = modelValue == scope.otherModelValue ? true : false;
				} else {
					value = false;
				}
				return untouched || value;
			};

			scope.$watch("otherModelValue", function () {
				ngModel.$validate();
			});
		}
	};
})
