(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://quiet-citadel-49708.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
