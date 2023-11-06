import walletTypes from "./wallet_types.json"

export const transactions = [
    {
      "id": "transaction12",
      "date": "2020-01-01",
      "description": "Burger",
      "type": "expense",
      "category": "Fast Food",
      "accounts": {
        "3": -99
      }
    },
    {
      "id": "transaction10",
      "date": "2020-01-11",
      "description": "Shoes",
      "type": "expense",
      "category": "Shoes",
      "accounts": {
        "0": -100,
        "4": -345
      }
    },
    {
      "id": "transaction11",
      "date": "2020-01-12",
      "description": "Cashback on Shoes",
      "type": "income",
      "category": "Cashback",
      "accounts": {
        "4": 34
      }
    },
    {
      "id": "transaction13",
      "date": "2020-01-13",
      "description": "Gas",
      "type": "expense",
      "category": "Gas",
      "accounts": {
        "2": -500
      }
    },
    {
      "id": "transaction14",
      "date": "2020-01-13",
      "description": "Transfer",
      "type": "transfer",
      "category": "Accounts",
      "accounts": {
        "2": -7298,
        "0": 89,
      }
    },
    {
      "id": "transaction1",
      "date": "2020-01-02",
      "description": "Expense 1",
      "type": "expense",
      "category": "Groceries",
    },
    {
      "id": "transaction2",
      "date": "2020-01-03",
      "description": "Expense 2",
      "type": "expense",
      "category": "Movies",
      "accounts": {
        "0": -15,
        "2": 15
      }
    },
    {
      "id": "transaction3",
      "date": "2020-01-04",
      "description": "Expense 3",
      "type": "expense",
      "category": "Gas",
      "accounts": {
        "0": -30,
        "3": 30
      }
    },
    {
      "id": "transaction4",
      "date": "2020-01-05",
      "description": "Expense 4",
      "type": "expense",
      "category": "Clothing",
      "accounts": {
        "0": -50,
        "1": 50
      }
    },
    {
      "id": "transaction5",
      "date": "2020-01-06",
      "description": "Expense 5",
      "type": "expense",
      "category": "Dining Out",
      "accounts": {
        "0": -40,
        "2": 40
      }
    },
    {
      "id": "transaction6",
      "date": "2020-01-07",
      "description": "Expense 6",
      "type": "expense",
      "category": "Concert",
      "accounts": {
        "0": -60,
        "3": 60
      }
    },
    {
      "id": "transaction7",
      "date": "2020-01-08",
      "description": "Expense 7",
      "type": "expense",
      "category": "Electronics",
      "accounts": {
        "0": -70,
        "1": 70
      }
    },
    {
      "id": "transaction8",
      "date": "2020-01-09",
      "description": "Expense 8",
      "type": "expense",
      "category": "Groceries",
      "accounts": {
        "0": -25,
        "2": 25
      }
    },
    {
      "id": "transaction9",
      "date": "2020-01-10",
      "description": "Expense 9",
      "type": "expense",
      "category": "Bus Fare",
      "accounts": {
        "0": -10,
        "3": 10
      }
    },
    {
      "id": "transaction15",
      "date": "2023-11-06",
      "description": "Coffee",
      "type": "expense",
      "category": "Food and Drink",
      "accounts": {
        "0": -5
      }
    },
    {
      "id": "transaction16",
      "date": "2023-11-06",
      "description": "Taxi",
      "type": "expense",
      "category": "Transportation",
      "accounts": {
        "0": -20
      }
    },
    {
      "id": "transaction17",
      "date": "2023-11-06",
      "description": "Movie tickets",
      "type": "expense",
      "category": "Entertainment",
      "accounts": {
        "0": -30
      }
    },
    {
      "id": "transaction18",
      "date": "2023-11-07",
      "description": "Groceries",
      "type": "expense",
      "category": "Food and Drink",
      "accounts": {
        "0": -50
      }
    },
    {
      "id": "transaction19",
      "date": "2023-11-07",
      "description": "Gas",
      "type": "expense",
      "category": "Transportation",
      "accounts": {
        "0": -25
      }
    },
    {
      "id": "transaction20",
      "date": "2023-11-07",
      "description": "Internet bill",
      "type": "expense",
      "category": "Bills",
      "accounts": {
        "0": -75
      }
    },
    {
      "id": "transaction21",
      "date": "2023-11-08",
      "description": "Salary",
      "type": "income",
      "category": "Employment",
      "accounts": {
        "0": 2000
      }
    },
    {
      "id": "transaction22",
      "date": "2023-11-08",
      "description": "Transfer to savings account",
      "type": "transfer",
      "category": "Accounts",
      "accounts": {
        "0": -500,
        "1": 500
      }
    },
    {
      "id": "transaction23",
      "date": "2023-11-09",
      "description": "Gym membership",
      "type": "expense",
      "category": "Health and Fitness",
      "accounts": {
        "0": -50
      }
    },
    {
      "id": "transaction24",
      "date": "2023-11-09",
      "description": "Lunch at work",
      "type": "expense",
      "category": "Food and Drink",
      "accounts": {
        "0": -10
      }
    },
    {
      "id": "transaction25",
      "date": "2023-11-09",
      "description": "Coffee with friends",
      "type": "expense",
      "category": "Social",
      "accounts": {
        "0": -5
      }
    },
    {
      "id": "transaction26",
      "date": "2023-11-10",
      "description": "New phone",
      "type": "expense",
      "category": "Electronics",
      "accounts": {
        "0": -700
      }
    },
    {
      "id": "transaction27",
      "date": "2023-11-10",
      "description": "Gifts for family",
      "type": "expense",
      "category": "Gifts",
      "accounts": {
        "0": -100
      }
    },
    {
      "id": "transaction29",
      "date": "2023-11-11",
      "description": "Dinner at a restaurant",
      "type": "expense",
      "category": "Food and Drink",
      "accounts": {
        "0": -75
      }
    },
    {
      "id": "transaction30",
      "date": "2023-11-11",
      "description": "Movie tickets",
      "type": "expense",
      "category": "Entertainment",
      "accounts": {
        "0": -30
      }
    },
    {
      "id": "transaction31",
      "date": "2023-11-12",
      "description": "Groceries",
      "type": "expense",
      "category": "Food and Drink",
      "accounts": {
        "0": -50
      }
    },
    {
      "id": "transaction32",
      "date": "2023-11-12",
      "description": "Gas",
      "type": "expense",
      "category": "Transportation",
      "accounts": {
        "0": -25
      }
    },
    {
      "id": "transaction33",
      "date": "2023-11-12",
      "description": "Electric bill",
      "type": "expense",
      "category": "Bills",
      "accounts": {
        "0": -100
      }
    },
    {
      "id": "transaction34",
      "date": "2023-11-13",
      "description": "New clothes",
      "type": "expense",
      "category": "Clothing",
      "accounts": {
        "0": -150
      }
    },
    {
      "id": "transaction35",
      "date": "2023-11-13",
      "description": "Lunch with friends",
      "type": "expense",
      "category": "Social",
      "accounts": {
        "0": -15
      }
    },
    {
      "id": "transaction36",
      "date": "2023-11-13",
      "description": "Coffee on the go",
      "type": "expense",
      "category": "Food and Drink",
      "accounts": {
        "0": -5
      }
    },
    {
      "id": "transaction37",
      "date": "2023-11-14",
      "description": "Car insurance payment",
      "type": "expense",
      "category": "Bills",
      "accounts": {
        "0": -150
      }
    },
    {
      "id": "transaction38",
      "date": "2023-11-14",
      "description": "Haircut",
      "type": "expense",
      "category": "Personal Care",
      "accounts": {
        "0": -25
      }
    },
    {
      "id": "transaction39",
      "date": "2023-11-14",
      "description": "Donation to charity",
      "type": "expense",
      "category": "Charity",
      "accounts": {
        "0": -50
      }
    },
    {
      "id": "transaction40",
      "date": "2023-11-15",
      "description": "Groceries",
      "type": "expense",
      "category": "Food and Drink",
      "accounts": {
        "0": -50
      }
    },
    {
      "id": "transaction41",
      "date": "2023-11-15",
      "description": "Gas",
      "type": "expense",
      "category": "Transportation",
      "accounts": {
        "0": -25
      }
    },
];

