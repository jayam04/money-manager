"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { accounts } from "./getData"
import { Button } from "@/components/ui/button"


export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "categoryID",
    header: "Category",
  },
  {
    accessorKey: "amounts",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => {

      const amounts: Amount[] = row.getValue("amounts")

      const amount = amounts[0].amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "accounts",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Accounts
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => {

        const amounts: Amount[] = row.getValue("amounts")
  
        const accountId: string = amounts[0].accountID
        let accountName: string = "NaN";
        for (const account of accounts) {
            if (account.id === accountId) {
                accountName = account.name
                break
            }
        }
   
        return <div>{accountName}</div>
      },
  },

  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "note",
    header: "Note",
  }
]
