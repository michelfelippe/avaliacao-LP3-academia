var appControllers = angular.module('controllers',[]);

appControllers.controller('MainCtrl',['$scope',function($scope){
	$scope.nome = "MARIA BBB 19";
}]);
	
appControllers.controller('ListaCtrl',['$scope',function($scope){
	$scope.nome = "JOANINHA QUEBRA BARRACOOO!";
}]);

appControllers.controller('ClienteCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addcliente/'+$scope.nomecliente+'/'+$scope.cpf+'/'+$scope.idade+'/'+$scope.email+'/'+$scope.endereco+'/'+$scope.uf);
	};
}]);

appControllers.controller('AddClienteCtrl',['$scope','$routeParams',function($scope,$routeParams){

	$scope.nnomecliente = $routeParams.nomecliente;
	$scope.ncpf = $routeParams.cpf;
	$scope.nemail = $routeParams.email;
	$scope.nidade = $routeParams.idade;
	$scope.nendereco = $routeParams.endereco;
	$scope.nuf = $routeParams.uf;
	
	console.log('Cheguei até aqui!');
	
}]);