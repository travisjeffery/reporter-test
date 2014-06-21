var Person = require('../lib/person');
var assert = require('assert');

describe('person', function(){
  var person;

  before(function(){
    person = new Person('travis');
  });

  it('should have a name', function(){
    assert.equal('travis', person.name);
  })
});
