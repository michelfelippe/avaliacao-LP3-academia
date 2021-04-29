var appControllers = angular.module('controllers',[]);

appControllers.controller('ClienteCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addcliente/'+$scope.nomecliente+'/'+$scope.cpf+'/'+$scope.idade+'/'+$scope.email);
	};
}]);

appControllers.controller('AddClienteCtrl',['$scope','$routeParams',function($scope,$routeParams){

	$scope.nnomecliente = $routeParams.nomecliente;
	$scope.ncpf = $routeParams.cpf;
	$scope.nemail = $routeParams.idade;
	$scope.nidade = $routeParams.email;

	console.log('Cheguei até aqui! Cliente!');
}]);

		appControllers.controller('ExercicioCtrl',['$scope','$location',function($scope,$location){
			$scope.enviar=function(){
				$location.path('/addexercicio/'+$scope.nomeexercicio+'/'+$scope.tipo+'/'+$scope.tempo+'/'+$scope.calorias);
	};
}]);

	appControllers.controller('AddExercicioCtrl',['$scope','$routeParams',function($scope,$routeParams){
	
		$scope.nnomeexercicio = $routeParams.nomeexercicio;
		$scope.ntipo = $routeParams.tipo;
		$scope.ntempo = $routeParams.tempo;
		$scope.ncalorias = $routeParams.calorias;
	
	console.log('Cheguei até aqui! Exercicio!!!');
	}]);

		appControllers.controller('ImcCtrl',['$scope','$location',function($scope,$location){
			$scope.enviar=function(){
				$location.path('/addimc/'+$scope.peso+'/'+$scope.altura);
		};
	}]);

		appControllers.controller('AddImcCtrl',['$scope','$routeParams',function($scope,$routeParams){

			$scope.npeso = $routeParams.peso;
			$scope.naltura = $routeParams.altura;
			$scope.nimc = $scope.npeso / ($scope.naltura * $scope.naltura);
			
			console.log('Cheguei até aqui! IMC');
		}]);