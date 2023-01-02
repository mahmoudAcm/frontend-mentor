import { useEffect, useState } from "react";

export default function useMaxWidth(width: number) {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setTrigger(window.outerWidth <= width);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return trigger;
}
