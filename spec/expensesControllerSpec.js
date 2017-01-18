describe('expensesController', () => {
    var $controllerConstructor;
    var scope;


    beforeEach(() => {
        module('app');
    });


    beforeEach(() => {
        inject(function($controller, $rootScope) {
            $controllerConstructor = $controller;
            scope = $rootScope.$new();
        })
    });

    it('should have 3 expense items', () => {
        var ctrl = $controllerConstructor('expensesController', { $scope: scope });
        expect(ctrl.expenseItems.length).toBe(3);
    })
});