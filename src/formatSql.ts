import { format } from "prettier";
import { DialectName } from "sql-parser-cst";
import * as plugin from "prettier-plugin-sql-cst";
import { SqlPluginOptions } from "prettier-plugin-sql-cst";

export function formatSql(
  sql: string,
  { dialect, ...options }: Partial<SqlPluginOptions> & { dialect: DialectName },
): Promise<string> {
  return format(sql, {
    parser: dialect,
    plugins: [plugin],
    ...options,
  });
}
