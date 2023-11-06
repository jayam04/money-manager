import { Timestamp } from "firebase/firestore";

export type Transaction = {
    id: string;
    description: string;
    category: string;
    date: Timestamp;
    type: string;
    accounts: Record<string, number>;
};

export type Account = {
    id: string;
    name: string;
    color: string;
    balance: number;
    currency: string;
    transactions: Transaction[];
};

export type Category = {
    id: string;
    name: string;
    color: string;
    icon: string;
    parentId: string;
}
