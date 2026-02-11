import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [shareInfo, setShareInfo] = useState(false);

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
      ? location.error ||
        `Lat: ${location.lat}, Lng: ${location.lng}, ±${location.accuracy}m`
      : "Not shared",
    timestamp: new Date().toLocaleString(),
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const device = shareInfo ? getDeviceInfo() : null;
      const location = shareInfo ? await getLocation() : null;
      const templateParams = buildTemplateParams(e.target, device, location);
      await emailjs.send(
        "service_alvub5r",
        "template_lsfy6ie",
        templateParams,
        "_32Bh6BEuVqRbRXpi",
      );
      alert("Message sent successfully!");
      formRef.current.reset();
      setShareInfo(false);
    } catch (err) {
      alert("Failed to send email.");
      console.error(err);
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
          <div className="lg:col-span-2 space-y-6">
            <div className="group bg-[#06204a]/50 backdrop-blur-sm border border-white/10 shadow-xl rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-blue-100/70">visethxxxx@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="group bg-[#06204a]/50 backdrop-blur-sm border border-white/10 shadow-xl rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
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
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/viseth_sopheach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://t.me/Viseth_Sopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <FaTelegram />
              </a>
              <a
                href="https://x.com/VisethSopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-[#06204a]/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10">
            <div onSubmit={sendEmail} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-blue-100/80 mb-2 ml-1">
                    Name
                  </label>
                  <input
                    name="user_name"
                    required
                    type="text"
                    className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-100/80 mb-2 ml-1">
                    Email
                  </label>
                  <input
                    name="user_email"
                    required
                    type="email"
                    className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-100/80 mb-2 ml-1">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-100/80 mb-2 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              <div className="bg-white/5 border border-white/20 rounded-xl p-5">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={shareInfo}
                    onChange={(e) => setShareInfo(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                  <div>
                    <span className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      Share my device type and location information
                    </span>
                    <p className="text-xs text-blue-100/60 mt-1">
                      This helps us provide better support and detect potential
                      issues. Includes: browser type, OS, screen resolution, and
                      approximate location.
                    </p>
                  </div>
                </label>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  sendEmail({
                    target: formRef.current,
                    preventDefault: () => {},
                  });
                }}
                disabled={isSending}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transform active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
