// services/ExpenseService.js
class ExpenseService {
  constructor() {
    this.expenses = [];
    this.nextId = 1;
  }

addExpense(newExpense) {
    const expense = { id: this.nextId, ...newExpense };
    this.expenses.push(expense);
    this.nextId++;
    return [...this.expenses];
  }

  getExpenses() {
    return this.expenses;
  }

  getTotalByCategory(category) {
    return this.expenses.filter((item) => item.category === category)
      .reduce((total, item) => total + item.amount, 0);
  }

  getTotalExpenses() {
    return this.expenses.reduce((total, item) => total + item.amount, 0);
  }

  // Métodos adicionales
  getExpenseById(id) {
    return this.expenses.find((expense) => expense.id === id);
  }

  updateExpense(id, updatedExpense) {
    const index = this.expenses.findIndex((expense) => expense.id === id);
    if (index !== -1) {
      this.expenses[index] = { id, ...updatedExpense };
      return this.expenses[index];
    }
    return null;
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter((expense) => expense.id !== id);
  }
}

export default new ExpenseService();