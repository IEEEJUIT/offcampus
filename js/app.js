'use strict';

angular.module('myApp', [])
  .controller('JobsController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Web Developer";

    function fetch(){
      // $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      // .then(function(response){ $scope.details = response.data; });

      // $http.get("http://api.indeed.com/ads/apisearch?publisher=1637952116847595&q=java&l=delhi&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&v=2&format=json")
      $http.get("http://api.careerbuilder.com/v2/jobsearch?DeveloperKey=WDHN5J75ZPHLGQVZHDN8&outputjson=true")
      .then(function(response){ $scope.jobs = response.data; });
    }

    // $scope.update = function(movie){
    //   $scope.search = movie.Title;
    // };

    // $scope.select = function(){
    //   this.setSelectionRange(0, this.value.length);
    // }
  });
