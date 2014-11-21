describe('TlanJS CdvMock:', function () {
    'use strict';

    beforeEach(function() {
        spyOn(window.console, 'log');
    });

    describe('Sqlite', function() {

        var sqlite;

        beforeEach(function() {
            sqlite = window.sqlitePlugin;
        });

        it('must exist in CdvMock', function() {
            expect(sqlite).not.toBeUndefined();
        });

        it('must have openDatabase method', function() {
            expect(sqlite.openDatabase).not.toBeUndefined();
            expect(typeof sqlite.openDatabase).toBe('function');
        });

    });

});