'use strict'
###*
# @ngdoc function
# @name <%= scriptAppName %>.controller:<%= scriptClassName %>Ctrl
# @description
# # <%= scriptClassName %>Ctrl
# Controller of the <%= scriptAppName %>
###
angular.module('<%= scriptAppName %>')
  .controller '<%= scriptClassName %>Ctrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    $scope
