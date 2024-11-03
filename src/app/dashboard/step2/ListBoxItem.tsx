import { RiBox3Fill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import MultipleTextField from "@/app/Components/MultipleTextField";
import TextField from "@/app/Components/TextField";
import Button from "@/app/Components/Button";

interface ListBoxItemProps {
  item: any;
  index: number;
  updateListBox: (index: number, data: any) => void;
  handleRemoveListBox: (index: number) => void;
}

const ListBoxItem = ({
  item,
  index,
  updateListBox,
  handleRemoveListBox,
}: ListBoxItemProps) => {
  return (
    <div
      className="flex flex-col w-full bg-white p-4 rounded border border-emerald-500 my-2"
      key={index}
    >
      <div className="w-full flex flex-row lg:flex-nowrap flex-wrap gap-x-6">
        <TextField
          label="Peso en libras"
          nameInput="weight"
          placeholder="Ingresa el peso"
          onChange={(value) =>
            updateListBox(index, {
              ...item,
              weight: value.target.value,
            })
          }
          type="text"
          className="lg:w-1/12 w-full"
          value={item.weight}
          error={false}
          errorMessage="This is helper text"
        />
        <TextField
          label="Contenido"
          nameInput="content"
          placeholder="Ingresa el contenido"
          onChange={(value) =>
            updateListBox(index, {
              ...item,
              content: value.target.value,
            })
          }
          type="text"
          className="lg:w-6/12 w-full"
          value={item.content}
          error={false}
          errorMessage="This is helper text"
        />
        <div className="lg:w-5/12 w-full flex items-end">
          <div className="flex items-center h-14 w-10">
            <RiBox3Fill className="text-3xl text-gray-500" />
          </div>
          <MultipleTextField
            items={[
              {
                label: "Largo",
                nameInput: "length",
                placeholder: "Ingresa el largo",
                onChange: (value) =>
                  updateListBox(index, {
                    ...item,
                    lengthValue: value.target.value,
                  }),
                type: "text",
                measure: "cm",
                inputValue: item.lengthValue,
              },
              {
                label: "Alto",
                nameInput: "height",
                placeholder: "Ingresa el alto",
                onChange: (value) =>
                  updateListBox(index, {
                    ...item,
                    height: value.target.value,
                  }),
                type: "text",
                measure: "cm",
                inputValue: item.height,
              },
              {
                label: "Ancho",
                nameInput: "width",
                placeholder: "Ingresa el ancho",
                onChange: (value) =>
                  updateListBox(index, {
                    ...item,
                    width: value.target.value,
                  }),
                type: "text",
                measure: "cm",
                inputValue: item.width,
              },
            ]}
          />
        </div>
      </div>
      <Button
        justIcon
        color="text-red-500 text-semibold"
        icon={<FaTrashAlt className="text-xl" />}
        iconDirection="right"
        onClick={() => handleRemoveListBox(index)}
        loading={false}
        className="lg:w-16 w-full mt-6 lg:self-end hover:text-white hover:bg-red-500"
      />
    </div>
  );
};

export default ListBoxItem;
