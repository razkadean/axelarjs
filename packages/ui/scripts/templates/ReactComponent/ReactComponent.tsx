import type { ComponentProps, FC } from "react";

import tw from "tailwind-styled-components";

const StyledReactComponent = tw.div``;

export interface ReactComponentProps
  extends ComponentProps<typeof StyledReactComponent> {
  // add props here
}

export const ReactComponent: FC<ReactComponentProps> = (props) => {
  return <StyledReactComponent>ReactComponent</StyledReactComponent>;
};
