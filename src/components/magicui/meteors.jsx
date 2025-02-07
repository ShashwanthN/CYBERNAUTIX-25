"use client";;
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20,
  ...props
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (<>
    {[...meteorStyles].map((style, idx) => (
      // Meteor Head
      (<span
        key={idx}
        className={cn(
          "pointer-events-none absolute size-1 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
        )}
        style={style}
        {...props}>
        {/* Meteor Tail */}
        <div
          className="pointer-events-none absolute top-1/2 -z-10 h-[3px] w-[100px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
      </span>)
    ))}
  </>);
};
