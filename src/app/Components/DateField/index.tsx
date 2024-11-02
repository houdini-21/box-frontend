import { useState } from "react";
import DatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";

interface DateFieldProps {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  error: boolean;
  errorMessage: string;
  className?: string;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  selectedDate,
  onChange,
  error,
  errorMessage,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={classNames("flex flex-col items-start w-full mt-2", className)}
    >
      <label className="text-md text-gray-500 font-medium mb-1">{label}</label>
      <div
        className={classNames(
          "flex items-center border-2 rounded-md transition-all duration-200 w-full",
          {
            "border-red-500 focus:ring-red-200": error,
            "border-blue-500 focus:ring-blue-200": !error && isFocused,
            "border-gray-300 hover:border-gray-400": !isFocused && !error,
          }
        )}
      >
        <div
          className="flex items-center justify-center bg-gray-100 p-3 rounded-l-md"
          onClick={() => setIsFocused(!isFocused)}
        >
          <MdCalendarMonth className="text-gray-500" size={24} />
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setIsFocused(false);
            onChange(date);
          }}
          placeholderText="dd / mm / yyyy"
          dateFormat="dd / MM / yyyy"
          className="outline-none w-full text-gray-900 font-medium p-3"
          open={isFocused}
          onFocus={() => setIsFocused(true)}
          onClickOutside={() => setIsFocused(false)}
        />
      </div>
      {error && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default DateField;
