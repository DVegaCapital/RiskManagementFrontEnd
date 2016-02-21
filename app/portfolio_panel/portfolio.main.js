angular.module('dgammaApp')
    .controller('PortfolioMainCtrl', portfolioMainCtrl)
    .controller('PortfolioOverallCtrl', PortfolioOverallCtrl)
    .controller('PortfolioDetailCtrl', PortfolioDetailCtrl);

portfolioMainCtrl.$inject = ['$scope', 'PortfolioDetailQuery'];
function portfolioMainCtrl($scope, PortfolioDetailQuery) {
    /*
     var vm = this;

     PortfolioDetailQuery.jsonData().success(function (data) {
     $scope.portfolio = data;
     });
     */

    $scope.templates =
        [{name: 'portfolios', url: 'app/portfolio_overall/portfolio_overall.html'},
            {name: 'PortfolioDetails', url: 'app/portfolio_detail/portfolio_detail.html'}];

    $scope.template = $scope.templates[0];

    $scope.changeView = function (val) {
        $scope.template = $scope.templates[val];
    }

        // TODO service api design
     $scope.forwardTODetails = function(){
         alert('i am here');
     }

    /*    $scope.highchartsNG = {
     options: {
     chart: {
     type: 'pie'
     }
     },
     title: {
     text: 'PORTFOLIO ALLOCATION '
     },
     tooltip: {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions: {
     pie: {
     allowPointSelect: true,
     cursor: 'pointer',
     dataLabels: {
     enabled: true,
     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
     style: {
     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
     }
     }
     }
     },
     series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
     name: 'JP MORGAN',
     y: 56.33
     }, {
     name: 'CITI',
     y: 24.03
     }, {
     name: 'BANK OF AMERICA',
     y: 10.38
     }, {
     name: 'NOMURA',
     y: 4.77
     }, {
     name: 'MORGAN STANLEY',
     y: 0.91
     }, {
     name: 'Proprietary or Undetectable',
     y: 0.2
     }]
     }]
     }


     $scope.highchartsTA = {
     options: {
     chart: {
     type: 'bar'
     }
     },
     title: {
     text: 'PORTFOLIO PERFORMANCE'
     },
     xAxis: {
     categories: ['Morgan', 'JPMorgan', 'CITI', 'GOLDMAN', 'NOMURA']
     },
     yAxis: {
     min: 0,
     title: {
     text: 'Total fruit consumption'
     }
     },
     legend: {
     reversed: true
     },
     plotOptions: {
     series: {
     stacking: 'normal'
     }
     },
     series: [{
     name: 'Total Return',
     data: [5, 3, 4, 7, 2]
     }, {
     name: 'Var',
     data: [2, 2, 3, 2, 1]
     }, {
     name: 'Yield to Maturity',
     data: [3, 4, 4, 2, 5]
     }]
     }*/
}

PortfolioOverallCtrl.$inject = ['$window', '$scope', 'PortfolioDetailQuery'];
function PortfolioOverallCtrl($window, $scope, PortfolioDetailQuery) {

    PortfolioDetailQuery.jsonData().success(function (data) {
        $scope.portfolio = data;
    });

    $scope.templates =
        [{name: 'portfolios', url: 'app/portfolio_overall/portfolio_overall.html'},
            {name: 'PortfolioDetails', url: 'app/portfolio_detail/portfolio_detail.html'}];


    // TODO service api design
    $scope.forwardTODetails = function () {
        console.log('I am here')
        $scope.changeView(1);
/*        $scope.template = $scope.templates[1];*/
/*        $window.location.href = 'portfolio_detail.html'*/
    }

    /*    $scope.highchartsNG = {
     options: {
     chart: {
     type: 'pie'
     }
     },
     title: {
     text: 'PORTFOLIO ALLOCATION '
     },
     tooltip: {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions: {
     pie: {
     allowPointSelect: true,
     cursor: 'pointer',
     dataLabels: {
     enabled: true,
     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
     style: {
     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
     }
     }
     }
     },
     series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
     name: 'JP MORGAN',
     y: 56.33
     }, {
     name: 'CITI',
     y: 24.03
     }, {
     name: 'BANK OF AMERICA',
     y: 10.38
     }, {
     name: 'NOMURA',
     y: 4.77
     }, {
     name: 'MORGAN STANLEY',
     y: 0.91
     }, {
     name: 'Proprietary or Undetectable',
     y: 0.2
     }]
     }]
     }


     $scope.highchartsTA = {
     options: {
     chart: {
     type: 'bar'
     }
     },
     title: {
     text: 'PORTFOLIO PERFORMANCE'
     },
     xAxis: {
     categories: ['Morgan', 'JPMorgan', 'CITI', 'GOLDMAN', 'NOMURA']
     },
     yAxis: {
     min: 0,
     title: {
     text: 'Total fruit consumption'
     }
     },
     legend: {
     reversed: true
     },
     plotOptions: {
     series: {
     stacking: 'normal'
     }
     },
     series: [{
     name: 'Total Return',
     data: [5, 3, 4, 7, 2]
     }, {
     name: 'Var',
     data: [2, 2, 3, 2, 1]
     }, {
     name: 'Yield to Maturity',
     data: [3, 4, 4, 2, 5]
     }]
     }*/
}


PortfolioDetailCtrl.$inject = ['$scope', 'PortfolioDetailQuery'];
function PortfolioDetailCtrl($scope, PortfolioDetailQuery) {

    PortfolioDetailQuery.detailJSON().success(function (data) {
        $scope.portfolio = data;
    });

    /*    $scope.highchartsNG = {
     options: {
     chart: {
     type: 'pie'
     }
     },
     title: {
     text: 'PORTFOLIO ALLOCATION '
     },
     tooltip: {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions: {
     pie: {
     allowPointSelect: true,
     cursor: 'pointer',
     dataLabels: {
     enabled: true,
     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
     style: {
     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
     }
     }
     }
     },
     series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
     name: 'JP MORGAN',
     y: 56.33
     }, {
     name: 'CITI',
     y: 24.03
     }, {
     name: 'BANK OF AMERICA',
     y: 10.38
     }, {
     name: 'NOMURA',
     y: 4.77
     }, {
     name: 'MORGAN STANLEY',
     y: 0.91
     }, {
     name: 'Proprietary or Undetectable',
     y: 0.2
     }]
     }]
     }


     $scope.highchartsTA = {
     options: {
     chart: {
     type: 'bar'
     }
     },
     title: {
     text: 'PORTFOLIO PERFORMANCE'
     },
     xAxis: {
     categories: ['Morgan', 'JPMorgan', 'CITI', 'GOLDMAN', 'NOMURA']
     },
     yAxis: {
     min: 0,
     title: {
     text: 'Total fruit consumption'
     }
     },
     legend: {
     reversed: true
     },
     plotOptions: {
     series: {
     stacking: 'normal'
     }
     },
     series: [{
     name: 'Total Return',
     data: [5, 3, 4, 7, 2]
     }, {
     name: 'Var',
     data: [2, 2, 3, 2, 1]
     }, {
     name: 'Yield to Maturity',
     data: [3, 4, 4, 2, 5]
     }]
     }*/
}

