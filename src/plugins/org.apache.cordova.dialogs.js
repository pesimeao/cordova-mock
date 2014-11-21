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