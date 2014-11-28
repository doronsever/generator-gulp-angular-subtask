'use strict'

###*
# @ngdoc service
# @name <%= scriptAppName %>.<%= scriptClassName %>
# @description
# # <%= scriptClassName %>
# Factory in the <%= scriptAppName %>.
###
angular.module('<%= scriptAppName %>')
  .factory '<%= scriptClassName %>', ->
    # Service logic
    # ...
    meaningOfLife = 42
    # Public API here
    {
      someMethod: ->
        meaningOfLife
    }
