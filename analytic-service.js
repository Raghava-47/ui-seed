/*global define */
define(['angular', './sample-module'], function (angular, module) {
    'use strict';
    /**
    * PredixViewService is a sample angular service that integrates with Predix View Service API
    */
    module.factory('AnalyticService', ['$http', '$q', function ($http, $q) {
        return {
            baseUrl: 'https://analyitcData.run.aws-usw02-pr.ice.predix.io',
            getAnalyticScoreCard: function () {
                var deferred = $q.defer();
                $http.get(this.baseUrl + '/getanalyticdata')
                    .then(function (res) {
                        deferred.resolve(res.data);
                    },
                    function () {
                        deferred.reject('Error fetching the analytic data');
                    });
                return deferred.promise;
            }
        };
    }]);
});
