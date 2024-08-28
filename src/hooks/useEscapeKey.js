import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.code === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [callback]);
};
