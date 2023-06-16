import { ICustomerData } from "interfaces/ICustomerData";
import { useSetRecoilState } from "recoil"
import { customerData } from "state/atom"

export default function useUpdateCustomerData() {
  const setCustomerData = useSetRecoilState<ICustomerData>(customerData);
  return (data: ICustomerData) => {
    return setCustomerData(data);
  }
}
