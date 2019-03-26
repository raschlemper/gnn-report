'use strict';

app.controller('BoardController', ['$scope', '$q', '$filter', 'GithubService', 'ReportAppService',
  function ($scope, $q, $filter, GithubService, ReportAppService) {

    var init = function () {
        $scope.user = GithubService.getUser();
        $scope.repo = GithubService.getRepo();
        getDetails();
        getCommits();
        getBranch();
        //getReport();
    }; 

    var getDetails = function() {
      GithubService.getDetails()
      .then(function(details) {
        console.log(details);
      })
      .catch(function(err) {
        console.log(err);
      });
    }; 

    var getCommits = function() {
      GithubService.getCommits()
      .then(function(commits) {
        console.log(commits);
      })
      .catch(function(err) {
        console.log(err);
      });
    };

    var getBranch = function() {
      GithubService.getBranch()
      .then(function(branch) {
        console.log(branch);
        getRefs(branch.commit.sha);
      })
      .catch(function(err) {
        console.log(err);
      });
    };

    var getRefs = function(sha) {
      GithubService.getRefs()
      .then(function(refs) {
        console.log(refs);
      })
      .catch(function(err) {
        console.log(err);
      });
    };

    var getReport = function() {
      ReportAppService.report()
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      });
    };

  init();

}]);