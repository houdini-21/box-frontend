"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { CgSpinner } from "react-icons/cg";

interface ButtonProps {
  text?: string;
  color?: string;
  icon?: React.ReactNode;
  iconDirection?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  justIcon?: boolean;
  href: string;
  isGoBack?: boolean;
}

const ButtonLink = ({
  text = "Enviar",
  color = "bg-blue-500 text-white",
  icon,
  disabled = false,
  loading = false,
  iconDirection = "left",
  className,
  justIcon = false,
  href,
  isGoBack = false,
}: ButtonProps) => {
  const router = useRouter();
  return justIcon ? (
    <Link
      prefetch
      href={href}
      onClick={
        isGoBack
          ? () => router.back()
          : (e) => {
              e.preventDefault();
            }
      }
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
    </Link>
  ) : (
    <Link
      href={href}
      prefetch
      onClick={
        isGoBack
          ? () => router.back()
          : (e) => {
              e.preventDefault();
            }
      }
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
    </Link>
  );
};

export default ButtonLink;
