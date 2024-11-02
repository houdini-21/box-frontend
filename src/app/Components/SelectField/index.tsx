"use client";
import Select from "react-select";
import classNames from "classnames";

interface SelectComponentItem {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  nameInput: string;
  options: SelectComponentItem[];
  onChange: (value: SelectComponentItem) => void;
  error: boolean;
  errorMessage: string;
}

export const SelectField = ({
  label,
  nameInput,
  options,
  onChange,
  error,
  errorMessage,
}: SelectFieldProps) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <label className="text-md text-gray-500 font-semibold">{label}</label>
      <Select
        id={nameInput}
        options={options}
        styles={{
          control: (provided: any, state: any) => ({
            ...provided,
            padding: "0.44rem",
            borderRadius: "0.375rem",
            borderWidth: "2px",
            borderColor: error
              ? "#ef4444"
              : state.isFocused
              ? "#3b82f6"
              : "#d1d5db",
            boxShadow: state.isFocused
              ? error
                ? "0 0 0 1px #ef4444"
                : "0 0 0 1px #3b82f6"
              : "none",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }),
          placeholder: (provided: any) => ({
            ...provided,
            color: "#9CA3AF",
            fontWeight: "500",
          }),
          menu: (provided: any) => ({
            ...provided,
            marginTop: 0,
            borderRadius: "0.375rem",
            overflow: "hidden",
          }),
          option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected
              ? "#3b82f6"
              : state.isFocused
              ? "#e0f2fe"
              : "white",
            color: state.isSelected ? "white" : "#111827",
            padding: "10px 12px",
            cursor: "pointer",
            "&:active": {
              backgroundColor: "#2563eb",
            },
          }),
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={onChange as any}
        className={classNames("font-medium", { "react-select-error": error })}
        placeholder="Seleccione una opción"
      />
      {error && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
