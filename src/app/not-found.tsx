import Image from "next/image";
import ButtonLink from "./Components/ButtonLink";
import notFoundImage from "@/assets/404-image.svg";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:p-4 p-0">
      <div className="w-2/4 mt-24 flex flex-col items-center">
        <Image src={notFoundImage} alt="Not Found" className="lg:w-3/4 w-1/4" />

        <h2 className="text-6xl font-bold text-center mt-12 text-gray-800">
          Oops! Pagina no encontrada!
        </h2>

        <p className="text-2xl text-center mt-4 text-gray-800">
          La página que buscas no existe.
        </p>
        <ButtonLink
          text="Regresar"
          color="bg-orange-500"
          icon={<FaArrowLeft className="text-xl" />}
          iconDirection="left"
          href="#"
          isGoBack
          className="lg:w-2/12 w-full mt-16"
        />
      </div>
    </div>
  );
}
