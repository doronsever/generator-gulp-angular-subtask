describe 'Service: <%= scriptClassName %>Service', ->
  <%= scriptClassName %> = {}
  beforeEach module('<%= scriptAppName %>')
  beforeEach inject((_<%= scriptClassName %>Service_) ->
    <%= scriptClassName %> = _<%= scriptClassName %>Service_
  )

  it 'should attach a list of awesomeThings to the service', ->
    expect(<%= scriptClassName %>.awesomeThings.length).toBe(3)

