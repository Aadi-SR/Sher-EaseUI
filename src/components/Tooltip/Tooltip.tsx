import type { HTMLAttributes, ReactNode } from "react";
import { useId } from "react";
import { cn } from "@/libs/utils";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  content: ReactNode;
  position?: TooltipPosition;
  children: ReactNode;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
};

const Tooltip = ({
  content,
  position = "top",
  children,
  className,
  ...props
}: TooltipProps) => {
  const tooltipId = useId();

  return (
    <span
      className={cn("group relative inline-flex w-fit", className)}
      aria-describedby={tooltipId}
      {...props}
    >
      {children}
      <span
        id={tooltipId}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white opacity-0 shadow transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100",
          positionClasses[position]
        )}
      >
        {content}
      </span>
    </span>
  );
};

export { Tooltip };
export type { TooltipProps, TooltipPosition };
