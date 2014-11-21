(function CdvMockSqlite(mock, window) {
	'use strict';

	var _settings = {
		TAG: 'Sqlite'
	};

	function openDatabase(options) {
		mock.log(_settings.TAG, "Open Database", arguments);

		if (!options.name)
			throw "options.name is undefined";

        return window.openDatabase(options.name, 1, options.name, 10 * 1024);
    }

	mock.sqlitePlugin = {
        TAG: _settings.TAG,
        openDatabase: openDatabase
    };

    window.sqlitePlugin = mock.sqlitePlugin;

})(window.CdvMock, window);