import React from "react";

const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const newToast = React.useCallback((variant, message) => {
    setToasts((current) => [
      ...current,
      { id: Math.random(), variant, message },
    ]);
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  const value = React.useMemo(
    () => ({
      toasts,
      newToast,
      dismissToast,
      dismissAllToasts,
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;

export const useToastContext = () => {
  return React.useContext(ToastContext);
};
