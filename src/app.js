(function CdvMockApp(mock, navigator) {
	'use strict';

	var _settings = {
		TAG: 'App'
	};

	function exitApp() {
        mock.log(_settings.TAG, '### Exit App ###');
    }

    mock.app = {
        TAG: _settings.TAG,
        exitApp: exitApp
    };

    navigator.app = mock.app;

})(window.CdvMock, window.navigator);