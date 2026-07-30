import React from 'react';
import { cn } from "@/lib/utils";

const Center = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center", className)}
    {...props}
  />
));
Center.displayName = "Center";

export { Center };
