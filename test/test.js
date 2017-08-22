var chai = require('chai');
var Liner = require('../liner');

describe('test', function() {

    it('creates liner', function() {
        var liner = Liner();
        chai.assert.isDefined(liner);
    });

});