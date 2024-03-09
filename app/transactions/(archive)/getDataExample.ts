// Currencies
export const currencies: Currency[] = [
    { id: 'usd', display: '$' },
    { id: 'eur', display: '€' },
    { id: 'gbp', display: '￡' },
  ];
  
  // Categories
  export const categories: Category[] = [
    { id: 'c1', baseName: 'Food', parentID: '', tags: ['grocery', 'restaurant'], note: '' },
    { id: 'c2', baseName: 'Transportation', parentID: '', tags: ['gas', 'public'], note: '' },
    { id: 'c3', baseName: 'Utilities', parentID: '', tags: ['electricity', 'water'], note: '' },
    { id: 'c4', baseName: 'Entertainment', parentID: '', tags: ['movies', 'concerts'], note: '' },
    { id: 'c5', baseName: 'Groceries', parentID: 'c1', tags: ['grocery'], note: '' },
    { id: 'c6', baseName: 'Restaurants', parentID: 'c1', tags: ['restaurant'], note: '' },
    { id: 'c7', baseName: 'Investments', parentID: '', tags: ['investments'], note: '' },
    { id: 'c8', baseName: 'Stocks', parentID: 'c7', tags: ['stocks'], note: '' },
    { id: 'c9', baseName: 'Bonds', parentID: 'c7', tags: ['bonds'], note: '' },
  ];
  
  // Accounts
  export const accounts: Account[] = [
    { id: 'a1', name: 'Checking Account', type: 'bank', currenciesSupported: ['usd'], note: '' },
    { id: 'a2', name: 'Savings Account', type: 'bank', currenciesSupported: ['usd'], note: '' },
    { id: 'a3', name: 'Credit Card', type: 'credit', currenciesSupported: ['usd'], note: '' },
    { id: 'aGBP4', name: 'Euro Account', type: 'bank', currenciesSupported: ['eur', 'gbp'], note: '' },
    { id: 'kite', name: 'Zerodha Kite Account', type: 'stocks', currenciesSupported: ['%stocks%'], note: '' },
  ];
  
  // Transactions
  export const transactions: Transaction[] = [
    {
      id: 't1',
      name: 'Grocery Shopping',
      date: 1680556800000, // March 3, 2023
      categoryID: 'c5',
      amounts: [{ amount: 75.25, accountID: 'a1', currencyID: 'usd' }],
      tags: ['grocery'],
      note: '',
    },
    {
      id: 't2',
      name: 'Dinner at Italian Restaurant',
      date: 1680643200000, // March 4, 2023
      categoryID: 'c6',
      amounts: [{ amount: 48.75, accountID: 'a3', currencyID: 'usd' }],
      tags: ['restaurant'],
      note: '',
    },
    {
      id: 't3',
      name: 'Gas Fill-up',
      date: 1680729600000, // March 5, 2023
      categoryID: 'c2',
      amounts: [{ amount: 35.80, accountID: 'a1', currencyID: 'usd' }],
      tags: ['gas'],
      note: '',
    },
    {
      id: 't4',
      name: 'Electricity Bill',
      date: 1680816000000, // March 6, 2023
      categoryID: 'c3',
      amounts: [{ amount: 125.40, accountID: 'a1', currencyID: 'usd' }],
      tags: ['electricity'],
      note: '',
    },
    {
      id: 't5',
      name: 'Movie Tickets',
      date: 1680902400000, // March 7, 2023
      categoryID: 'c4',
      amounts: [{ amount: 22.50, accountID: 'a3', currencyID: 'usd' }],
      tags: ['movies'],
      note: '',
    },
    {
      id: 't6',
      name: 'Grocery Shopping',
      date: 1680988800000, // March 8, 2023
      categoryID: 'c5',
      amounts: [{ amount: 68.95, accountID: 'a1', currencyID: 'usd' }],
      tags: ['grocery'],
      note: '',
    },
    {
      id: 't7',
      name: 'Dinner at Mexican Restaurant',
      date: 1681075200000, // March 9, 2023
      categoryID: 'c6',
      amounts: [{ amount: 55.20, accountID: 'a3', currencyID: 'usd' }],
      tags: ['restaurant'],
      note: '',
    },
    {
      id: 't8',
      name: 'Bus Fare',
      date: 1681161600000, // March 10, 2023
      categoryID: 'c2',
      amounts: [{ amount: 2.75, accountID: 'a1', currencyID: 'usd' }],
      tags: ['public'],
      note: '',
    },
    {
      id: 't9',
      name: 'Water Bill',
      date: 1681248000000, // March 11, 2023
      categoryID: 'c3',
      amounts: [{ amount: 45.80, accountID: 'a1', currencyID: 'usd' }],
      tags: ['water'],
      note: '',
    },
    {
      id: 't10',
      name: 'Concert Tickets',
      date: 1681334400000, // March 12, 2023
      categoryID: 'c4',
      amounts: [{ amount: 120.00, accountID: 'a3', currencyID: 'usd' }],
      tags: ['concerts'],
      note: '',
    },
    {
      id: 't11',
      name: 'Grocery Shopping',
      date: 1681420800000, // March 13, 2023
      categoryID: 'c5',
      amounts: [{ amount: 92.65, accountID: 'a1', currencyID: 'usd' }],
      tags: ['grocery'],
      note: '',
    },
    {
      id: 't12',
      name: 'Dinner at Sushi Restaurant',
      date: 1681507200000, // March 14, 2023
      categoryID: 'c6',
      amounts: [{ amount: 72.40, accountID: 'a3', currencyID: 'usd' }],
      tags: ['restaurant'],
      note: '',
    },
    {
      id: 't13',
      name: 'Gas Fill-up',
      date: 1681593600000, // March 15, 2023
      categoryID: 'c2',
      amounts: [{ amount: 42.15, accountID: 'a1', currencyID: 'usd' }],
      tags: ['gas'],
      note: '',
    },
    {
      id: 't14',
      name: 'Internet Bill',
      date: 1681680000000, // March 16, 2023
      categoryID: 'c3',
      amounts: [{ amount: 65.00, accountID: 'a1', currencyID: 'usd' }],
      tags: ['utilities'],
      note: '',
    },
    {
      id: 't15',
      name: 'Movie Tickets',
      date: 1681766400000, // March 17, 2023
      categoryID: 'c4',
      amounts: [{ amount: 18.00, accountID: 'a3', currencyID: 'usd' }],
      tags: ['movies'],
      note: '',
    },
    {
      id: 't16',
      name: 'Grocery Shopping',
      date: 1681852800000, // March 18, 2023
      categoryID: 'c5',
      amounts: [{ amount: 58.75, accountID: 'a1', currencyID: 'usd' }],
      tags: ['grocery'],
      note: '',
    },
    {
      id: 't17',
      name: 'Dinner at Thai Restaurant',
      date: 1681939200000, // March 19, 2023
      categoryID: 'c6',
      amounts: [{ amount: 65.80, accountID: 'a3', currencyID: 'usd' }],
      tags: ['restaurant'],
      note: '',
    },
    {
      id: 't18',
      name: 'Taxi Ride',
      date: 1682025600000, // March 20, 2023
      categoryID: 'c2',
      amounts: [{ amount: 12.50, accountID: 'a1', currencyID: 'usd' }],
      tags: ['public'],
      note: '',
    },
    {
      id: 't19',
      name: 'Phone Bill',
      date: 1682112000000, // March 21, 2023
      categoryID: 'c3',
      amounts: [{ amount: 85.00, accountID: 'a1', currencyID: 'usd' }],
      tags: ['utilities'],
      note: '',
    },
    {
      id: 't20',
      name: 'Concert Tickets',
      date: 1682198400000, // March 22, 2023
      categoryID: 'c4',
      amounts: [{ amount: 90.00, accountID: 'a3', currencyID: 'usd' }],
      tags: ['concerts'],
      note: '',
    },
    {
      id: 't21',
      name: 'Grocery Shopping',
      date: 1682284800000, // March 23, 2023
      categoryID: 'c5',
      amounts: [{ amount: 72.40, accountID: 'a1', currencyID: 'usd' }],
      tags: ['grocery'],
      note: '',
    },
    {
      id: 't22',
      name: 'Dinner at Japanese Restaurant',
      date: 1682371200000, // March 24, 2023
      categoryID: 'c6',
      amounts: [{ amount: 85.25, accountID: 'a3', currencyID: 'usd' }],
      tags: ['restaurant'],
      note: '',
    },
    {
      id: 't23',
      name: 'Gas Fill-up',
      date: 1682457600000, // March 25, 2023
      categoryID: 'c2',
      amounts: [{ amount: 38.60, accountID: 'a1', currencyID: 'usd' }],
      tags: ['gas'],
      note: '',
    },
    {
      id: 't24',
      name: 'Cable TV Bill',
      date: 1682544000000, // March 26, 2023
      categoryID: 'c3',
      amounts: [{ amount: 75.00, accountID: 'a1', currencyID: 'usd' }],
      tags: ['utilities'],
      note: '',
    },
    {
      id: 't25',
      name: 'Movie Tickets',
      date: 1682630400000, // March 27, 2023
      categoryID: 'c4',
      amounts: [{ amount: 24.00, accountID: 'a3', currencyID: 'usd' }],
      tags: ['movies'],
      note: '',
    },
    {
      id: 't26',
      name: 'Grocery Shopping',
      date: 1682716800000, // March 28, 2023
      categoryID: 'c5',
      amounts: [{ amount: 65.20, accountID: 'a1', currencyID: 'usd' }],
      tags: ['grocery'],
      note: '',
    },
    {
      id: 't27',
      name: 'Dinner at Indian Restaurant',
      date: 1682803200000, // March 29, 2023
      categoryID: 'c6',
      amounts: [{ amount: 52.75, accountID: 'a3', currencyID: 'usd' }],
      tags: ['restaurant'],
      note: '',
    },
    {
      id: 't28',
      name: 'Train Ticket',
      date: 1682889600000, // March 30, 2023
      categoryID: 'c2',
      amounts: [{ amount: 18.50, accountID: 'a1', currencyID: 'usd' }],
      tags: ['public'],
      note: '',
    },
    {
      id: 't29',
      name: 'Electricity Bill',
      date: 1682976000000, // March 31, 2023
      categoryID: 'c3',
      amounts: [{ amount: 110.80, accountID: 'a1', currencyID: 'usd' }],
      tags: ['electricity'],
      note: '',
    },
    {
      id: 't30',
      name: 'Concert Tickets',
      date: 1683062400000, // April 1, 2023
      categoryID: 'c4',
      amounts: [{ amount: 135.00, accountID: 'a3', currencyID: 'usd' }],
      tags: ['concerts'],
      note: '',
    },
  ];