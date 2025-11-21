"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-[#d6c8b8] to-[#d6c1a9] px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight whitespace-pre-line">
              {t("hero.title")}
            </h1>

            {/* Benefits List */}
            <div className="space-y-5 mb-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={28} />
                  <span className="text-white text-lg lg:text-xl">{t(`hero.benefit.${i}`)}</span>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#2d6a7d] fill-[#2d6a7d]" size={24} />
                ))}
              </div>
              <span className="text-white text-lg font-semibold">{t("hero.rating")}</span>
            </div>

            {/* CTA Button */}
            <button className="bg-[#2d6a7d] hover:bg-[#245661] text-white px-10 py-4 rounded-full font-bold text-lg lg:text-xl transition duration-300 shadow-xl">
              {t("hero.cta")}
            </button>
          </motion.div>

          {/* Right - Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/woman.png"
              alt="Smiling woman"
              className="w-full rounded-2xl  object-cover"
            />

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-16 -left-4 lg:left-0 bg-white rounded-2xl p-6 shadow-2xl w-48 text-center"
            >
              <p className="text-gray-900 font-bold text-lg leading-tight whitespace-pre-line">
                {t("hero.card.1")}
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-32 -right-4 lg:right-0 bg-white rounded-2xl p-6 shadow-2xl w-48 text-center"
            >
              <p className="text-gray-900 font-bold text-lg leading-tight whitespace-pre-line">
                {t("hero.card.2")}
              </p>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl w-48 text-center"
            >
              <p className="text-gray-900 font-bold text-lg leading-tight whitespace-pre-line">
                {t("hero.card.3")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}