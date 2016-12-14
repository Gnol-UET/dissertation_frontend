angular.module('app', ['ui.router',
    'aboutModule',
    'facultyModule',
    'loginModule'
    // 'featureModule',
    // 'formModule',
    // 'ajaxModule',
    // 'plusModule',
    // 'todoModule'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        // nested list with custom controller
            .state('home', { //Định nghĩa 1 state
                url: '/home',     //Khai báo URl hiển thị
                templateUrl: 'modules/home.html', //Đường dẫn view
                controller: 'homeController',   //Khai báo Controller phụ vụ state này
                resolve: {
                    initialFaculty: ['facultyService',function(facultyService){
                        return facultyService.showFacultyList()
                            .then(function(response){
                                return response.data;
                            });
                    }]
                }
            })


    });

angular.module('app')
    .controller('homeController', function ($scope , $rootScope, facultyService, initialFaculty /*,injectables */) {
        
        $rootScope.hello = 'Hello'; //Xử lý logic ở đây
        $rootScope.loggedIn = false;

        $rootScope.listOfFaculty = [];
        $rootScope.listOfFaculty = initialFaculty;

    });