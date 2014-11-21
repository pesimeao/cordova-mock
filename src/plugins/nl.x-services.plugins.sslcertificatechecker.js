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