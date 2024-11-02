import { ChangeEventHandler } from "react";
import classNames from "classnames";

interface TextFieldProps {
  label: string;
  nameInput: string;
  value: string | number;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: boolean | "" | undefined;
  errorMessage: string | undefined;
  type: "text" | "password" | "email" | "number";
  withIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const TextField = ({
  label,
  type,
  nameInput,
  value,
  placeholder,
  onChange,
  error,
  errorMessage,
  withIcon,
  icon,
  className,
}: TextFieldProps) => {
  return (
    <div
      className={classNames("flex flex-row items-center gap-1 mt-2", className)}
    >
      {withIcon && (
        <div className="flex items-center justify-center h-[52px] mt-4">
          {icon}
        </div>
      )}
      <div className="flex flex-col items-start w-full">
        <label className="text-md text-gray-500 font-medium mb-1">
          {label}
        </label>
        <input
          type={type}
          name={nameInput}
          value={value}
          placeholder={placeholder}
          className={classNames(
            "w-full p-3 text-gray-900 border-2 rounded-md outline-none font-medium border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200",
            {
              "border-red-500 focus:ring-red-200": error,
            }
          )}
          onChange={onChange}
        />
        {error && <span className="text-xs text-red-500">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default TextField;
