import { useState } from "react";
import { SqlEditor } from "./SqlEditor";
import { format } from "prettier";
import * as plugin from "prettier-plugin-sql-cst";

const exampleSql = `
select supplier_name,city from
(select * from suppliers join addresses on suppliers.address_id=addresses.id)
as suppliers
where supplier_id>500
order by supplier_name asc,city desc;
`;

function formatSql(sql: string): string {
  return format(sql, {
    parser: "sqlite",
    plugins: [plugin],
  });
}

export function App() {
  const [sql, setSql] = useState(exampleSql);

  return (
    <div className="App">
      <SqlEditor value={sql} onChange={setSql} />
      <SqlEditor value={formatSql(sql)} />
    </div>
  );
}
