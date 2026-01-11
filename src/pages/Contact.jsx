import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className=" pt-20 md:pt-10 flex flex-col md:flex-row bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            ទាក់ទងមកកាន់ខ្ញុំ !!!
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 text-white">
            <div className="bg-[#06204a] shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p>contact@example.com</p>
              <p>support@example.com</p>
            </div>
            <div className="bg-[#06204a] text-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p> (885) 123-4567</p>
              <p>Mon-Fri, 9am-6pm</p>
            </div>
            <div className="bg-[#06204a] shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-white mb-1">
                Location
              </h3>
              <p>123 Business Street</p>
              <p>Phnom Penh, PP 10001</p>
            </div>
            <div className="flex gap-10 bg-[#06204a] shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow text-4xl">
              <h1></h1>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://web.facebook.com/visethsopheach"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.instagram.com/viseth_sopheach/"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://t.me/Viseth_Sopheach"
              >
                <FaTelegram />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://x.com/VisethSopheach"
              >
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>
          <div className="bg-[#06204a] shadow-md rounded-xl p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="text-white font-bold w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className=" text-white font-bold w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="text-white font-bold w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="text-white font-bold w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#06204a] text-white font-semibold py-2 rounded-md hover:bg-purple-600 transition-colors"
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
