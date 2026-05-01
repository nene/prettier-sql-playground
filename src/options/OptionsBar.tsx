import styled from "styled-components";
import { DialectName } from "sql-parser-cst";
import { WordCase, WordCaseSelect } from "./WordCaseSelect";
import { DialectSelect } from "./DialectSelect";
import { CanonicalSyntaxToggle } from "./CanonicalSyntaxToggle";
import { ParamType, ParamsDropdown } from "./ParamsDropdown";

export type Options = {
  dialect: DialectName;
  sqlKeywordCase: WordCase;
  sqlLiteralCase: WordCase;
  sqlTypeCase: WordCase;
  sqlIdentifierCase: WordCase;
  sqlFunctionCase: WordCase;
  sqlCanonicalSyntax: boolean;
  sqlExperimentalPlpgsql: boolean;
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
          value={
            value.sqlExperimentalPlpgsql ? "postgresql+plpgsql" : value.dialect
          }
          onChange={(dialect) => {
            if (dialect === "postgresql+plpgsql") {
              onChange({
                ...value,
                dialect: "postgresql",
                sqlExperimentalPlpgsql: true,
              });
            } else {
              onChange({ ...value, dialect, sqlExperimentalPlpgsql: false });
            }
          }}
        />
      </OptionItem>
      <OptionItem>
        keywords:{" "}
        <WordCaseSelect
          value={value.sqlKeywordCase}
          onChange={(sqlKeywordCase) => onChange({ ...value, sqlKeywordCase })}
        />
      </OptionItem>
      <OptionItem>
        literals:{" "}
        <WordCaseSelect
          value={value.sqlLiteralCase}
          onChange={(sqlLiteralCase) => onChange({ ...value, sqlLiteralCase })}
        />
      </OptionItem>
      <OptionItem>
        types:{" "}
        <WordCaseSelect
          value={value.sqlTypeCase}
          onChange={(sqlTypeCase) => onChange({ ...value, sqlTypeCase })}
        />
      </OptionItem>
      <OptionItem>
        identifiers:{" "}
        <WordCaseSelect
          value={value.sqlIdentifierCase}
          onChange={(sqlIdentifierCase) =>
            onChange({ ...value, sqlIdentifierCase })
          }
        />
      </OptionItem>
      <OptionItem>
        functions:{" "}
        <WordCaseSelect
          value={value.sqlFunctionCase}
          onChange={(sqlFunctionCase) =>
            onChange({ ...value, sqlFunctionCase })
          }
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
  padding-right: 12rem;
`;

const OptionItem = styled.span``;
