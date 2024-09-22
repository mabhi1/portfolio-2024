import { useState, useEffect } from "react";

export function useBreakpoint(breakpoint: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    handleChange(); // Initial check

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return matches;
}
