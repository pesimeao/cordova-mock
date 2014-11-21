describe('TlanJS CdvMock:', function () {
    'use strict';

    beforeEach(function() {
        spyOn(window.console, 'log');
        spyOn(window, 'alert');
    });
    
    describe('Device', function() {

        var notification;

        beforeEach(function() {
            notification = window.navigator.notification;
        })

        it('must be installed on navigator', function() {
            expect(notification).not.toBeUndefined();
        });

        it('must have alert, confirm, prompt, beep, vibrate params', function() {
            expect(notification.alert).not.toBeUndefined();
            expect(notification.confirm).not.toBeUndefined();
            expect(notification.prompt).not.toBeUndefined();
            expect(notification.beep).not.toBeUndefined();
            expect(notification.vibrate).not.toBeUndefined();
        });

        it('must write to console when alert', function() {
            notification.alert();
            expect(window.console.log).toHaveBeenCalled();
        });

        it('must call alert when alert', function() {
            notification.alert();
            expect(window.alert).toHaveBeenCalled();
        });

        it('must call callback when alert', function() {
            var callback = jasmine.createSpy('callback');

            notification.alert("Testing", callback);
            expect(callback).toHaveBeenCalled();
        });

    });

});