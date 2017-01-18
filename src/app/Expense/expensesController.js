(function() {
    'use strict';

    angular
        .module('app')
        .controller('expensesController', expensesController);

    expensesController.inject = ['$location', 'expensesDataService'];

    function expensesController($location, expensesDataService) {
        var vm = this;
        vm.search = search;
        vm.expenseItems = [];
        vm.activate = activate();
        activate();

        ////////////////

        function search(loc) {
            $location.path(loc);
        }

        function activate() {
            return vm.expenseItems = expensesDataService.getExpenses();
        }
    }
})();