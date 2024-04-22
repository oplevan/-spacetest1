import React from "react";
import { cn, colSpan, gridCols } from "../../../utils/classnames";

type ValidWidthCombination = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface SplitScreenProps {
  leftWidth: ValidWidthCombination;
  rightWidth: ValidWidthCombination;
  className?: string;
  children: React.ReactElement[];
}

function SplitScreen({ leftWidth, rightWidth, className, children, ...props }: SplitScreenProps) {
  const [left, right] = children;
  return (
    <div data-testid="split-screen-container" className={cn("container grid", gridCols(leftWidth + rightWidth), className)} {...props}>
      <div className={cn(colSpan(leftWidth))}>{left}</div>
      <div className={cn(colSpan(rightWidth))}>{right}</div>
    </div>
  );
}

export default SplitScreen;
