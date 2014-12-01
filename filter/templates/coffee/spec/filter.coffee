'use strict'

describe 'Filter: <%= scriptClassName %>', ->
  # load the filter's module
  beforeEach module '<%= scriptAppName %>'
  # initialize a new instance of the filter before each test
  <%= scriptClassName %> = {}
  beforeEach inject ($filter) ->
    <%= scriptClassName %> = $filter '<%= scriptClassName %>'

  it 'should return the input prefixed with "<%= scriptClassName %> filter:"', ->
    text = 'angularjs'
    expect(<%= scriptClassName %> text).toBe ('<%= scriptClassName %> filter: ' + text)
