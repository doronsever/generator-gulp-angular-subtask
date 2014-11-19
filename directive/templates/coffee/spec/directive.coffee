'use strict'

describe 'Directive: <%= scriptClassName %>', ->

  # load the directive's module
  beforeEach module '<%= scriptAppName %>'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    expect(element.text()).toBe 'this is the <%= scriptClassName %> directive'
