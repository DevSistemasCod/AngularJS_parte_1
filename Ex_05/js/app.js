let app = angular.module('minhaAplicacao', []);

app.controller('meuController', function($scope) {
  $scope.disciplinas = ["BD", "IDM", "PWFE", "PWBE"];
  $scope.mensagem = 'A Disciplina Selecionada foi: ';

  $scope.$watch('selecionarDisciplina', function(disciplinaSelecionada, disciplinaAnterior) {
    if (disciplinaSelecionada !== disciplinaAnterior) {
      $scope.informacoesExibidas = true;
      $scope.disciplinaSelecionada = disciplinaSelecionada;
    }
  });
});
