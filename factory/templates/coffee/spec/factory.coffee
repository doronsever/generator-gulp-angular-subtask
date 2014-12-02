describe 'Factory: <%= scriptClassName %>Factory', ->
  beforeEach module('<%= scriptAppName %>')

  <%= scriptClassName %> = {}

  beforeEach inject((_<%= scriptClassName %>Factory_) ->
    <%= scriptClassName %> = _<%= scriptClassName %>Factory_
  )

  it 'should provide the meaning of life', ->
    expect(<%= scriptClassName %>.someMethod() == 42).toBeTruthy()


