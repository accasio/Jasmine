describe('Expense objects', () => {

    var expenseItem;
    var expense;
    beforeEach(() => {
        expenseItem = new ExpenseItem(100);
        expense = new Expense(expenseItem);
    });
    it('should be of type ExpenseItem', function() {
        expect(expense.expenseItem).toBe(expenseItem);
    });
    it('should be dollar amount', () => {
        expect(expenseItem.amount).toEqual(100)
    });
});