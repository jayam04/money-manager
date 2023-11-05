import { useState } from "react";

import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Calendar } from "./ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { wallets } from "@/data/wallets";

export default function NewTransactionSidebar({ closeButtonFunction }) {
  const [date, setDate] = useState<Date>();
  const [description, setDescription] = useState("burger?");
  const [amount, setAmount] = useState(3.67);
  const [category, setCategory] = useState("food and drinks?");
  const [account, setAccount] = useState("cash?");
  const [accounts, setAccounts] = useState([
    [null, null],
    [null, null],
  ]);
  const [fields, setFields] = useState([{ id: 0, name: "field-0" }]);

  const addFormField = () => {
    const newField = { id: fields.length, name: `field-${fields.length}` };
    setFields([...fields, newField]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    const newTransaction = {
      id: `transaction${transactions.length + 1}`,
      date: date ? format(date, "yyyy-MM-dd") : "", // Format the date if available
      description,
      type: "expense", // You may need to adjust this based on your use case
      category,
      subcategory: "", // Add subcategory logic if needed
      accounts: {
        [account]: -amount, // Assuming the amount is an expense (negative)
      },
    };

    // Update transactions state with the new transaction
    transactions.push(newTransaction);
    closeButtonFunction();
  };

  return (
    <div className="w-2/5">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-medium">add new transaction</h1>
        <Button variant="outline" size="sm" onClick={closeButtonFunction}>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-gray-500">
        You can add a new transaction by filling in the form below.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="did you had a burger?"
            className="col-span-3"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            placeholder="surely food and drinks!"
            className="col-span-3"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <Label htmlFor="amount">Amount</Label>
          <div>
            {fields.map((field) => (
              <div key={field.id} className="flex flex-row">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="wallet" />
                  </SelectTrigger>
                  <SelectContent>
                    {wallets.map((wallet) => (
                      <SelectItem key={wallet.id} value={wallet.id.toString()}>
                        {wallet.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  name={field.name}
                  placeholder="3.67"
                  id={field.name + "+amount"}
                />
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="currency" />
                    </SelectTrigger>
                    <SelectContent>
                    </SelectContent>
                </Select>
              </div>
            ))}
            <Button type="button" variant="ghost" onClick={addFormField}>
              add field
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <Label htmlFor="date">Date</Label>
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
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button type="submit">add transaction</Button>
      </form>
    </div>
  );
}
