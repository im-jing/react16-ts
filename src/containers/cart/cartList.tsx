import React, { useContext } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import useCart from "./useCart";

interface ICartItem {
  key: number;
  checked: boolean;
  price: number;
  content: string;
  align?: string;
}
type Props = {
  cartData: ICartItem[];
  sendTotal: (newTotal: number) => void;
};

const columns: ColumnsType<ICartItem> = [
  {
    key: "content",
    title: "Title",
    dataIndex: "content",
    width: "60%",
    align: "left",
  },
  {
    key: "price",
    title: "Price",
    dataIndex: "price",
    width: "40%",
    align: "right",
  },
];

const CartList = (props: Props) => {
  const { cartData } = props;
  const { rowSelection, checkedList } = useCart(props);
  console.log(rowSelection, "==rowSelection==");
  console.log(checkedList, "=checkedList==");

  return (
    <Table<ICartItem>
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      columns={columns}
      dataSource={cartData}
      pagination={false}
    />
  );
};
export default CartList;
