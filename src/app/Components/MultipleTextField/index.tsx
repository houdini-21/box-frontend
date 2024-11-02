import classNames from "classnames";

interface MultipleTextFieldItemProps {
  label: string;
  nameInput: string;
  placeholder: string;
  onChange: (value: string) => void;
  type: "text" | "number";
  measure: string;
}

interface MultipleTextFieldProps {
  items: MultipleTextFieldItemProps[];
}

const MultipleTextField = ({ items }: MultipleTextFieldProps) => {
  return (
    <div className="flex items-center w-full mt-2">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-start w-full">
          <label className="text-gray-500 font-medium">{item.label}</label>
          <div
            className={classNames(
              "flex flex-row items-center border-y-2 border-gray-300 px-2 w-full  focus-within:border-blue-500 focus-within:ring-blue-200 transition-all duration-200",
              {
                "border-2": index !== 0 && index !== items.length - 1,
                "rounded-l-md border-l-2": index === 0,
                "rounded-r-md border-r-2": index === items.length - 1,
              }
            )}
          >
            <input
              type={item.type}
              name={item.nameInput}
              placeholder={item.placeholder}
              className="py-3 px-2 outline-none text-gray-900 font-medium w-full"
              onChange={(e) => item.onChange(e.target.value)}
            />
            <span className="text-gray-500 font-bold">{item.measure}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleTextField;
