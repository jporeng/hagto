.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
  
  })    $urlRouterProvider.otherwise('/login');