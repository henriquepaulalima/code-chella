import { ICustomerData } from "interfaces/ICustomerData";
import { atom } from "recoil";

export const customerData = atom<ICustomerData>({
  key: 'customerData',
  default: {
    name: '',
    email: '',
    cpf: '',
    birthdate: '',
  },
});
