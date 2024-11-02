import classNames from "classnames";

interface TextFieldProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  error: boolean;
  errorMessage: string;
}

export const TextField = ({
  label,
  placeholder,
  onChange,
  error,
  errorMessage,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <label className="text-md text-gray-500 font-semibold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={classNames(
          "p-3 text-gray-900 border-2 rounded-md outline-none font-medium border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200",
          {
            "border-red-500 focus:ring-red-200": error,
          }
        )}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
