import { DialectName } from "sql-parser-cst";
import { KeywordCase, KeywordCaseSelect } from "./KeywordCaseSelect";
import { DialectSelect } from "./DialectSelect";

export type Options = {
  dialect: DialectName;
  sqlKeywordCase: KeywordCase;
};

interface OptionsBarProps {
  value: Options;
  onChange: (dialect: Options) => void;
}

export function OptionsBar({ value, onChange }: OptionsBarProps) {
  return (
    <span>
      dialect:{" "}
      <DialectSelect
        value={value.dialect}
        onChange={(dialect) => onChange({ ...value, dialect })}
      />{" "}
      keywords:{" "}
      <KeywordCaseSelect
        value={value.sqlKeywordCase}
        onChange={(sqlKeywordCase) => onChange({ ...value, sqlKeywordCase })}
      />
    </span>
  );
}
