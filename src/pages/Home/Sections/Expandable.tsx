import React, { useState } from "react";
import { cn } from "../../../utils/cn";

interface ExpandableProps {
  className?: string;
  children: React.ReactNode;
}

// On phones, long text shows three lines with a "Read more" button. From md up it shows in full.
const Expandable: React.FC<ExpandableProps> = ({ className, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <div className={cn(!open && "line-clamp-3 md:line-clamp-none")}>{children}</div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="mt-1.5 text-[13px] font-medium text-accent-ink md:hidden"
      >
        {open ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

export default Expandable;
