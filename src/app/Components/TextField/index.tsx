import classNames from "classnames";

interface TextFieldProps {
  label: string;
  nameInput: string;
  placeholder: string;
  onChange: (value: string) => void;
  error: boolean;
  errorMessage: string;
  type: "text" | "password" | "email" | "number";
  withIcon?: boolean;
  icon?: React.ReactNode;
}

const TextField = ({
  label,
  type,
  nameInput,
  placeholder,
  onChange,
  error,
  errorMessage,
  withIcon,
  icon,
}: TextFieldProps) => {
  return (
    <div className="flex flex-row items-center gap-1 mt-2">
      {withIcon && (
        <div className="flex items-center justify-center p-1 h-[52px] mt-4">
          {icon}
        </div>
      )}
      <div className="flex flex-col items-start w-full">
        <label className="text-md text-gray-500 font-medium">{label}</label>
        <input
          type={type}
          name={nameInput}
          placeholder={placeholder}
          className={classNames(
            "w-full p-3 text-gray-900 border-2 rounded-md outline-none font-medium border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200",
            {
              "border-red-500 focus:ring-red-200": error,
            }
          )}
          onChange={(e) => onChange(e.target.value)}
        />
        {error && <span className="text-xs text-red-500">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default TextField;
