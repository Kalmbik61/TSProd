import { useEffect, useState } from "react";

export default function useMediaQuery(media: string): boolean {
  const mediaQuery = window.matchMedia(media);
  const [isValid, setIsValid] = useState<boolean>(mediaQuery.matches);
  useEffect(() => {
    mediaQuery.addEventListener("change", (e) => {
      return setIsValid(e.matches);
    });
  }, [mediaQuery]);
  return isValid;
}
