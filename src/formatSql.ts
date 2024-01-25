import { format } from "prettier";
import * as plugin from "prettier-plugin-sql-cst";
import { SqlPluginOptions } from "prettier-plugin-sql-cst";
import { Dialect } from "./options/DialectSelect";

export function formatSql(
  sql: string,
  dialect: Dialect,
  options: Partial<SqlPluginOptions>,
): Promise<string> {
  return format(sql, {
    parser: dialect,
    plugins: [plugin],
    ...options,
  });
}
