(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
