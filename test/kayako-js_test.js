'use strict';

var KayakoJs = require('../');
var assert = require('should');

describe('kayakoJs', function () {

  var helpdesk = new KayakoJs({
    string: "test"
  });

  it('should be test', function () {
    helpdesk.test().should.equal('test');
  });

});
