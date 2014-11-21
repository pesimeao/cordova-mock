(function CdvMockEvents(mock, document) {
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
		if (!mock.events.isReady) {
			mock.events.deviceReady();
		}
	}, false);

})(window.CdvMock, window.document);