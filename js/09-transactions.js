import transactionHistory from './data/transactions.js'

const makeTransactionRowMarkup = ({id, amount, date, business, type, name, account}) => {
    
    return `<tr>
                <td>${id}</th>
                <td>${amount}</th>
                <td>${date}</th>
                <td>${business}</th>
                <td>${type}</th>
                <td>${name}</th>
                <td>${account}</th>
            </tr>`;
};
console.log(transactionHistory);
console.log(makeTransactionRowMarkup(transactionHistory[0]));

const makeTransactionTableRows = transactionHistory.map(makeTransactionRowMarkup).join('');
console.log(makeTransactionTableRows);

const tableEl = document.querySelector('.js-transaction-table');
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);