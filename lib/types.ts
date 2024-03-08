type SpendsUser = {
    id: string;
    name: string;
    email: string;
    nameInitials: string;
};

// Firebase, some might be differnt like Transaction having Date instead of firebase.Timestamp
type Currency = {
    id: string;
    display: string;
};

type Amount = {
    amount: number;
    accountID: string;
    currencyID: string;
};

type Category = {
    id: string;
    baseName: string;
    parentID: string;

    tags: string[];
    note: string;
};

type Account = {
    id: string;
    name: string;
    type: string;
    currenciesSupported: string[];

    note: string;
};

type Transaction = {
    id: string;
    name: string;
    date: number;
    categoryID: string;
    amounts: Amount[];

    tags: string[];
    note: string;

    // TODO: create constructor
};
