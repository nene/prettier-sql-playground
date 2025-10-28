import { SqlPluginOptions } from "prettier-plugin-sql-cst";

export type WordCase = SqlPluginOptions["sqlKeywordCase"];

interface WordCaseSelectProps {
  value: WordCase;
  onChange: (value: WordCase) => void;
}

export function WordCaseSelect({ value, onChange }: WordCaseSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as WordCase)}
    >
      <option value="upper">Upper</option>
      <option value="lower">Lower</option>
      <option value="preserve">Preserve</option>
    </select>
  );
}
