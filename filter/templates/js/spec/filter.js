'use strict';

describe('Filter: <%= scriptClassName %>', function () {
// load the filter's module
  beforeEach(module('<%= scriptAppName %>'));
// initialize a new instance of the filter before each test
  var <%= scriptClassName %>;
  beforeEach(inject(function ($filter) {
    <%= scriptClassName %> = $filter('<%= scriptClassName %>');
  }));
  it('should return the input prefixed with "<%= scriptClassName %> filter:"', function () {
    var text = 'angularjs';
    expect(<%= scriptClassName %>(text)).toBe('<%= scriptClassName %> filter: ' + text);
  });
});
