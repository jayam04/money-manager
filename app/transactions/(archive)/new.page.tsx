
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getData } from "./getData";

export default async function Transactions() {
    const data = await getData();

    return (
        <main>
          <DataTable columns={columns} data={data} />
        </main>
      )
}
