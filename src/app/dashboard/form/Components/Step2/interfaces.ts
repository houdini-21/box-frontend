export interface ItemListProps {
  weight: number;
  lengthValue: number;
  height: number;
  width: number;
  content: string;
}

export interface Step2Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  productsList: ItemListProps[];
  updateListBox: (index: number, data: ItemListProps) => void;
  handleRemoveListBox: (index: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: (action: any) => void;
  sendDataToServer: () => void;
  loading: boolean;
}

export interface ListBoxItemProps {
  item: ItemListProps;
  index: number;
  updateListBox: (index: number, data: ItemListProps) => void;
  handleRemoveListBox: (index: number) => void;
}
