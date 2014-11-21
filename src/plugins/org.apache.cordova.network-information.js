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