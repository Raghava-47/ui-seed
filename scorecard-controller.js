define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('ScoreCardCtrl', ['$scope', '$log', 'AnalyticService', function ($scope, $log, AnalyticService) {

        AnalyticService.getAnalyticScoreCard().then(function (data) {

            
            $scope.analyticData = data;
            
        }, function (message) {
            $log.error(message);
        });
    


        
    }]);
});
