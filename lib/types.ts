type Transaction = {
    id: string;
    name: string;
    date: number;
    categoryID: string;
    amounts: Amount[];
    tags: string[];
    note: string;

    // TODO: create constructor
}

type Amount = {
    amount: number;
    accountID: string;
    currencyID: string;
}

type Category = {
    id: string;
    baseName: string;
    parentID: string;
}

type Currency = {
    id: string;
    display: string;
}
