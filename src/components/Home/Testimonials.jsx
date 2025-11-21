"use client";

import { motion } from "framer-motion";
import { Star } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.1.name"),
      rating: 5,
      text: t("testimonials.1.text"),
    },
    {
      name: t("testimonials.2.name"),
      rating: 5,
      text: t("testimonials.2.text"),
    },
    {
      name: t("testimonials.3.name"),
      rating: 5,
      text: t("testimonials.3.text"),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f3efeb] to-[#f3efeb] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t("testimonials.title")}
        </h2>
        <p className="text-center text-gray-700 mb-4">
          {t("testimonials.desc")}
        </p>

        {/* Google Rating */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <img
            src="./images/google-logo.png"
            alt="Google"
            className="w-8 h-8"
            onError={(e) => (e.target.style.display = "none")}
          />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#1e40af" className="text-blue-800" />
            ))}
          </div>
          <span className="text-blue-800 font-bold">{t("testimonials.google")}</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">{t("testimonials.review_label")}</p>
                </div>
                <img
                  src="./images/google-mini.png"
                  alt="G"
                  className="w-6 h-6 ml-auto"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}