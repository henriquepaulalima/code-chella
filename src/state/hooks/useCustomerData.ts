import { useRecoilState } from "recoil"
import { customerData } from "state/atom"

export default function useCustomerData() {
  return useRecoilState(customerData);
}
