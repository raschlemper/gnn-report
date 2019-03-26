'use strict';

app.factory('GithubService', ['$http', 'PromiseService', 
    function($http, PromiseService) {

    const repository = 'gnn-report';
    const branch = 'master';
    const username = 'raschlemper';
    const password = '';

    var git = new GitHub({
       username: username,
       password: password,
       auth: "basic"
    });

    var getUser = function() {
        return git.getUser();
    };

    var getRepo = function() {
        return git.getRepo(username, repository);
    };

    var getDetails = function() {
        var repo = getRepo();
        return repo.getDetails()
        .then(function(result) {
            return result.data;
        }); 
    };

    var getRefs = function(sha) {
        var repo = getRepo();
        return repo.getRef(sha)
        .then(function(result) {
            return result.data;
        }); 
    };

    var getCommits = function() {
        var repo = getRepo();
        return repo.listCommits()
        .then(function(result) {
            return result.data;
        }); 
    };

    var getBranch = function() {
        var repo = getRepo();
        return repo.getBranch('master')
        .then(function(result) {
            return result.data;
        }); 
    };

    return {
        getUser: getUser,
        getRepo: getRepo,
        getDetails: getDetails,
        getRefs: getRefs,
        getCommits: getCommits,
        getBranch: getBranch
    };

}]);