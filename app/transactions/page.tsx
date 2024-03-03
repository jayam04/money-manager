import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  // TODO: fetch transactions
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  // TODO: get data directly using hashmap
  const invoicesHashMap: { [key: string]: Transaction } = {};
  invoices.forEach((invoice) => {
    const transaction: Transaction = {
      id: invoice.invoice,
      name: "John Doe",
      date: Date.now(),
      categoryID: invoice.paymentMethod,
      amounts: [
        {
          amount: 234,
          accountID: "Cash",
          currencyID: "USD",
        },
      ],
      note: "Same for every transaction",
      tags: ["#testing"],
    };
    invoicesHashMap[invoice.invoice] = transaction;
  });
  invoicesHashMap[invoices[0].invoice].amounts.push({
    amount: 234,
    accountID: "Cash",
    currencyID: "USD",
  });
  invoicesHashMap[invoices[0].invoice].name = "Johny Johny! Yes Papa ............................."

  let total = new Map<string, number>();

  return (
    <Table>
      {/* TODO: get better caption, yeah we are going to have caption */}
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Transaction ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Account</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(invoicesHashMap).map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.categoryID}</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">
              {invoice.amounts.map((amount, index) => {
                {
                  let currencyID = amount.currencyID;
                  if (total.has(currencyID)) {
                    // Key exists, increment the value
                    total.set(
                      currencyID,
                      total.get(currencyID)! + amount.amount
                    );
                  } else {
                    // Key doesn't exist, set the initial value
                    total.set(currencyID, amount.amount);
                  }
                }
                return <p key={index}>{amount.amount}</p>;
              })}
            </TableCell>
            <TableCell>
              {invoice.amounts.map((amount, index) => (
                <p key={index}>{amount.accountID}</p>
              ))}
            </TableCell>
            <TableCell>#testing</TableCell>
            <TableCell>Same for every transaction</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{total.get("USD")}</TableCell>
          <TableCell colSpan={3}></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
