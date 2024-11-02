import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export const TopBar = () => {
  return (
    <nav className="flex items-center py-3 px-8 flex-wrap bg-white">
      <div className="p-2 inline-flex items-center pr-6 border-r-2">
        <Image src={Logo} alt="Logo" width={125} height={50} />
      </div>
    </nav>
  );
};
