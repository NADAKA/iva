var  Iva =  angular.module ("Iva",[]);

  Iva.controller("Mostrar",function($scope){
    $scope.first = 25;
    $scope.second = 1.12;
    $scope.mensaje=($scope.first) / ($scope.second);
});