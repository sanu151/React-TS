import { CSSProperties } from "react";

type componentStyleProps = {
  componentStyle: CSSProperties;
};

const Component1 = (props: componentStyleProps) => {
  return (
    <div>
      <h3>
        Hello My name is <span style={props.componentStyle}>Supriyo Das</span>
      </h3>
    </div>
  );
};

export default Component1;
