"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

export default function Finden() {
  const { t } = useTranslation();

  const programs = [
    {
      title: t("finden.program.1.title"),
      features: [
        t("finden.program.1.f1"),
        t("finden.program.1.f2"),
        t("finden.program.1.f3"),
        t("finden.program.1.f4"),
      ],
      price: t("finden.program.1.button"),
    },
    {
      title: t("finden.program.2.title"),
      features: [
        t("finden.program.2.f1"),
        t("finden.program.2.f2"),
        t("finden.program.2.f3"),
        t("finden.program.2.f4"),
      ],
      price: t("finden.program.2.button"),
    },
    {
      title: t("finden.program.3.title"),
      features: [
        t("finden.program.3.f1"),
        t("finden.program.3.f2"),
        t("finden.program.3.f3"),
      ],
      price: t("finden.program.3.button"),
    },
  ];

  const leftFeatures = [
    t("finden.included.1"),
    t("finden.included.2"),
    t("finden.included.3"),
  ];

  return (
    <section className="bg-gradient-to-b from-[#ede8e2] to-[#ede8e2] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-start mb-4 text-gray-900">{t("finden.title")}</h2>
        <p className="text-start text-gray-700 mb-16 text-lg">
          {t("finden.desc")}
        </p>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-3">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 whitespace-pre-line">
              {t("finden.all_included")}
            </h3>
            <div className="space-y-4">
              {leftFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-gray-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="col-span-9 grid grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl p-8 flex flex-col"
                style={{ backgroundColor: "#d8dfe0" }}
              >
                <h4 className="text-xl font-bold mb-6 text-gray-900">{program.title}</h4>
                <div className="flex-1 space-y-4 mb-8">
                  {program.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <CheckCircle className="text-teal-700 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800 transition w-full"
                  style={{ backgroundColor: "#417485" }}
                >
                  {program.price}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}