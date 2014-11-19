'use strict';
/**
 * @ngdoc directive
 * @name <%= scriptAppName %>.directive:<%= scriptClassName %>
 * @description
 * # <%= scriptClassName %>
 */
angular.module('<%= scriptAppName %>')
  .directive('<%= scriptClassName %>', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function(scope, element, attrs) {
        element.text('this is the <%= scriptClassName %> directive');
      }
    };
  });
