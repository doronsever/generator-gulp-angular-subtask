'use strict'

###*
# @ngdoc service
# @name <%= scriptAppName %>.<%= scriptClassName %>
# @description
# # <%= scriptClassName %>
# Provider in the <%= scriptAppName %>.
###
angular.module('<%= scriptAppName %>')
.provider '<%= scriptClassName %>', ->
# Private variables
  salutation = 'Hello'

  # Private constructor
  class Greeter
    @greet = ->
      salutation
  # Public API for configuration
  @setSalutation = (s) ->
    salutation = s
  # Method for instantiating
  @$get = ->
    new Greeter()
  ''


