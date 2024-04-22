import React from "react";

interface Props {
  children: string | React.ReactElement | React.ReactElement[];
}
function SplitScreenLeft({ children }: Props) {
  return <>{children}</>;
}

export default SplitScreenLeft;
