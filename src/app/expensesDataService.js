(function() {
    'use strict';

    angular
        .module('app')
        .factory('expensesDataService', expensesDataService);

    expensesDataService.inject = ['$http'];

    function expensesDataService($http) {
        var service = {
            getExpenses: getExpenses,
            persistExpenses: persistExpenses
        };

        return service;

        ////////////////
        function getExpenses() {
            return [new ExpenseItem('Taxi', 'To airport', 89.95),
                new ExpenseItem('Lunch', 'At airport', 15.40),
                new ExpenseItem('Coffee', 'On plane', 4.93)
            ]
        }
        
        function reportExpenses() {
            
        }

        function persistExpenses(reportExpenses) {
            var success = true;
            if(success){
                reportExpenses();
            }
        }
    }
})();