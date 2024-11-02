"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import classNames from "classnames";
import "react-phone-input-2/lib/high-res.css";

interface PhoneFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: boolean;
  errorMessage: string;
  className?: string;
}

const PhoneField: React.FC<PhoneFieldProps> = ({
  label,
  value,
  onChange,
  error,
  errorMessage,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classNames("flex flex-col gap-1 mt-2", className)}>
      <label className="text-md text-gray-500 font-medium mb-1">{label}</label>
      <div
        className={classNames(
          "flex items-center border-2 rounded-md transition-all duration-200",
          {
            "border-red-500 focus:ring-red-200": error,
            "border-blue-500 focus:ring-blue-200": !error && isFocused,
            "border-gray-300 hover:border-gray-400": !error && !isFocused,
          }
        )}
      >
        <PhoneInput
          country={"sv"}
          value={value}
          onChange={onChange}
          placeholder="+503 6962 8383"
          inputClass="!w-full outline-none text-gray-900 font-medium py-3 !pl-[68px] !h-auto !border-none"
          buttonClass="!bg-gray-100 !border-none !rounded-l-md"
          dropdownClass="text-gray-900"
          containerClass="w-full"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
        />
      </div>
      {error && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default PhoneField;
