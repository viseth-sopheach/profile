import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

function Toast({ type = "success", message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div
      role="status"
      className={[
        "fixed bottom-6 left-1/2 z-70 flex w-[min(360px,calc(100vw-2rem))] -translate-x-1/2 items-start gap-3 rounded-2xl border p-4 shadow-xl transition-all duration-300",
        "animate-[toast-in_0.3s_ease-out]",
        isSuccess
          ? "border-emerald-300 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-950/90"
          : "border-rose-300 bg-rose-50 dark:border-rose-500/40 dark:bg-rose-950/90",
      ].join(" ")}
    >
      {isSuccess ? (
        <FaCheckCircle className="mt-0.5 shrink-0 text-lg text-emerald-600 dark:text-emerald-300" />
      ) : (
        <FaExclamationCircle className="mt-0.5 shrink-0 text-lg text-rose-600 dark:text-rose-300" />
      )}
      <p
        className={[
          "text-sm font-medium leading-snug",
          isSuccess
            ? "text-emerald-800 dark:text-emerald-100"
            : "text-rose-800 dark:text-rose-100",
        ].join(" ")}
      >
        {message}
      </p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className={[
          "ml-auto text-xs font-semibold uppercase tracking-wide",
          isSuccess
            ? "text-emerald-600 hover:text-emerald-800 dark:text-emerald-300"
            : "text-rose-600 hover:text-rose-800 dark:text-rose-300",
        ].join(" ")}
      >
        Close
      </button>
    </div>
  );
}

export default Toast;
