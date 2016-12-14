angular.module('facultyModule')
    .controller('facultyController',
        function ($scope, $state, $rootScope, facultyService, initialFaculty, importService ) { // <- thêm service vào đây
        $rootScope.txx = false;
        $scope.listOfFaculty = [];
        $scope.listOfFaculty = initialFaculty; // <- lấy dữ liệu luôn để display
        $scope.listOfTeacher = [];
        $scope.tableTeacher = false;
        $rootScope.isOpenForRegister = false;
        $rootScope.currentRegisterStatus = "Đang mở đăng ký";


        $scope.getListOfTeacher = function () {
            facultyService.showAllTeacher()
                .then(function (response) {
                    $scope.listOfTeacher= response.data;
                    $scope.tableTeacher = true;
                    console.log(response);
                },
                function (error,data) {
                    console.log("error");
                })
        };
        $scope.form = {
            from: "Buxfer",
            file: []
        };

        $scope.executeImport = function executeImport(importFile) {
            var promise = importService.importBuxfer({
                file: importFile

            });

            promise.success(function () {

                $scope.successful = true;
                alert("Upload successful!");

            }).catch(function () {

            })
        };
        $scope.studentexecuteImport = function studentexecuteImport(importFile) {
            var promise = importService.studentimportBuxfer({
                file: importFile

            });

            promise.success(function () {

                $scope.successful = true;
                alert("Upload successful!");
            }).catch(function () {

            })
        };

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
        };

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
        };
        $scope.isMod = false;
        var role = localStorage.getItem("role");
        if(role == "MODERATOR") {
            $scope.isMod = true;
        };



    });