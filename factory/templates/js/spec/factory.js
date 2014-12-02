describe('Factory: <%= scriptClassName %>Factory', function() {
  var <%= scriptClassName %>;
  beforeEach(module('<%= scriptAppName %>'));
  beforeEach(inject(function(_<%= scriptClassName %>Factory_) {
    <%= scriptClassName %> = _<%= scriptClassName %>Factory_;
  }));

  it('should provide the meaning of life', function() {
    expect(<%= scriptClassName %>.someMethod() == 42).toBeTruthy();
  });

});
