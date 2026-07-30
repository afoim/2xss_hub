import React from 'react';
import { cn } from "@/lib/utils";

const HStack = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row", className)}
    {...props}
  />
));
HStack.displayName = "HStack";

export { HStack };
