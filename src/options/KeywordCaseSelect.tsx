import { SqlPluginOptions } from "prettier-plugin-sql-cst";

export type KeywordCase = SqlPluginOptions["sqlKeywordCase"];

interface KeywordCaseSelectProps {
  value: KeywordCase;
  onChange: (value: KeywordCase) => void;
}

export function KeywordCaseSelect({ value, onChange }: KeywordCaseSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as KeywordCase)}
    >
      <option value="upper">Upper</option>
      <option value="lower">Lower</option>
      <option value="preserve">Preserve</option>
    </select>
  );
}