export const accounts: {[key: string]: {name: string, type: string, currencies: string[], color: string}} = {
    "0": {
        "name": "Cash",
        "type": "cash",
        "currencies": ["USD"],
        "color": "#ff0000"
    },
    "1": {
        "name": "Bank 1",
        "type": "bankaccount",
        "currencies": ["INR"],
        "color": "#ff0000"
    },
    "2": {
        "name": "Cash (INR)",
        "type": "cash",
        "currencies": ["INR"],
        "color": "#ff0000"
    },
    "3": {
        "name": "Big Savings Credit Card",
        "type": "creditcard",
        "currencies": ["INR"],
        "color": "#ff0000"
    },
    "4": {
        "name": "Amazon Wallet",
        "type": "onlinewallet",
        "currencies": ["USD"],
        "color": "#ff0000"
    },
    "5": {
      "name": "Investments",
      "type": "stockportfolio",
      "currencies": [],
      "color": "#ff0000"
    },
    "6": {
      "name": "Savings",
      "type": "savingsaccount",
      "currencies": ["USD"],
      "color": "#ff0000"
    }
}

export const categories: {[key: string]: {name: string, color: string, parentId: string}} = {
    "Food": {
        "name": "Food",
        "color": "#ff0000",
        "parentId": ""
    },
    "Shopping": {
        "name": "Shopping",
        "color": "#ff0000",
        "parentId": ""
    },
    "Transportation": {
        "name": "Transportation",
        "color": "#ff0000",
        "parentId": ""
    },
    "Entertainment": {
        "name": "Entertainment",
        "color": "#ff0000",
        "parentId": ""
    },
    "Transfer": {
        "name": "Transfer",
        "color": "#ff0000",
        "parentId": ""
    },
    "Offers and Cashback": {
        "name": "Offers and Cashback",
        "color": "#ff0000",
        "parentId": ""
    },
    "Fast Food": {
        "name": "Fast Food",
        "color": "#ff0000",
        "parentId": "Food"
    },
    "Shoes": {
        "name": "Shoes",
        "color": "#ff0000",
        "parentId": "Shopping"
    },
    "Clothing": {
        "name": "Clothing",
        "color": "#ff0000",
        "parentId": "Shopping"
    },
    "Groceries": {
        "name": "Groceries",
        "color": "#ff0000",
        "parentId": "Food"
    },
    "Dining Out": {
        "name": "Dining Out",
        "color": "#ff0000",
        "parentId": "Food"
    },
    "Movies": {
        "name": "Movies",
        "color": "#ff0000",
        "parentId": "Entertainment"
    },
    "Concert": {
        "name": "Concert",
        "color": "#ff0000",
        "parentId": "Entertainment"
    },
    "Accounts": {
      "name": "Accounts",
      "color": "#ff0000",
      "parentId": "Transfer"
    },
    "Gas": {
      "name": "Gas",
      "color": "#ff0000",
      "parentId": "Transportation"
    },
    "Bus Fare": {
      "name": "Bus Fare",
      "color": "#ff0000",
      "parentId": "Transportation"
    },
    "Electronics": {
      "name": "Electronics",
      "color": "#ff0000",
      "parentId": "Shopping"
    },
    "Personal Care": {
      "name": "Personal Care",
      "color": "#ff0000",
      "parentId": "Personal Care"
    },
    "Charity": {
      "name": "Charity",
      "color": "#ff0000",
      "parentId": "Offers and Cashback"
    }
}