import { CgSpinner } from "react-icons/cg";
import classNames from "classnames";

interface ButtonProps {
  text?: string;
  color?: string;
  icon?: React.ReactNode;
  iconDirection?: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit";
  justIcon?: boolean;
}

const Button = ({
  text = "Enviar",
  color = "bg-blue-500 text-white",
  icon,
  onClick,
  disabled = false,
  loading = false,
  iconDirection = "left",
  className,
  type = "button",
  justIcon = false,
}: ButtonProps) => {
  return justIcon ? (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "flex items-center justify-center p-3 rounded-md  font-medium transition-colors duration-300",
        color,
        className,
        {
          "cursor-not-allowed bg-opacity-50": disabled || loading,
          "hover:bg-opacity-80": !disabled && !loading,
        }
      )}
    >
      {icon}
    </button>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames(
        "flex items-center justify-center p-4 rounded-md  font-medium transition-colors duration-300",
        color,
        className,
        {
          "cursor-not-allowed bg-opacity-50": disabled || loading,
          "hover:bg-opacity-80": !disabled && !loading,
        }
      )}
    >
      {loading ? (
        <div className="animaiconte-spin text-2xl">
          <CgSpinner />
        </div>
      ) : (
        <>
          {icon && iconDirection === "left" && (
            <span className="mr-8">{icon}</span>
          )}
          <span>{text}</span>
          {icon && iconDirection === "right" && (
            <span className="ml-8">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
