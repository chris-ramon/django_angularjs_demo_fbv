'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, Post) {
    $scope.currentPage = 1;
    Post.query(setPosts);
    $scope.pages = function(n) {
      return new Array(n);
    };
    $scope.updateQuery = function(page) {
      $scope.currentPage = page;
      Post.query({page: page}, setPosts);
    }
    function setPosts(response) {
      $scope.posts = response.results;
      $scope.numberOfPages = response.count;
    }
  })
  .controller('PostCreateCtrl', function($scope, Post) {
    $scope.post = new Post();
    $scope.flashMessage = '';
    $scope.save = function() {
      $scope.post.$save().then(function() {
        $scope.flashMessage = 'Post was successfully saved!';
      }, function(response) {
        $scope.flashMessage = response.data;
      });
      $scope.post = new Post();
    };
  })
  .controller('PostDetailCtrl', function($scope, Post, $routeParams) {
    $scope.post = Post.get({id: $routeParams.id});
  })
  .controller('PostEditCtrl', function($scope, Post, $routeParams) {

    $scope.post = Post.get({id: $routeParams.id});
    $scope.flashMessage = '';
    $scope.save = function() {
      $scope.post.$update(function() {
        $scope.flashMessage = 'Post was successfully updated!';
      }, function(response) {
        $scope.flashMessage = response.data;
      });
    }
  })
  .controller('PostDeleteCtrl', function($scope, Post, $routeParams, $location) {
    $scope.post = Post.get({id: $routeParams.id});
    $scope.flashMessage = '';
    $scope.delete = function(response) {
      $scope.post.$delete(function() {
        $location.path("/");
      }, function() {
        $scope.flashMessage = response.data;
      });

    }
    $scope.cancel = function() {
      $location.path("/detail/" + $scope.post.id);
    }
  });

