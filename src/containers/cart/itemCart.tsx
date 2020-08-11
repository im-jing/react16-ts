import React from "react";
import { Checkbox } from "antd";

import "./index.css";

export type Props = {
  id: number;
  checkStatus: boolean;
  unitPrice: number;
  itemContent: string;
};

const ItemCart = (props: Props): JSX.Element => {
  const { id, checkStatus, unitPrice, itemContent } = props;

  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div className="item-card" role="item-card">
      <div className="checkbox-wrap">
        <Checkbox checked={checkStatus} value={id} />
        <span>{itemContent}</span>
      </div>
      <p className="item-info">￥{unitPrice}</p>
    </div>
  );
};

export default ItemCart;
