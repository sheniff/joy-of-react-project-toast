import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToastContext } from "../ToastProvider/ToastProvider";
import { useEscapeKey } from "../../hooks/useEscapeKey";

function ToastShelf() {
  const { toasts, dismissToast, dismissAllToasts } = useToastContext();
  useEscapeKey(dismissAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
