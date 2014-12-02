'use strict'

###*
# @ngdoc service
# @name <%= scriptAppName %>.<%= scriptClassName %>
# @description
# # <%= scriptClassName %>
# Factory in the <%= scriptAppName %>.
###
angular.module('<%= scriptAppName %>')
  .factory '<%= scriptClassName %>Factory', ->
    # Service logic
    # ...
    meaningOfLife = 42
    # Public API here
    {
      someMethod: ->
        meaningOfLife
    }
