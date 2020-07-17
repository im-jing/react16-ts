import React from "react";
import Button from "../ui-design/button";

import "../static/style/index.scss";

const UiDesign = () => {
  return (
    <div className="content">
      <Button btnType="primary" btnSize="lg" disabled>
        aaa
      </Button>
      <Button btnType="default" btnSize="sm">
        bbb
      </Button>
    </div>
  );
};

export default UiDesign;
