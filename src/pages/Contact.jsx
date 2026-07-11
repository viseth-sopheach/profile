import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Toast from "../compoments/Toast";

const isValidEmail = (value = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

  const validate = (form) => {
    const errors = {};
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if (!name) errors.user_name = "Name is required.";
    if (!email) errors.user_email = "Email is required.";
    else if (!isValidEmail(email))
      errors.user_email = "Enter a valid email address.";
    if (!message) errors.message = "Message cannot be empty.";

    return errors;
  };

  // Only these 4 fields are ever sent to the backend / Gmail.
  const buildTemplateParams = (form) => ({
    user_name: form.user_name.value.trim(),
    user_email: form.user_email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  });

  const sendEmail = async (event) => {
    event.preventDefault();
    const form = formRef.current;

    const errors = validate(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSending(true);
    setToast(null);

    try {
      const templateParams = buildTemplateParams(form);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(templateParams),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.details || data.error || "Failed to send message.",
        );
      }

      setToast({
        type: "success",
        message:
          data.message ||
          "Message sent successfully! I'll get back to you soon.",
      });
      form.reset();
      setFieldErrors({});
    } catch (error) {
      console.error(error);
      setToast({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClass = (field) =>
    [
      "w-full rounded-xl border bg-white px-4 py-3 text-slate-800 outline-none transition dark:bg-slate-900 dark:text-slate-100",
      fieldErrors[field]
        ? "border-rose-400 focus:border-rose-500 dark:border-rose-500/70"
        : "border-slate-300 focus:border-cyan-500 dark:border-slate-600 dark:focus:border-cyan-300",
    ].join(" ");

  return (
    <section className="section-shell">
      <div className="content-wrap">
        <header className="mb-10">
          <h1 className="section-title">ទាក់ទងមកកាន់ខ្ញុំ !!!</h1>
          <p className="section-subtitle">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-5">
          <aside className="space-y-4 lg:col-span-2">
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/15 p-3 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    visetxxxxx@gamil.com
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-3 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    (885) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                Social
              </p>
              <div className="flex justify-between text-3xl text-slate-700 dark:text-slate-200">
                <a
                  href="https://web.facebook.com/visethsopheach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-500 dark:hover:text-blue-300"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.instagram.com/viseth_sopheach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-pink-500 dark:hover:text-pink-300"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://t.me/Viseth_Sopheach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cyan-500 dark:hover:text-cyan-300"
                  aria-label="Telegram"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://x.com/VisethSopheach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-slate-500 dark:hover:text-slate-400"
                  aria-label="X"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </aside>

          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              noValidate
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Your name"
                    className={inputClass("user_name")}
                    onChange={() =>
                      setFieldErrors((prev) => ({
                        ...prev,
                        user_name: undefined,
                      }))
                    }
                  />
                  {fieldErrors.user_name && (
                    <p className="mt-1 text-xs font-medium text-rose-600 dark:text-rose-400">
                      {fieldErrors.user_name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass("user_email")}
                    onChange={() =>
                      setFieldErrors((prev) => ({
                        ...prev,
                        user_email: undefined,
                      }))
                    }
                  />
                  {fieldErrors.user_email && (
                    <p className="mt-1 text-xs font-medium text-rose-600 dark:text-rose-400">
                      {fieldErrors.user_email}
                    </p>
                  )}
                </div>
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className={inputClass("subject")}
              />

              <div>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us more..."
                  className={`resize-none ${inputClass("message")}`}
                  onChange={() =>
                    setFieldErrors((prev) => ({ ...prev, message: undefined }))
                  }
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-xs font-medium text-rose-600 dark:text-rose-400">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white dark:border-slate-950/40 dark:border-t-slate-950" />
                )}
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}

export default Contact;
