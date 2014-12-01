'use strict';
/**
 * @ngdoc filter
 * @name <%= scriptAppName %>.filter:<%= scriptClassName %>
 * @function
 * @description
 * # <%= scriptClassName %>
 * Filter in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
  .filter('<%= scriptClassName %>', function () {
    return function (input) {
      return '<%= scriptClassName %> filter: ' + input;
    };
  });
