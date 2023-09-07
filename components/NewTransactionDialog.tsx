"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { wallets } from "@/data/wallets"

export default function NewTranscationDialog() {

    // Some form inputs
    const [date, setDate] = React.useState<Date>();
    const [description, setDescription] = React.useState("burger?");
    const [amount, setAmount] = React.useState(3.67);
    const [category, setCategory] = React.useState("food and drinks?");
    const [account, setAccount] = React.useState("cash?");
    const [accounts, setAccounts] = React.useState([[null, null], [null, null]])

    // function updateAccount(index: number, value: number) {
    //     const newAccounts = [...accounts];
    //     newAccounts[index] = value;
    //     setAccounts(newAccounts);
    // }

    // function updateAmount(index: number, value: number) {
    //     const newAccounts = [...accounts];
    //     newAccounts[index][1] = value;
    //     setAccounts(newAccounts);
    // }

    function submitForm() {
        console.log("form submitted : ", date, description, amount);
    }

    return (
        <Dialog>
            {/* button to make dialog open */}
            <DialogTrigger asChild>
                <Button className="mb-1">new transaction</Button>
            </DialogTrigger>

            {/* main dialog */}
            <DialogContent className="w-2/3 sm:max-w-[425px] md:max-w-[640px]">
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                </DialogHeader>

                {/* dialog content */}
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input
                            id="description"
                            placeholder="did you had a burger?"
                            className="col-span-3"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                            Amount
                        </Label>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="let me guess, you paid 3.67 dollars!"
                            className="col-span-3"
                            onChange={(e) => {
                                setAmount(parseInt(e.target.value));
                            }}
                        />
                    </div> */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                            Category
                        </Label>
                        <Input
                            id="category"
                            placeholder="surely food and drinks!"
                            className="col-span-3"
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="accounts" className="text-right">
                          Accounts
                      </Label>
                      <div className="col-span-3">
                        {accounts.map((account, index) => {
                          return (
                            <div className="flex flex-row mt-2 mb-2" key="todo">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="wallet"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {wallets.map((wallet) => (
                                        <SelectItem key={wallet.id} value={wallet.id.toString()}>{wallet.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Input
                                id="accounts"
                                placeholder="3.67"
                                className="w-4/5"
                                type="number"
                            />
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="currency" />
                                </SelectTrigger>
                                <SelectContent>
                                </SelectContent>
                            </Select>
                            </div>)
                        })}
                      {/* TODO: accounts input fields */}
                      </div>

                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="account" className="text-right">
                            Account
                        </Label>
                        <Input
                            id="account"
                            placeholder="do you prefer cash?"
                            className="col-span-3"
                            onChange={(e) => {
                                setAccount(e.target.value);
                            }}
                        />
                    </div> */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                            Date
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? (
                                        format(date, "PPP")
                                    ) : (
                                        <span>{"I can't guess it!"}</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <DialogClose className="w-40 flex justify-end ml-auto">
                    <Button type="submit" onClick={submitForm} className="w-40">
                        add
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
