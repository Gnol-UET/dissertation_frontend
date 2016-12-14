//Nhớ thêm tên module vào app.js
angular.module('facultyModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/faculty');

        $stateProvider
        // nested list with custom controller
            .state('faculty', { //Định nghĩa 1 state
                url: '/faculty',     //Khai báo URl hiển thị
                templateUrl: 'modules/faculty/faculty.html', //Đường dẫn view: modules/about/about.html
                controller: 'facultyController',  //Khai báo Controller phụ vụ state này
                resolve: {
                    initialFaculty: ['facultyService',function(facultyService){
                        //initialFaculty: một tên service bất kỳ, để gửi sang Controller
                        //tôi dùng để sau load trang nó lấy dữ liệu luôn
                        return facultyService.showFacultyList()
                            .then(function(response){
                                return response.data;
                            });
                    }]

                }
            })

           	.state('faculty.intro', {
           		url: '/',
           		templateUrl: 'modules/faculty/html/faculty_intro.html'
           	})

           	.state('faculty.TeacherInfo', {
           		url: '/',
           		templateUrl : 'modules/faculty/html/faculty_teacher_info.html',
           		controller: 'TeacherInfoController'
           	})

            .state('faculty.StudentInfo', {
              url: '/',
              templateUrl: 'modules/faculty/html/faculty_student_info.html',
              controller: 'StudentInfoController'
            })

            .state('faculty.CourseInfo', {
              url: '/',
              templateUrl: 'modules/faculty/html/faculty_course_info.html',
              controller: 'CourseInfoController'
            })

            .state('faculty.Course', {
              url: '/',
              templateUrl: 'modules/faculty/html/faculty_course.html',
              controller: 'CourseController'
            })

            .state('faculty.DissertationRegister', {
              url: '/',
              templateUrl: 'modules/faculty/html/faculty_dissertation_register.html',
              controller: 'DissertationRegisterController'
            })

            .state('faculty.Dissertation', {
              url: '/',
              templateUrl: 'modules/faculty/html/faculty_dissertation.html',
              controller: 'DissertationController'
            });


    });

//sub-modules    
angular.module('facultyModule')
  .controller('TeacherInfoController',function ($scope, $rootScope, facultyService) {

      $scope.uploadFile = function() {
        console.log($scope.myFile.name);
      }

  });

angular.module('facultyModule')
  .controller('StudentInfoController',function ($scope) {

  });  

angular.module('facultyModule')
  .controller('CourseInfoController',function ($scope) {

  });  

angular.module('facultyModule')
  .controller('CourseController',function ($scope) {

  });  

angular.module('facultyModule')
  .controller('DissertationRegisterController',function ($scope, $rootScope, facultyService) {
      $scope.openRegister= function () {
          facultyService.openRegister()
              .then(function (response) {
                      $rootScope.currentRegisterStatus = "Đang mở đăng ký";
                      console.log(response);
                  },
                  function (error,data) {
                      console.log("error");
                  })
      };
      $scope.closeRegister = function () {
          facultyService.closeRegister()
              .then(function (response) {
                      $rootScope.currentRegisterStatus = "Cổng đăng ký đóng";
                      console.log(response);
                  },
                  function (error,data) {
                      console.log("error");
                  })
      };
  });  


angular.module('facultyModule')
  .controller('DissertationController',function ($scope) {

  });  
