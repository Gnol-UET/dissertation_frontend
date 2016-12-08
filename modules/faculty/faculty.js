//Nhớ thêm tên module vào app.js
angular.module('facultyModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('faculty', { //Định nghĩa 1 state
                url: '/faculty',     //Khai báo URl hiển thị
                templateUrl: 'modules/faculty/faculty.html', //Đường dẫn view: modules/about/about.html
                controller: 'facultyController'   //Khai báo Controller phụ vụ state này
            })


    });
