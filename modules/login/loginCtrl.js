angular.module('loginModule')
    .controller('loginController', function ($scope,$rootScope,authenService, $state) {
        $scope.user= {
            username:"",
            password:""
        };

        $scope.changePassword = {
            oldPassword: "",
            password: "",
            passwordRepeat: ""
        };

        $scope.changePasswordfnc = function() {

            var dto = {
                username: $rootScope.userInfo,
                oldpassword: $scope.changePassword.oldPassword,
                newpassword: $scope.changePassword.password
            };

            authenService.changePassword(dto)
                .then(
                    function (response) {
                        alert("Password changed successfully");
                        $('#changepassword-modal').modal('hide');
                    },
                    function (error, data) {
                        alert(error.data.message);
                    }
                )


        };

        if(localStorage.getItem("currentUser") != null){
            var accessible = false;
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            accessible = authenService.accessible(currentUser.username, currentUser.password);

            if(accessible == true){
                alert("Current user KHỚP Local Storage");
                $state.go("upload");
            }
            if(accessible == false){
                localStorage.removeItem("currentUser");
                alert("Thông tin current user  SAI LỆCH local storage\n Đăng nhập lại")
            }



        }

        if(localStorage.getItem("User-Data") == "undefined" || localStorage.getItem("User-Data") == null ){
            $rootScope.checkLogin = false;
        }
        else $rootScope.checkLogin = true;
        $scope.logout = function(){
            $rootScope.checkLogin = false;
            localStorage.clear();
            $state.reload();
        };

        if(localStorage.getItem("currentUser") == null){
            $scope.submit = function () {
                var accessible = false;
                currentUser = {
                    username:$scope.user.username,
                    password:$scope.user.password
                };
                authenService.login(currentUser)
                    .then(function (response) {
                        $rootScope.loggedIn = true;
                        console.log("loginSuccess");
                        console.log($rootScope.loggedIn);
                        $scope.displayName = {title: response.data.fullName};
                        $rootScope.tokenAuth = response.data.token;
                        $rootScope.username = response.data.fullName;
                        localStorage.setItem('User-Data',response.data.token);
                        localStorage.setItem('username',response.data.username);
                        localStorage.setItem('role',response.data.role);

                        $rootScope.username = localStorage['username'];
                        $rootScope.tokenAuth = localStorage['User-Data'];
                        $('#login-modal').modal('hide');
                        $rootScope.checkLogin = true;
                        $rootScope.userInfo = localStorage.getItem('username');
                        $state.go('faculty');
                    },function (error,data) {
                        alert("Invalid username or password");
                    });

                // if(accessible == true){
                //     localStorage.setItem("currentUser",  JSON.stringify(currentUser));
                //     alert("Đăng nhập thành công");
                //     $state.go('upload');
                // }
                // else{
                //     alert("Sai tên đăng nhập hoặc mật khẩu");
                // }
            };
        }


        $scope.plusMe = function () {
            $scope.result = authenService.cong2so($scope.so1,$scope.so2);
        }
    });