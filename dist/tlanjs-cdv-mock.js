/*! tlanjs-cdv-mock - v1.0.1 - 2014-12-30 */
/*
 */

(function CdvMock(window) {
    'use strict';

    var _settings = {
        TAG: 'CdvMock'
    };


    function log() {
        console.log(_settings.TAG, arguments);
    }

    var mock = {
        TAG: _settings.TAG,
        log: log
    };


    // Install this mock on window
    window.CdvMock = mock;

})(window);

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
(function CdvMockEvents(mock, window, document) {
	'use strict';

	var _settings = {
		TAG: 'Events'
	};

	/**
        Cordova generic events
    */
    var events = {
        TAG: _settings.TAG,
        // Was deviceready fired?
        isReady: false,

        // dispatch events
        fireEvent: function(name) {
            var event = document.createEvent('Events');
            event.initEvent(name, true, false);
            mock.log(_settings.TAG, name);
            document.dispatchEvent(event);
        },

        // deviceReady
        deviceReady: function() {
            if (this.isReady === true)
                return;
            this.isReady = true;
            this.fireEvent('deviceready');
        },

        // online
        online: function() {
            this.fireEvent('online');
        },

        // offline
        offline: function() {
            this.fireEvent('offline');
        },

        // Resume
        resume: function() {
            this.fireEvent('resume');
        },

        // Back Button
        backButton: function() {
            this.fireEvent('backbutton');
        },

        // Menu Button
        menuButton: function() {
            this.fireEvent('menubutton');
        },

        // Search Button
        searchButton: function() {
            this.fireEvent('searchbutton');
        }
    };

    mock.events = events;

    // ***** STARTING "FAKE" CONTAINER     ***********************************************************************
	document.addEventListener('DOMContentLoaded', function() {
        // Prevent from running if cordova is present
        if (window.cordova)
            return;

		if (!mock.events.isReady)
			mock.events.deviceReady();
	}, false);

})(window.CdvMock, window, window.document);
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
(function CdvMockSslCerificateChecker(mock, window) {
	'use strict';

	var _settings = {
		TAG: 'sslCertificateChecker'
	};

	function check(successCallback, errorCallback, server, fingerprint, fingerprintNew) {
		mock.log(_settings.TAG, "Check", parameters);

		return successCallback("CdvMock");
    }

	mock.sslCertificateChecker = {
        TAG: _settings.TAG,
        check: check
    };

})(window.CdvMock, window);
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
		return client ? client.osVersion : "1.0";
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
(function CdvMockDialogs(mock, navigator) {
	'use strict';

	var _settings = {
		TAG: 'Notification'
	};


	function alert(msg, alertCallback, title, buttonName) {
		mock.log(_settings.TAG, "Alert", arguments);
		window.alert("Title: " + title + "\r\nMsg: " + msg + "\r\nButtons: " + buttonName);
        if (alertCallback)
            alertCallback();
	}

	function confirm(msg, callback, title, buttons) {
		mock.log(_settings.TAG, "Confirm", arguments);
		var result = window.prompt("Title: " + title + "\r\nMsg: " + msg + "\r\nButtons: " + buttons);
        callback(parseInt(result, 10));
	}

	function prompt(message, promptCallback, title, buttonLabels, defaultValue) {
		mock.log(_settings.TAG, "Prompt", arguments);
	}

	function beep() {
		mock.log(_settings.TAG, '### BEEP ###');
	}

	function vibrate() {
		mock.log(_settings.TAG, '### VIBRATE ###');
	}

	mock.notification = {
        TAG: _settings.TAG,
        alert: alert,
        confirm: confirm,
        prompt: prompt,
        beep: beep,
        vibrate: vibrate
    };

    navigator.notification = mock.notification;

})(window.CdvMock, window.navigator);
var Connection = {
    UNKNOWN: "unknown",
    ETHERNET: "ethernet",
    WIFI: "wifi",
    CELL_2G: "2g",
    CELL_3G: "3g",
    CELL_4G: "4g",
    CELL:"cellular",
    NONE: "none"
};

(function CdvMockNetworkInformation(mock, navigator) {
    'use strict';

    var _settings = {
        TAG: 'App'
    };

    mock.connection = {
        TAG: _settings.TAG,
        type: Connection.WIFI
    };

    navigator.connection = mock.connection;

})(window.CdvMock, window.navigator);
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