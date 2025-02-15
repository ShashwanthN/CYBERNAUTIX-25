import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NeonPulse = ({ children }) => (
  <motion.h1
    initial={{ opacity: 0.8 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, repeat: Infinity }}
    className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-8 text-center"
  >
    {children}
  </motion.h1>
);

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black relative">
      <ToastContainer />
      {/* Animated Background Elements */}
      <div className="absolute h-full w-full inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(0,255,128,0.05)_0%,rgba(0,0,0,0)_50%,rgba(0,255,128,0.05)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,128,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="relative h-full z-10 container mx-auto py-4 flex flex-col">
        <NeonPulse>Get in Touch</NeonPulse>

        <motion.div 
          className="flex-1 lg:max-w-4xl w-full mx-auto bg-black/40 backdrop-blur-lg rounded-xl shadow-2xl p-8 !border space-y-8 !border-green-500/30 overflow-y-auto scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-6">
                <div className="!border-l-4 !border-green-500 pl-4">
                  <h2 className="text-xl font-semibold text-green-400">Send us a Message</h2>
                  <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: FiUser, name: 'name', placeholder: 'Your Name', type: 'text' },
                    { icon: FiMail, name: 'email', placeholder: 'Your Email', type: 'email' },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <field.icon className="absolute top-3 left-3 text-green-500" />
                      <input
                        {...field}
                        className="w-full pl-10 pr-4 py-2.5 bg-black/30 rounded-lg !border !border-gray-700 focus:!border-green-500 focus:ring-1 focus:ring-green-500/50 text-gray-100 placeholder-gray-500 transition-all"
                      />
                    </div>
                  ))}

                  <div className="relative">
                    <FiMessageSquare className="absolute top-3 left-3 text-green-500" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      className="w-full pl-10 pr-4 py-2.5 bg-black/30 rounded-lg !border !border-gray-700 focus:!border-green-500 focus:ring-1 focus:ring-green-500/50 text-gray-100 placeholder-gray-500 transition-all"
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </motion.form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="!border-l-4 !border-green-500 pl-4">
                <h2 className="text-xl font-semibold text-green-400">Contact Information</h2>
                <p className="text-sm text-gray-400 mt-1">Reach us through these channels</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: FiMapPin,
                    title: 'Address',
                    content: 'R.M.K. Engineering College, Tamil Nadu',
                  },
                  // {
                  //   icon: FiPhone,
                  //   title: 'Phone',
                  //   content: (
                  //     <>
                  //       <p>+91 90806 39960</p>
                  //       <p>+91 99522 76785</p>
                  //     </>
                  //   ),
                  // },
                  {
                    icon: FiMail,
                    title: 'Email',
                    content: 'cybernautix@rmkec.ac.in',
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-black/30 rounded-lg !border !border-gray-700 hover:!border-green-500 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-500/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-green-400 font-medium mb-1">{item.title}</h3>
                        <div className="text-gray-300 text-sm space-y-1">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 rounded-xl overflow-hidden !border !border-gray-700 hover:!border-green-500 transition-all">
            <a 
              href="https://www.google.co.in/maps/place/R.M.K.+Engineering+College/@13.3566859,80.1413034,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d807de229f987:0x11cc13e2927bfabc!8m2!3d13.3566859!4d80.1413034!16zL20vMGM1dmd4?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all z-10" />
              <iframe
                className="w-full h-64 lg:h-72"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621356!2d80.13872847492559!3d13.356691106318891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RMK Engineering College Location"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                <span className="text-green-400 text-sm font-medium">
                  Click to open in Google Maps →
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
          