"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #bcb0a1 0%, #bcb0a1 100%)",
      }}
    >
      <div className="absolute right-0 top-0 w-96 h-96 opacity-15">
        <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl top-20 right-10"></div>
      </div>
      <div className="absolute right-20 bottom-0 w-72 h-72 opacity-10">
        <div className="bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="absolute right-0 top-1/2 w-96 h-96 opacity-12">
        <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">{t("cta.title")}</h2>
          <p className="text-white text-lg mb-10 max-w-lg leading-relaxed opacity-95">
            {t("cta.desc")}
          </p>

          <button className="bg-teal-700 hover:bg-teal-800 text-white px-10 py-3 rounded-full font-bold text-base transition-colors duration-300 shadow-lg">
            {t("cta.button")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}