graphApp.controller("graphControllers", function($scope, $firebaseArray){

  var ref = new Firebase("https://vizapp.firebaseio.com/data");

  $scope.graphData = $firebaseArray(ref);

  $scope.width = 600;
  $scope.height = 250;

  $scope.yAxis = "Booty Haul";
  $scope.xAxis = "2015";

  $scope.max = 342;

});

  






















