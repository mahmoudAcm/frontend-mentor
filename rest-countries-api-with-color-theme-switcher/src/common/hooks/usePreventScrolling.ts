import { useEffect } from "react";

export default function usePreventScrolling(hideScrollWhen: () => boolean) {
  useEffect(() => {
    if (hideScrollWhen()) {
      window.scrollTo({
        top: 0,
      });
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [hideScrollWhen]);
}
