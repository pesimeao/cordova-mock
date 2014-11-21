(function CdvMockDevice(mock, window, navigator, client) {
	'use strict';
	
	var _settings = {
		TAG: 'Device'
	};

	function exitApp() {
		navigator.app.exitApp();
	}

	function name() {
		return client ? (client.browser + " " + client.browserVersion) : 'webOS';
	}

	function platform() {
		return 'webOS';
	}

	function uuid() {

		var deviceObj = {
			platform: window.navigator.platform,
			appName: navigator.appName,
			appVersion: navigator.appVersion,
			userAgent: window.navigator.userAgent
		};

		if (client)
			deviceObj = client;

		return btoa(JSON.stringify(deviceObj));
	}

	function version() {
		return client ? client.osVersion : 1;
	}

	mock.device = {
        TAG: _settings.TAG,
        exitApp: exitApp,
        name: name(),
        platform: platform(),
        uuid: uuid(),
        version: version()
    };

    navigator.device = navigator.device || mock.device;
    window.device = window.device || mock.device;

})(window.CdvMock, window, window.navigator, window.client);