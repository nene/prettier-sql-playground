import { SqlPluginOptions } from "prettier-plugin-sql-cst";
import { useState } from "react";
import styled from "styled-components";

export type ParamType = SqlPluginOptions["sqlParamTypes"][number];

interface ParamsDropdownProps {
  value: ParamType[];
  onChange: (value: ParamType[]) => void;
}

type OptionState = { type: ParamType; isChecked: boolean };

export function ParamsDropdown({ value, onChange }: ParamsDropdownProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span>
      <button onClick={() => setVisible(!visible)}>
        Parameters {visible ? "▲" : "▼"}
      </button>
      {visible && <ParamsDropdownMenu value={value} onChange={onChange} />}
    </span>
  );
}

function ParamsDropdownMenu({
  value: enabledParamTypes,
  onChange,
}: ParamsDropdownProps) {
  const menuOptions = (
    [
      { type: "?", isChecked: false },
      { type: "?nr", isChecked: false },
      { type: ":name", isChecked: false },
      { type: "@name", isChecked: false },
      { type: "$name", isChecked: false },
    ] as OptionState[]
  ).map((option) => ({
    ...option,
    isChecked: enabledParamTypes.includes(option.type),
  }));

  const toggle = (type: ParamType) => {
    const toggleOption = (option: OptionState) => {
      if (option.type === type) {
        return { ...option, isChecked: !option.isChecked };
      }
      return option;
    };
    onChange(
      menuOptions
        .map(toggleOption)
        .filter((option) => option.isChecked)
        .map((option) => option.type),
    );
  };

  return (
    <FloatingMenu>
      {menuOptions.map((option) => (
        <div key={option.type}>
          <label>
            <input
              type="checkbox"
              name={option.type}
              value={option.type}
              checked={option.isChecked}
              onChange={() => toggle(option.type)}
            />
            {option.type}
          </label>
        </div>
      ))}
    </FloatingMenu>
  );
}

const FloatingMenu = styled.div`
  position: absolute;
  background-color: #4e4e4e;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  padding: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.1);
  z-index: 1;
`;
