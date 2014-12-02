'use strict';
/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptClassName %>
 * @description
 * # <%= scriptClassName %>
 * Factory in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
  .factory('<%= scriptClassName %>Factory', function () {
// Service logic
// ...
    var meaningOfLife = 42;
// Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
