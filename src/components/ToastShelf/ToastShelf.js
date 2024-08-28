import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, dismissToast, dismissAllToasts } = useToastContext();

  React.useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.code === "Escape") {
        dismissAllToasts();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper}>
          <Toast key={id} variant={variant} onDismiss={() => dismissToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
