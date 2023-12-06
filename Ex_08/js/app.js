let app = angular.module('minhaAplicacao', []);

app.controller('meuController', function($scope) {
    $scope.carros = {
        carro01: { marca: "Ford", modelo: "Ká", cor: "branco" },
        carro02: { marca: "Fiat", modelo: "Uno", cor: "azul" },
        carro03: { marca: "Toyota", modelo: "Corolla", cor: "verde" }
    };
});
