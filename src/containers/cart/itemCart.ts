import React from "react";
import { Checkbox } from "antd";

import "./index.css";

export type Props = {
  key: number;
  checkStatus: boolean;
  unitPrice: number;
  itemContent: string;
};

const ItemCart = (props: Props): JSX.Element => {
  const { key, checkStatus, unitPrice, itemContent } = props;

  return (
    <div className="item-card">
      <div className="checkbox-wrap">
        <Checkbox checked={checkStatus} value={key} />
        <span>{itemContent}</span>
      </div>
      <p className="item-info">￥{unitPrice}</p>
    </div>
  );
};

export default ItemCart;
