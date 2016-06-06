'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ionic',
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
])
//     .
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }])
//The Projects factory handles saving and loading projects from local storage, and also lets us save and load the last active project index.
.factory('Projects',function () {
    return {
        all: function () {
            var projectString = window.localStorage['projects'];
            if(projectString){
                return angular.fromJson(projectString);
            }
            return [];
        },
        save: function (projects) {
            window.localStorage['projects']= angular.toJson(projects);
        },
        newProject: function (projectTitle) {
            return {
                title: projectTitle,
                tasks:[]
            }
        },
        getLastActiveIndex:function () {
            return parseInt(window.localStorage['lastActiveProject']) ||0 ;
        },
        setLastActiveIndex: function (index) {
            window.localStorage['lastActiveProject'] =index;
        }
    }
});
