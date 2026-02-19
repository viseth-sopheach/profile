import { useRef, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  console.log(import.meta.env.VITE_API_URL);

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [shareInfo, setShareInfo] = useState(false);

  // ---------------- Device Info ----------------
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

  // ---------------- Location ----------------
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

  // ---------------- Build Data ----------------
  const buildTemplateParams = (form, device, location) => ({
    user_name: form.user_name.value,
    user_email: form.user_email.value,
    subject: form.subject.value,
    message: form.message.value,
    device_info: device
      ? `Browser: ${device.browser}, OS: ${device.os}, Screen: ${device.screen}, Lang: ${device.language}`
      : "Not shared",
    location_info: location
      ? location.error ||
        `Lat: ${location.lat}, Lng: ${location.lng}, ±${location.accuracy}m`
      : "Not shared",
    timestamp: new Date().toLocaleString(),
  });

  // Send Email
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const device = shareInfo ? getDeviceInfo() : null;
      const location = shareInfo ? await getLocation() : null;

      const templateParams = buildTemplateParams(
        formRef.current,
        device,
        location,
      );

      const response = await fetch(
        "/send-email", // ← this is the key change
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(templateParams),
        },
      );

      alert("Message sent successfully!");
      formRef.current.reset();
      setShareInfo(false);
    } catch (error) {
      console.error(error);
      alert("Failed to send email.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-24 md:pt-16 bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a] min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            ទាក់ទងមកកាន់ខ្ញុំ !!!
          </h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group bg-[#06204a]/50 backdrop-blur-sm border border-white/10 shadow-xl rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-blue-100/70">visethsopheach@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="group bg-[#06204a]/50 backdrop-blur-sm border border-white/10 shadow-xl rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                  <p className="text-blue-100/70">(885) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="flex justify-around bg-[#06204a]/80 border border-white/10 shadow-2xl rounded-2xl p-6 text-3xl">
              <a
                href="https://web.facebook.com/visethsopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/viseth_sopheach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://t.me/Viseth_Sopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                <FaTelegram />
              </a>
              <a
                href="https://x.com/VisethSopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3 bg-[#06204a]/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="user_name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
                />
                <input
                  name="user_email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us more..."
                className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white resize-none"
              />

              <label className="flex items-center gap-3 text-white">
                <input
                  type="checkbox"
                  checked={shareInfo}
                  onChange={(e) => setShareInfo(e.target.checked)}
                />
                Share device & location info
              </label>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
