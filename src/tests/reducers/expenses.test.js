import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: -1
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const newExpense = {
        id: 4,
        description: 'React course',
        note: '',
        amount: 1299,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE', 
        expense: newExpense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, newExpense]);
});

test('Should edit expense by id', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE', 
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toEqual(amount);
});

test('Should edit expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE', 
        id: -1,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});