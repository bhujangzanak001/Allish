import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function SmoothScroll() {
  const location = useLocation();
  const getOffset = (id: string) => {
    const headerSize = 92; // Adjust this value to match your header height
    const noOffsetIdList = ["pocket"];
    return noOffsetIdList.filter((item) => item === id).length > 0
      ? window.innerWidth <= 768
        ? -headerSize
        : 0
      : -headerSize;
  };
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        const yOffset = getOffset(id); // Adjust this value to match your header height
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return null;
}
