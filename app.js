var app = angular.module('App',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listacliente',{templateUrl: 'partials/listacliente.html',controller: 'ListaClienteCtrl'}).
	when('/novocliente',{templateUrl:'partials/novocliente.html',controller:'ClienteCtrl'}).
	when('/addcliente/:nomecliente/:cpf/:email/:idade',{templateUrl:'partials/addcliente.html',controller:'AddClienteCtrl'});

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listaexercicios',{templateUrl: 'partials/listaexercicios.html',controller: 'ListaExercicioCtrl'}).
	when('/novoexercicio',{templateUrl:'partials/novoexercicio.html',controller:'ExercicioCtrl'}).
	when('/addexercicio/:nomeexercicio/:tipo/:tempo/:calorias',{templateUrl:'partials/addexercicio.html',controller:'AddExercicioCtrl'});

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listaimc',{templateUrl: 'partials/listaimc.html',controller: 'ListaImcCtrl'}).
	when('/calcimc',{templateUrl:'partials/calcimc.html',controller:'ImcCtrl'}).
	when('/addimc/:peso/:altura',{templateUrl:'partials/addimc.html',controller:'AddImcCtrl'});
	
	$locationProvider.html5Mode(false).hashPrefix('!');

}]);

