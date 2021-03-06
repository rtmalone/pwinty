'use strict';

var nock = require('nock');
var expect = require('expect.js');

describe('Catalogue', function() {

    var pwinty;

    beforeEach(function () {
        pwinty = require('../lib/pwinty')('apiKey', 'merchantId');
        nock.disableNetConnect();
    });

    it('makes a GET request to /Catalogue/{countryCode}/{qualityLevel}', function (done) {

        nock('https://sandbox.pwinty.com:443')
            .get('/v2.1/Catalogue/GB/Pro')
            .reply(200, {'countryCode':'GB','country':'UNITED KINGDOM'});

        pwinty.getCatalogue('GB', 'Pro', function (err, res) {
            expect(res.countryCode).to.be('GB');
            done();
        });
    });

});
