import type { ComponentProps, FC } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import tw from "tailwind-styled-components";

const StyledBadge = tw.span``;

const badgeVariance = cva("badge", {
  variants: {
    color: {
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      success: "badge-success",
      error: "badge-error",
      warning: "badge-warning",
      info: "badge-info",
    },
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
    },
    outline: {
      true: "badge-outline",
    },
    ghost: {
      true: "badge-ghost",
    },
  },
});

export type BadgeProps = ComponentProps<typeof StyledBadge> &
  VariantProps<typeof badgeVariance>;

export const Badge: FC<BadgeProps> = ({
  color,
  outline,
  ghost,
  size,
  className,
  ...props
}) => {
  return (
    <StyledBadge
      className={twMerge(
        badgeVariance({ color, outline, ghost, size }),
        className
      )}
      {...props}
    />
  );
};