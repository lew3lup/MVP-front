import { useEffect, useState } from "react";

export type useLyoutResult = boolean;

export function useLayout(): useLyoutResult {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width <= 500;
}
