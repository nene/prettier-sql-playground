export type Dialect = "sqlite" | "bigquery";

interface DialectSelectProps {
  value: Dialect;
  onChange: (dialect: Dialect) => void;
}

export function DialectSelect({ value, onChange }: DialectSelectProps) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as Dialect)}>
      <option value="sqlite">SQLite</option>
      <option value="bigquery">BigQuery</option>
      <option value="postgresql">Experimental PostgreSQL</option>
      <option value="mysql">Experimental MySQL</option>
      <option value="mariadb">Experimental MariaDB</option>
    </select>
  );
}
