import React from 'react';
import { cn } from "@/lib/utils";

const Grid = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid", className)}
    {...props}
  />
));
Grid.displayName = "Grid";

const GridItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
GridItem.displayName = "GridItem";

export { Grid, GridItem };
