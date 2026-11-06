import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** React Router does not scroll to a #section on in-app navigation. */
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);
}
