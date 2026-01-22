import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
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
                  <p className="text-blue-100/70">contact@example.com</p>
                  <p className="text-blue-100/70">support@example.com</p>
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
                  <p className="text-blue-100/70 text-sm italic">
                    Mon-Fri, 9am-6pm
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-[#06204a]/50 backdrop-blur-sm border border-white/10 shadow-xl rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Location
                  </h3>
                  <p className="text-blue-100/70">123 Business Street</p>
                  <p className="text-blue-100/70">Phnom Penh, PP 10001</p>
                </div>
              </div>
            </div>
            <div className="flex justify-around bg-[#06204a]/80 border border-white/10 shadow-2xl rounded-2xl p-6 text-3xl">
              <Link
                to="https://web.facebook.com/visethsopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                to="https://www.instagram.com/viseth_sopheach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                to="https://t.me/Viseth_Sopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
              >
                <FaTelegram />
              </Link>
              <Link
                to="https://x.com/VisethSopheach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 bg-[#06204a]/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-blue-100/80 mb-2 ml-1">
                    Name
                  </label>
                  <input
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
                  rows="5"
                  className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transform active:scale-[0.98] transition-all duration-200 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
