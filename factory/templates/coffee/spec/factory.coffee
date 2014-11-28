describe 'Factory: <%= scriptClassName %>', ->
  beforeEach module('<%= scriptAppName %>')

  <%= scriptClassName %> = {}

  beforeEach inject((_<%= scriptClassName %>_) ->
    <%= scriptClassName %> = _<%= scriptClassName %>_
  )

  it 'should provide the meaning of life', ->
    expect(<%= scriptClassName %>.someMethod() == 42).toBeTruthy()


