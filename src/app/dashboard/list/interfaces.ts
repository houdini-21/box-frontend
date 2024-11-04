import { ListBoxItemProps } from "../form/Components/Step2/interfaces";

export interface ItemList {
  id: number;
  date: string;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  recipientAddress: string;
  department: string;
  municipality: string;
  zone: string;
  instructions: string;
  listBox: ListBoxItemProps[];
}
