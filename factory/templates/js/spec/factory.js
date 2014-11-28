describe('Factory: <%= scriptClassName %>', function() {
  var <%= scriptClassName %>;
  beforeEach(module('<%= scriptAppName %>'));
  beforeEach(inject(function(_<%= scriptClassName %>_) {
    <%= scriptClassName %> = _<%= scriptClassName %>_;
  }));

  it('should provide the meaning of life', function() {
    expect(<%= scriptClassName %>.someMethod() == 42).toBeTruthy();
  });

});
