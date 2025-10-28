import styled from "styled-components";
import { DialectName } from "sql-parser-cst";
import { KeywordCase, KeywordCaseSelect } from "./KeywordCaseSelect";
import { DialectSelect } from "./DialectSelect";
import { CanonicalSyntaxToggle } from "./CanonicalSyntaxToggle";
import { ParamType, ParamsDropdown } from "./ParamsDropdown";

export type Options = {
  dialect: DialectName;
  sqlKeywordCase: KeywordCase;
  sqlLiteralCase: KeywordCase;
  sqlCanonicalSyntax: boolean;
  sqlParamTypes: ParamType[];
};

interface OptionsBarProps {
  value: Options;
  onChange: (dialect: Options) => void;
}

export function OptionsBar({ value, onChange }: OptionsBarProps) {
  return (
    <OptionsBarArea>
      <OptionItem>
        dialect:{" "}
        <DialectSelect
          value={value.dialect}
          onChange={(dialect) => onChange({ ...value, dialect })}
        />
      </OptionItem>
      <OptionItem>
        keywords:{" "}
        <KeywordCaseSelect
          value={value.sqlKeywordCase}
          onChange={(sqlKeywordCase) => onChange({ ...value, sqlKeywordCase })}
        />
      </OptionItem>
      <OptionItem>
        literals:{" "}
        <KeywordCaseSelect
          value={value.sqlLiteralCase}
          onChange={(sqlLiteralCase) => onChange({ ...value, sqlLiteralCase })}
        />
      </OptionItem>
      <OptionItem>
        <CanonicalSyntaxToggle
          value={value.sqlCanonicalSyntax}
          onChange={(sqlCanonicalSyntax) =>
            onChange({ ...value, sqlCanonicalSyntax })
          }
        />
      </OptionItem>
      <OptionItem>
        <ParamsDropdown
          value={value.sqlParamTypes}
          onChange={(sqlParamTypes) => onChange({ ...value, sqlParamTypes })}
        />
      </OptionItem>
    </OptionsBarArea>
  );
}

const OptionsBarArea = styled.span`
  display: flex;
  // align items at the bottom of the container
  align-items: flex-end;
  gap: 1rem;
`;

const OptionItem = styled.span``;
