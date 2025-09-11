import { useEffect } from "react";
import WOW from "wowjs";

export function useWow() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // set to false if you don't want to scan the DOM continuously
    });
    wow.init();
  }, []);
}
