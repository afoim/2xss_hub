import React from 'react';
import { cn } from "@/lib/utils";

const VStack = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col", className)}
    {...props}
  />
));
VStack.displayName = "VStack";

export { VStack };
