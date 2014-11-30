describe 'Factory: <%= scriptClassName %>', ->
  <%= scriptClassName %> = {}
  beforeEach(module('<%= scriptAppName %>'));
  beforeEach(inject((_<%= scriptClassName %>_) ->
    <%= scriptClassName %> = _<%= scriptClassName %>_
  ));

  it 'should attach a list of awesomeThings to the service', ->
    expect(<%= scriptClassName %>.greet()).toEqual('Hello')


