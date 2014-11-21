describe('TlanJS CdvMock:', function () {
    'use strict';

    beforeEach(function() {
        spyOn(window.console, 'log');
    });
    
    describe('App', function() {

        var app;

        beforeEach(function() {
            app = window.navigator.app;
        })

        it('must be installed on window', function() {
            expect(app).not.toBeUndefined();
        });

        it('must have exitApp fucntion', function() {
            expect(app.exitApp).not.toBeUndefined(),
            expect(typeof app.exitApp).toBe('function');
        });

        it('must write to console when exitApp', function() {
            app.exitApp();
            expect(window.console.log).toHaveBeenCalled();
        });

    });

});