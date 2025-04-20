import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    if (!captchaValue) {
      errors.captcha = "Please verify you are not a robot";
    }
    return errors;
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors);
    } else {
      setError({});
      setIsSending(true);

      emailjs
        .send(
          "service_i6czlkb",
          "template_hom88kb",
          formData,
          "3K_0_ska66SJw7H8N"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          // Reset the reCAPTCHA
          recaptchaRef.current.reset();
          setCaptchaValue(null);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Message failed to send, please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-8 text-center text-4xl font-semibold tracking-tighter"
      >
        Let's Connect
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col space-y-4">
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:space-x-4"
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              />
              {error.name && (
                <p className="text-rose-800 text-sm mt-1">{error.name}</p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              />
              {error.email && (
                <p className="text-rose-800 text-sm mt-1">{error.email}</p>
              )}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              rows={5}
            />
            {error.message && (
              <p className="text-rose-800 text-sm mt-1">{error.message}</p>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center my-4"
          >
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Ley1xQrAAAAAAzAW_w8Lm2COd0N6CanJZegdKTr" // Replace with your actual site key
              onChange={handleCaptchaChange}
              theme="dark"
            />
            {error.captcha && (
              <p className="text-rose-800 text-sm mt-1 text-center">
                {error.captcha}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <button
              type="submit"
              className={`w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
                isSending ? "cursor-not-allowed" : ""
              }`}
              disabled={isSending}
            >
              <div className="flex items-center justify-center gap-2">
                {isSending ? "Sending..." : "Send Message"}
                <FiSend />
              </div>
            </button>
          </motion.div>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
