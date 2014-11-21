(function CdvMockSplashscreen(mock, navigator) {
	'use strict';

	var _settings = {
		TAG: 'Splashscreen'
	};

	function show() {
        mock.log(_settings.TAG, 'show');
    }

    function hide() {
        mock.log(_settings.TAG, 'hide');
    }

    mock.splashscreen = {
        TAG: _settings.TAG,
        show: show,
        hide: hide
    };

    navigator.splashscreen = mock.splashscreen;

})(window.CdvMock, window.navigator);