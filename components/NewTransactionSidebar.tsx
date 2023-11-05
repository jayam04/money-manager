import { useState } from "react";

import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "./ui/calendar";

export default function NewTransactionSidebar() {
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

    return (
        <div className="w-2/5">
            <h1 className="text-lg font-medium">add new transaction</h1>
            <p className="text-sm text-gray-500">
                You can add a new transaction by filling in the form below.
            </p>
            <form>
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
=                            {fields.map((field) => (
                                <div key={field.id} className="form-group">
                                <Input
                                    type="text"
                                    name={field.name}
                                    id={field.name + "+1"}
                                />
                                <Input
                                    type="text"
                                    name={field.name}
                                    id={field.name + "+2"}
                                />
                                <Input
                                    type="text"
                                    name={field.name}
                                    id={field.name + "+3"}
                                />
                                </div>
                            ))}
                        <button type="button" onClick={addFormField}>
                            Add Field
                        </button>
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
            </form>
        </div>
    );
}
