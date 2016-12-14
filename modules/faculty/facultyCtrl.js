angular.module('facultyModule')
    .controller('facultyController',
        function ($scope, $state, $rootScope, facultyService, initialFaculty) { // <- thêm service vào đây
        $rootScope.txx = false;
        $scope.listOfFaculty = [];
        $scope.listOfFaculty = initialFaculty; // <- lấy dữ liệu luôn để display
        $rootScope.loggedIn = false;
        $scope.loginingUser= {
            username:"",
            password:""
        };
        $scope.submit = function () {
            var request = {
                username: $scope.loginingUser.username,
                password: $scope.loginingUser.password
            };
            facultyService.login(request)
                .then(function (response) {
                    $rootScope.loggedIn = true;
                    console.log("loginSuccess");
                    console.log($rootScope.loggedIn);
                })
        }

        $scope.loginingUser= {
            username:"",
            password:""
        };
        $scope.submit = function () {
            var request = {
                username: $scope.loginingUser.username,
                password: $scope.loginingUser.password
            };
            facultyService.login(request)
                .then(function (response) {
                    $rootScope.loggedIn = true;
                    console.log("loginSuccess");
                    console.log($rootScope.loggedIn);
                })
        }

    });