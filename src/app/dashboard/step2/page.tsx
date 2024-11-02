"use client";
import { useRouter } from "next/navigation";
import Button from "@/app/Components/Button";
import { FaArrowLeft } from "react-icons/fa";

export default function Step2Page() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col lg:p-4 p-0">
      <h1>hola</h1>
      <Button
        text="Regresar"
        color="bg-gray-200 text-gray-400"
        icon={<FaArrowLeft className="w-5 h-5" />}
        onClick={() => router.back()}
      />
    </div>
  );
}
