import { format } from "prettier";
import * as plugin from "prettier-plugin-sql-cst";

export function formatSql(sql: string): string {
  return format(sql, {
    parser: "sqlite",
    plugins: [plugin],
  });
}
