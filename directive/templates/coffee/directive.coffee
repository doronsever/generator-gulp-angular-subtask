'use strict'
###*
# @ngdoc directive
# @name <%= scriptAppName %>.directive:<%= scriptClassName %>
# @description
# # <%= scriptClassName %>
###
angular.module('<%= scriptAppName %>')
  .directive('<%= scriptClassName %>', ->
    template: '<div></div>'
    restrict: 'E'
    link: (scope, element, attrs) ->
      element.text 'this is the <%= scriptClassName %> directive'
  )
