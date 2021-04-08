var app = angular.module('App',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listacliente',{templateUrl: 'partials/listacliente.html',controller: 'ListaCtrl'}).
	when('/novocliente',{templateUrl:'partials/novocliente.html',controller:'ClienteCtrl'}).
	when('/addcliente/:nomecliente/:cpf/:email/:idade/:endereco/:uf',{templateUrl:'partials/addcliente.html',controller:'AddClienteCtrl'});
	
	$locationProvider.html5Mode(false).hashPrefix('!');

}]);

