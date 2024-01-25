import { DialectName } from "sql-parser-cst";

interface DialectSelectProps {
  value: DialectName;
  onChange: (dialect: DialectName) => void;
}

export function DialectSelect({ value, onChange }: DialectSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as DialectName)}
    >
      <option value="sqlite">SQLite</option>
      <option value="bigquery">BigQuery</option>
      <option value="postgresql">Experimental PostgreSQL</option>
      <option value="mysql">Experimental MySQL</option>
      <option value="mariadb">Experimental MariaDB</option>
    </select>
  );
}
