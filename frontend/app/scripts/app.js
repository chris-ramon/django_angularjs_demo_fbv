'use strict';

angular.module('frontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/postForm.html',
        controller: 'PostCreateCtrl'
      })
      .when('/detail/:id', {
        templateUrl: 'views/postDetail.html',
        controller: 'PostDetailCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'views/postForm.html',
        controller: 'PostEditCtrl'
      })
      .when('/delete/:id', {
        templateUrl: 'views/postDelete.html',
        controller: 'PostDeleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

//ximsCmsApp.config(function($httpProvider) {
//  // $httpProvider.defaults.withCredentials = true; // sent cookies
//  $httpProvider.defaults.useXDomain = true;
//
//  // you want delete x requested with cros, requests
//  // like hitting external api
//  // delete $httpProvider.defaults.headers.common['X-Requested-With'];
//
//  // we use this for let know django, when is ajax request.
//  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//  // $httpProvider.defaults.headers.common.Authorization = 'Token e388eb86edbaabdce21300934f521772ad74f36e'; // sent cookies
//});