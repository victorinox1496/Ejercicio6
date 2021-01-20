var app = angular.module("pokedex", []);
app.controller("infoController", function($scope, $http){
    
    $scope.buscar = function(){
         var busqueda = $http.get("https://pokeapi.co/api/v2/pokemon/"+$scope.pokemon)
    };
    
    busqueda.error(function(){
        alert("Cual es este pokemon?, no lo consigo.");
    })
        
    busqueda.sucess(function(data){
        $scope.nombre = $scope.pokemon;
        $scope.numero = data.id;
        $scope.orden = data.orden;
        $scope.altura = data.height;
        $scope.foto = data.sprities.front_default;
})

})


