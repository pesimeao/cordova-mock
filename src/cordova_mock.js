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
