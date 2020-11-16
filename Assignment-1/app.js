(function() {
  'use strict';

  angular.module('LunchChecker',[])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishNames = "";
    $scope.message = "";
    $scope.result = "";

    $scope.countingDishes = function () {

      var input = $scope.dishNames;
      input = input.trim();
      if (input == ""){
        $scope.message = "Please enter data first";
        $scope.result = "error";
      }else{
        var inputarr = input.split(",");

// console.log(inputarr[i]);
        for (var i = 0; i< inputarr.length;i++)
        {
          if (inputarr[i] === "" || inputarr[i] === " ")
          {
            $scope.message = "Do not consider an empty item";
            $scope.result = "error";
            break;
          }
          else
          {
            if (inputarr.length<=3){
              $scope.message = "Enjoy!";
              $scope.result = "success";
            }else{
              $scope.message = "Too much!";
              $scope.result = "success";
            }
          }
        }

}
};
  };
})();
