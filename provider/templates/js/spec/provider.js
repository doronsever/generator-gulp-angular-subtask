describe('Factory: <%= scriptClassName %>', function() {
  var <%= scriptClassName %>;
  beforeEach(module('<%= scriptAppName %>'));
  beforeEach(inject(function(_<%= scriptClassName %>_) {
    <%= scriptClassName %> = _<%= scriptClassName %>_;
  }));

  it('should say hello', function() {
    expect(<%= scriptClassName %>.greet()).toEqual('Hello');
  });

});
