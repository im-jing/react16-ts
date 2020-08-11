import { useState, Key } from "react";

export type ICartItem = {
  key: number;
  checked: boolean;
  price: number;
  content: string;
  align?: string;
};

interface Props {
  sendTotal: (newToal: number) => void;
  cartData: ICartItem[];
}

const useCart = (props: Props) => {
  const { cartData, sendTotal } = props;
  const [checkedList, setCheckedList] = useState(cartData);
  const initialValue = 0;

  const rowSelection = {
    onChange: (selectedRowKeys: Key[], selectedRows: ICartItem[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      const newSumPrice = getSumPrice(selectedRows);

      sendTotal(newSumPrice);
      setCheckedList(selectedRows);
    },
    getCheckboxProps: (record: any) => ({}),
  };

  const getSumPrice = (rows: ICartItem[]): number =>
    rows.reduce(
      (accumulator: number, currentValue: any) =>
        accumulator + currentValue.price,
      initialValue
    );

  return {
    checkedList,
    rowSelection,
    getSumPrice,
  };
};

export default useCart;
