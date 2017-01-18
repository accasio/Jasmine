(function() {
    'use strict';
    
        angular
            .module('app')
            .factory('expensesDataService', expensesDataService);
    
        expensesDataService.inject = ['$http'];
        function expensesDataService($http) {
            var service = {
                getExpenses:getExpenses
            };
            
            return service;
    
            ////////////////
            function getExpenses() {
                return [{title: 'Taxi',description: 'To airport',amount: 89.95}, 
                { title: 'Lunch', description: 'At airport', amount: 15.40 },
                { title: 'Coffee', description: 'On plane', amount: 4.93 }]
             }
        }
})();