(function () {
    'use strict';

    angular
        .module('facultyModule')
        .factory('importService', importService);


    function importService($http, Upload) {

        return {
            importBuxfer: importBuxfer
        };

        /////////////////

        function importBuxfer(opts) {
            return Upload.upload({
                url: 'http://127.0.0.1:8090/faculty/createteacher',
                method: 'POST',
                data: {file: opts.file}

            });
        }
    }

})();