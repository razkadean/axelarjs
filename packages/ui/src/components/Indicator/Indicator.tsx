import type { ComponentProps, FC } from "react";

import { cva, VariantProps } from "class-variance-authority";
import tw from "tailwind-styled-components";

import { cn } from "../../utils";
import { Badge } from "../Badge";

const StyledIndicator = tw.div`indicator`;

const indicatorItemVariance = cva("indicator", {
  variants: {
    position: {
      top: "indicator-top",
      bottom: "indicator-bottom",
      center: "indicator-center",
      middle: "indicator-middle",
      start: "indicator-start",
      end: "indicator-end",
    },
  },
});

export type IndicatorProps = ComponentProps<typeof StyledIndicator> & {};

const StyledIndicatorItem = tw(Badge)`indicator-item`;

export type IndicatorItemProps = ComponentProps<typeof StyledIndicatorItem> &
  VariantProps<typeof indicatorItemVariance>;

const IndicatorItem: FC<IndicatorItemProps> = ({
  position,
  className,
  ...props
}) => (
  <StyledIndicatorItem
    className={cn(indicatorItemVariance({ position }), className)}
    {...props}
  />
);

export const Indicator = Object.assign(StyledIndicator, {
  Item: IndicatorItem,
});
