(function () {
    'use strict';

    angular
        .module('facultyModule')
        .factory('importService', importService);


    function importService($http, Upload) {

        return {
            importBuxfer: importBuxfer,
            studentimportBuxfer:studentimportBuxfer
        };

        /////////////////

        function importBuxfer(opts) {
            return Upload.upload({
                url: 'http://127.0.0.1:8090/faculty/createteacher',
                method: 'POST',
                data: {file: opts.file}

            });
        }
        function studentimportBuxfer(opts) {
            return Upload.upload({
                url: 'http://127.0.0.1:8090/faculty/createstudent',
                method: 'POST',
                data: {file: opts.file}

            });
        }
    }

})();