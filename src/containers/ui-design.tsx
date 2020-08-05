import React from "react";
import Button from "../ui-design/button";

const UiDesign = () => {
  return (
    <div className="content">
      <Button btnType="primary" btnSize="lg" disabled>
        Large Primary
      </Button>
      <Button btnType="default" btnSize="sm">
        Small Default
      </Button>
      <Button btnType="danger" btnSize="sm">
        Danger
      </Button>
    </div>
  );
};

export default UiDesign;
