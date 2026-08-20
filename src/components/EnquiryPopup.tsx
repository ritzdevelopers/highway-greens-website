"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { submitEnquiry } from "@/lib/submitEnquiry";

type EnquiryPopupContextValue = {
  isOpen: boolean;
  openEnquiry: () => void;
  closeEnquiry: () => void;
};

const EnquiryPopupContext = createContext<EnquiryPopupContextValue | null>(
  null
);

export function useEnquiryPopup() {
  const ctx = useContext(EnquiryPopupContext);

  return (
    ctx ?? {
      isOpen: false,
      openEnquiry: () => {},
      closeEnquiry: () => {},
    }
  );
}

const initialFormData = {
  fullName: "",
  email: "",
  mobile: "",
  interestedIn: "",
  message: "",
};

function EnquiryPopupModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setStatus("");
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const pagePath =
        typeof window !== "undefined" ? window.location.pathname : "";
      const sourceLabel = "Enquiry Popup";
      const message = formData.message.trim()
        ? `${formData.message.trim()}\n\n[${sourceLabel}${pagePath ? ` | ${pagePath}` : ""}]`
        : `[${sourceLabel}${pagePath ? ` | ${pagePath}` : ""}]`;

      await submitEnquiry({
        formType: "contact",
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        interestedIn: formData.interestedIn,
        message,
        source: "popup",
      });

      setFormData(initialFormData);
      setFormKey((key) => key + 1);
      setStatus("Thank you! Your enquiry has been submitted.");
      window.setTimeout(() => onClose(), 1600);
    } catch (error) {
      console.error("Enquiry popup submission error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "h-[56px] w-full bg-white px-4 text-[15px] text-slate-800 outline-none placeholder:text-slate-500";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6"
        >
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-popup-title"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-[920px] overflow-y-auto rounded-[18px] bg-[#ffebe0] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-10"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#213A2D] transition hover:bg-white"
            >
              <X size={18} />
            </button>

            <h2
              id="enquiry-popup-title"
              className="pr-10 text-[24px] font-medium leading-tight text-[#213A2D] sm:text-[28px]"
            >
              Enquire Now
            </h2>
            <p className="mt-2 text-[14px] leading-6 text-slate-600 font-roboto">
              Share your details and our team will get back to you shortly.
            </p>

            <form
              key={formKey}
              onSubmit={handleSubmit}
              className="mt-7 flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  required
                  className={fieldClass}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  required
                  className={fieldClass}
                />

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number*"
                  required
                  className={fieldClass}
                />

                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  required
                  className={`${fieldClass} appearance-none text-slate-700`}
                >
                  <option value="" disabled>
                    I&apos;m Interested In*
                  </option>
                  <option value="Residential Plots">Residential Plots</option>
                  <option value="Commercial Plots">Commercial Plots</option>
                  <option value="Download Brochure">Download Brochure</option>
                  <option value="Site Visit">Site Visit</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message / Query"
                rows={3}
                className="min-h-[110px] w-full resize-none bg-white px-4 py-3 text-[15px] text-slate-800 outline-none placeholder:text-slate-500"
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <label className="flex max-w-[560px] items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-[18px] w-[18px] shrink-0 accent-[#c29665]"
                  />
                  <span className="text-[11px] leading-[1.45] text-slate-700 font-roboto">
                    By submitting this form, I consent to being contacted by
                    Kinza Estate and its authorised representatives through
                    call, SMS, email or WhatsApp regarding Highway Greens, its
                    availability and related offers. This consent will override
                    any DND or NDNC registration.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-[56px] w-full shrink-0 cursor-pointer items-center justify-center border border-[#caa56b] bg-[#BD8B59] px-8 text-[16px] font-semibold tracking-wide text-black transition hover:bg-white font-roboto disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[220px]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>

              {status && (
                <p className="text-center text-sm text-slate-700 sm:text-left">{status}</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function EnquiryPopupProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = useCallback(() => setIsOpen(true), []);
  const closeEnquiry = useCallback(() => setIsOpen(false), []);

  return (
    <EnquiryPopupContext.Provider
      value={{ isOpen, openEnquiry, closeEnquiry }}
    >
      {children}
      <EnquiryPopupModal isOpen={isOpen} onClose={closeEnquiry} />
    </EnquiryPopupContext.Provider>
  );
}
