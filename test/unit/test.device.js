describe('TlanJS CdvMock:', function () {
    'use strict';

    beforeEach(function() {
        spyOn(window.console, 'log');
    });
    
    describe('Device', function() {

        var nDevice,
            wDevice;

        beforeEach(function() {
            nDevice = window.navigator.device;
            wDevice = window.device;
        })

        it('must be installed on window and navigator', function() {
            expect(nDevice).not.toBeUndefined();
            expect(wDevice).not.toBeUndefined();
        });

        it('device window and navigator must be the same', function() {
            expect(nDevice).toEqual(wDevice);
        });

        it('must have exitApp, name, platform, uuid, version params', function() {
            expect(nDevice.exitApp).not.toBeUndefined();
            expect(nDevice.name).not.toBeUndefined();
            expect(nDevice.platform).not.toBeUndefined();
            expect(nDevice.uuid).not.toBeUndefined();
            expect(nDevice.version).not.toBeUndefined();
        });

        it('must write to console when exitApp', function() {
            nDevice.exitApp();
            expect(window.console.log).toHaveBeenCalled();
        });

    });

});