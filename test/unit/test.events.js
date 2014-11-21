describe('TlanJS CdvMock:', function () {
    'use strict';

    beforeEach(function() {
        spyOn(window.console, 'log');
    });

    describe('Events', function() {

        var events;

        beforeEach(function() {
            events = window.CdvMock.events;
            spyOn(events, 'fireEvent').andCallThrough();
        });

        it('must exist in CdvMock', function() {
            expect(events).not.toBeUndefined();
        });

        it('must have resume event', function() {
            expect(events.resume).not.toBeUndefined();
            expect(typeof events.resume).toBe('function');

            events.resume();
            expect(events.fireEvent).toHaveBeenCalledWith('resume');
        });

        it('must have backButton event', function() {
            expect(events.backButton).not.toBeUndefined();
            expect(typeof events.backButton).toBe('function');

            events.backButton();
            expect(events.fireEvent).toHaveBeenCalledWith('backbutton');
        });

        it('must have menuButton event', function() {
            expect(events.menuButton).not.toBeUndefined();
            expect(typeof events.menuButton).toBe('function');

            events.menuButton();
            expect(events.fireEvent).toHaveBeenCalledWith('menubutton');
        });

        it('must have searchButton event', function() {
            expect(events.searchButton).not.toBeUndefined();
            expect(typeof events.searchButton).toBe('function');

            events.searchButton();
            expect(events.fireEvent).toHaveBeenCalledWith('searchbutton');
        });

        it('must have online event', function() {
            expect(events.online).not.toBeUndefined();
            expect(typeof events.online).toBe('function');

            events.online();
            expect(events.fireEvent).toHaveBeenCalledWith('online');
        });

        it('must have offline event', function() {
            expect(events.offline).not.toBeUndefined();
            expect(typeof events.offline).toBe('function');

            events.offline();
            expect(events.fireEvent).toHaveBeenCalledWith('offline');
        });

        it('must have deviceReady event', function() {
            expect(events.deviceReady).not.toBeUndefined();
            expect(typeof events.deviceReady).toBe('function');

            events.isReady = false;
            events.deviceReady();
            expect(events.fireEvent).toHaveBeenCalledWith('deviceready');
        });

        it('deviceReady should fire deviceReady event just once', function() {
            expect(events.fireEvent.calls.length).toEqual(0);

            events.isReady = false; // Reset

            events.deviceReady();
            expect(events.fireEvent).toHaveBeenCalledWith('deviceready');
            expect(events.fireEvent.calls.length).toBe(1);

            events.deviceReady();
            expect(events.fireEvent.calls.length).toBe(1);
        });

        it('should dispatch event when calling fireEvent', function() {
            spyOn(document, 'dispatchEvent');

            events.online();
            events.offline();
            events.resume();
            events.backButton();
            events.menuButton();
            events.searchButton();

            expect(document.dispatchEvent).toHaveBeenCalled();
            expect(document.dispatchEvent.calls.length).toBe(6);
        });

    });

});