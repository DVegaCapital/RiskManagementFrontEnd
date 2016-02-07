

    angular
        .module('dgammaApp')
        .factory('PortfolioDetailQuery', PortfolioDetailQuery);


    PortfolioDetailQuery.$inject = ['$http'];

    function PortfolioDetailQuery($http) {
        var portfolioDetailValue = {};

        portfolioDetailValue.jsonData = function () {
            return $http.get('/app/mock_data/equityTrendPortfolio.json');
        }

        return portfolioDetailValue;
    };


