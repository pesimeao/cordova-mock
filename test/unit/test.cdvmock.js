describe('TlanJS CdvMock:', function () {
    'use strict';

    beforeEach(function() {
        spyOn(window.console, 'log');
    });
    
    describe('CdvMock:', function () {

        var mock;

        beforeEach(function() {
            mock = window.CdvMock;
        })

        it('must be installed on window', function() {
            expect(mock).not.toBeUndefined;
        });

        it('should log', function () {
            expect(mock.log).not.toBeUndefined();

            spyOn(mock, 'log');
            mock.log("Testing");
            expect(mock.log).toHaveBeenCalled();
        });

        it('should log to console log', function() {
            //spyOn(window.console, 'log');
            mock.log("Testing");
            expect(window.console.log).toHaveBeenCalled();
        });

    });

});