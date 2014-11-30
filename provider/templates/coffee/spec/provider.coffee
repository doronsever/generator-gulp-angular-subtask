describe 'Provider: <%= scriptClassName %>', ->
  <%= scriptClassName %> = {}
  beforeEach(module('<%= scriptAppName %>'));
  beforeEach(inject((_<%= scriptClassName %>_) ->
    <%= scriptClassName %> = _<%= scriptClassName %>_
  ));

  it 'should say hello', ->
    expect(<%= scriptClassName %>.greet()).toEqual('Hello')


