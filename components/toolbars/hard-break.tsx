"use client";

import { WrapText } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useToolbar } from "@/components/toolbars/toolbar-provider";

interface HardBreakToolbarProps extends React.ComponentProps<typeof Button> {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const HardBreakToolbar = React.forwardRef<
  HTMLButtonElement,
  HardBreakToolbarProps
>(({ className, onClick, children, ...props }, ref) => {
  const { editor } = useToolbar();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", className)}
          onClick={(e) => {
            editor?.chain().focus().setHardBreak().run();
            onClick?.(e);
          }}
          ref={ref}
          {...props}
        >
          {children || <WrapText className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Hard break</span>
      </TooltipContent>
    </Tooltip>
  );
});

HardBreakToolbar.displayName = "HardBreakToolbar";

export { HardBreakToolbar };
