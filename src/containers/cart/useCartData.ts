import getCartData from "../../api/request/cart";

type ICartItem = {
  key: number;
  checked: boolean;
  price: number;
  content: string;
  align?: string;
};

const useFetchData: ICartItem[] = getCartData();

export default useFetchData;
