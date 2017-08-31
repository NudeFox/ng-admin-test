import moment from 'moment';
import dashboardSummaryTemplate from './dashboardSummary.html';

// var oneMonthAgo = moment().subtract(1, 'months').toDate();

var has_seen_alert = false;

function dashboardSummary(Restangular) {
    'use strict';

    return {
        restrict: 'E',
        scope: {},
        controller: ['$scope', function($scope) {
            $scope.stats = {};
            $scope.has_seen_alert = has_seen_alert;
            $scope.dismissAlert = () => {
                has_seen_alert = true;
                $scope.has_seen_alert = true;
            };
            Restangular
                .all('users')
                .getList({range: '[1,5]', sort: '["user_name","DESC"]'})
                .then(users => {
                    $scope.stats.users = users.data.reduce(nb => ++nb, 0)
                });
        }],
        template: dashboardSummaryTemplate
    };
}

dashboardSummary.$inject = ['Restangular'];

export default dashboardSummary;
