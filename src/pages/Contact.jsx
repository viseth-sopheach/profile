import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [shareInfo, setShareInfo] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle");

  const getDeviceInfo = () => {
    const ua = navigator.userAgent;

    const browser = ua.includes("Edg")
      ? "Edge"
      : ua.includes("Firefox")
        ? "Firefox"
        : ua.includes("Chrome")
          ? "Chrome"
          : ua.includes("Safari")
            ? "Safari"
            : "Unknown";

    const os = ua.includes("Android")
      ? "Android"
      : ua.includes("iPhone") || ua.includes("iPad")
        ? "iOS"
        : ua.includes("Win")
          ? "Windows"
          : ua.includes("Mac")
            ? "MacOS"
            : ua.includes("Linux")
              ? "Linux"
              : "Unknown";

    return {
      browser,
      os,
      screen: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
    };
  };

  const getLocation = (timeout = 8000) => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve({ error: "Geolocation not supported" });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
          }),
        (err) => resolve({ error: err.message }),
        { timeout },
      );
    });
  };

  const buildTemplateParams = (form, device, location) => ({
    user_name: form.user_name.value,
    user_email: form.user_email.value,
    subject: form.subject.value,
    message: form.message.value,
    device_info: device
      ? `Browser: ${device.browser}, OS: ${device.os}, Screen: ${device.screen}, Lang: ${device.language}`
      : "Not shared",
    location_info: location
      ? location.error || `Lat: ${location.lat}, Lng: ${location.lng}, ±${location.accuracy}m`
      : "Not shared",
    timestamp: new Date().toLocaleString(),
  });

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    setStatusType("idle");

    try {
      const device = shareInfo ? getDeviceInfo() : null;
      const location = shareInfo ? await getLocation() : null;
      const templateParams = buildTemplateParams(formRef.current, device, location);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(templateParams),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.details || data.error || "Failed to send message.");
      }

      setStatusType("success");
      setStatusMessage(data.message || "Message sent successfully!");
      formRef.current.reset();
      setShareInfo(false);
    } catch (error) {
      console.error(error);
      setStatusType("error");
      setStatusMessage(error.message || "Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section-shell">
      <div className="content-wrap">
        <header className="mb-10">
          <h1 className="section-title">ទាក់ទងមកកាន់ខ្ញុំ !!!</h1>
          <p className="section-subtitle">
            Have a question or want to work together? We'd love to hear from you.
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
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">visetxxxxx@gamil.com</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-3 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">(885) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">Social</p>
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
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="user_name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-cyan-300"
                />
                <input
                  name="user_email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-cyan-300"
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-cyan-300"
              />

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us more..."
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-cyan-300"
              />
{/* 
              <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={shareInfo}
                  onChange={(event) => setShareInfo(event.target.checked)}
                  className="h-4 w-4 accent-cyan-500 dark:accent-cyan-400"
                />
                Share device & location info
              </label> */}

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message (Just UI, it cannot send message)"}
              </button>

              {statusMessage && (
                <p
                  className={`text-sm ${
                    statusType === "success"
                      ? "text-emerald-700 dark:text-emerald-300"
                      : "text-rose-700 dark:text-rose-300"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;