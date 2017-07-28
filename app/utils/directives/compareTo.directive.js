angular.module('projectvocabulary.utils').directive("compareTo", function () {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function(scope, element, attributes, ngModel) {

      ngModel.$validators.compareTo = function(modelValue) {
        if(ngModel.$$rawModelValue  == undefined){
          ngModel.$$rawModelValue = "";
        }
        var untouched = ngModel.$pristine;
        var value = modelValue.$$rawModelValue == scope.otherModelValue.$$rawModelValue;
        console.log(untouched, value);
        console.log(ngModel);
        return untouched || value;
      };

      scope.$watch("otherModelValue", function() {
        ngModel.$validate();
      });
    }
  };
})
