import { useEffect } from "react";

const useListenToOutsideClick = (
  ref: React.RefObject<any>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
};

export default useListenToOutsideClick;
