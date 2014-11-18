'use strict'

describe 'Controller: <%= scriptClassName %>Ctrl', ->
  # load the controller's module
  beforeEach module '<%= scriptAppName %>'

  <%= scriptClassName %>Ctrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    <%= scriptClassName %>Ctrl = $controller '<%= scriptClassName %>Ctrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
