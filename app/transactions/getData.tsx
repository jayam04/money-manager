// TODO: remove
export const currencies: Currency[] = [
  { id: "USD", display: "US Dollar" },
  { id: "EUR", display: "Euro" },
];
export const accounts: Account[] = [
  {
    id: "acc1",
    name: "Savings Account",
    type: "Savings",
    currenciesSupported: ["USD"],
    note: "Personal savings",
  },
  {
    id: "acc2",
    name: "Checking Account",
    type: "Checking",
    currenciesSupported: ["USD", "EUR"],
    note: "Main spending account",
  },
];
export const categories: Category[] = [
  {
    id: "cat1",
    baseName: "Groceries",
    parentID: "",
    tags: ["food", "groceries"],
    note: "Monthly grocery expenses",
  },
  {
    id: "cat2",
    baseName: "Dining Out",
    parentID: "",
    tags: ["food", "dining"],
    note: "Eating out at restaurants",
  },
];
export const transactions: Transaction[] = [
  {
    id: "txn1",
    name: "Grocery Shopping",
    date: Date.now(),
    categoryID: "cat1",
    amounts: [
      { amount: 50, accountID: "acc1", currencyID: "USD" },
      { amount: -50, accountID: "acc2", currencyID: "USD" },
    ],
    tags: ["shopping", "groceries"],
    note: "Bought groceries for the week",
  },
  {
    id: "txn2",
    name: "Dinner at Restaurant",
    date: Date.now(),
    categoryID: "cat2",
    amounts: [{ amount: 30, accountID: "acc2", currencyID: "USD" }],
    tags: ["dining", "restaurant"],
    note: "Enjoyed a meal at a local restaurant",
  },
  // Add more transactions as needed
];
export const additionalTransactions: Transaction[] = [
  {
    id: "txn3",
    name: "Online Shopping",
    date: Date.now(),
    categoryID: "cat1",
    amounts: [{ amount: 75, accountID: "acc1", currencyID: "USD" }],
    tags: ["shopping", "online-shopping"],
    note: "Purchased items online",
  },
  {
    id: "txn4",
    name: "Coffee Break",
    date: Date.now(),
    categoryID: "cat2",
    amounts: [{ amount: 5, accountID: "acc2", currencyID: "USD" }],
    tags: ["coffee", "break"],
    note: "Bought a cup of coffee during a break",
  },
  {
    id: "txn5",
    name: "Bookstore Visit",
    date: Date.now(),
    categoryID: "cat1",
    amounts: [{ amount: 20, accountID: "acc1", currencyID: "USD" }],
    tags: ["shopping", "books"],
    note: "Purchased new books at the bookstore",
  },
  {
    id: "txn6",
    name: "Lunch with Friends",
    date: Date.now(),
    categoryID: "cat2",
    amounts: [{ amount: 40, accountID: "acc2", currencyID: "USD" }],
    tags: ["dining", "lunch", "friends"],
    note: "Had lunch with friends at a local cafe",
  },
  {
    id: "txn7",
    name: "Tech Gadgets",
    date: Date.now(),
    categoryID: "cat1",
    amounts: [{ amount: 200, accountID: "acc1", currencyID: "USD" }],
    tags: ["shopping", "gadgets"],
    note: "Bought new tech gadgets online",
  },
  {
    id: "txn8",
    name: "Movie Night",
    date: Date.now(),
    categoryID: "cat2",
    amounts: [{ amount: 25, accountID: "acc2", currencyID: "USD" }],
    tags: ["entertainment", "movies"],
    note: "Watched a movie at the cinema",
  },
  {
    id: "txn9",
    name: "Fitness Class",
    date: Date.now(),
    categoryID: "cat1",
    amounts: [{ amount: 30, accountID: "acc1", currencyID: "USD" }],
    tags: ["fitness", "exercise"],
    note: "Attended a fitness class at the gym",
  },
  {
    id: "txn10",
    name: "Weekend Getaway",
    date: Date.now(),
    categoryID: "cat2",
    amounts: [{ amount: 150, accountID: "acc2", currencyID: "USD" }],
    tags: ["travel", "weekend"],
    note: "Spent the weekend at a nearby getaway",
  },
];
export const allTransactions: Transaction[] = transactions.concat(
  additionalTransactions
);

export async function getData(): Promise<Transaction[]> {
  console.log(allTransactions);
  // Fetch data from your API here.
  return allTransactions;
}
