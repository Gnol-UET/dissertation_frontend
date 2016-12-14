//Nhớ thêm tên service vào controller
angular.module('app')
    .service('authenService', function ($http) {
        var service = {
            accessible : checkAccessible,
            login:login
        };
        return service;

        function login(opts) {
            return $http({
                url: 'http://127.0.0.1:8090/login',
                method: 'POST',
                data: opts
            })

        }
        function checkAccessible(username, password) {
            var accessible = false;
            // localStorage.getItem(username) == pa
            for (var i = 0; i < localStorage.length; i++) {
                if(username == localStorage.key(i)){
                    localAcc = JSON.parse(localStorage.getItem(username));
                    if(password == localAcc.password){
                        accessible=true;
                        break;
                    }
                }
            }
            return accessible


        }
    });