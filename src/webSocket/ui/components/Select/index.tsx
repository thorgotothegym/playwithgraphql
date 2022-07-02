import React from "react";

interface SelectCustomProps {
  label: string;
  options: string[];
  name?: string;
}

export const SelectCustom = ({
  label,
  options,
  name = "custom",
}: SelectCustomProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        {options?.map((value) => {
          return (
            <option key={value.toString()} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
};
