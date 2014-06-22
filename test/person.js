var Person = require('../lib/person');
var assert = require('assert');

suite('person');

test('should have a name', function(){
  var person = new Person('travis');

  assert.equal('travis', person.name);
})
