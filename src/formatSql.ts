import { format } from "prettier";
import * as plugin from "prettier-plugin-sql-cst";
import { Dialect } from "./DialectSelect";

export function formatSql(sql: string, dialect: Dialect): string {
  return format(sql, {
    parser: dialect,
    plugins: [plugin],
  });
}
