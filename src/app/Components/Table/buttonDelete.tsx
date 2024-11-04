"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonDeleteProps } from "./interfaces";
import Button from "../Button";

const ButtonDelete = ({ id }: ButtonDeleteProps) => {
  const router = useRouter();

  const deleteHandler = (id: number) => {
    const config = {
      method: "DELETE",
    };

    fetch(
      `https://boxfulbackend.houdini-21.me/form-state-item/${id}`,
      config
    ).then(() => {
      toast.success("Se ha eliminado el registro correctamente");
      router.refresh();
    });
  };
  return (
    <Button
      justIcon
      color="bg-red-500"
      className="mx-auto my-0"
      onClick={() => {
        deleteHandler(id);
      }}
      icon={<FaRegTrashAlt className="text-white" />}
    />
  );
};

export default ButtonDelete;
