"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TimelineSection() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("timeline.step.today.title"),
      img: "./coach.webp",
      description: [
        t("timeline.step.today.1"),
        t("timeline.step.today.2"),
        t("timeline.step.today.3"),
      ],
    },
    {
      title: t("timeline.step.week1.title"),
      img: "./consultation.webp",
      description: [
        t("timeline.step.week1.1"),
        t("timeline.step.week1.2"),
        t("timeline.step.week1.3"),
      ],
    },
    {
      title: t("timeline.step.week2.title"),
      img: "./medication.webp",
      description: [
        t("timeline.step.week2.1"),
        t("timeline.step.week2.2"),
        t("timeline.step.week2.3"),
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#ede8e2] to-[#ede8e2] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t("timeline.title")}
        </h2>
        <p className="text-center text-gray-700 mb-16">{t("timeline.desc")}</p>

        <div className="grid grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="bg-gray-300 rounded-2xl h-48 mb-6 flex items-center justify-center overflow-hidden">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover rounded-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>

              {/* Timeline dot and line */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex-shrink-0"></div>
                {idx < steps.length - 1 && <div className="flex-1 h-1 bg-gray-300"></div>}
              </div>

              {/* Features */}
              <div className="space-y-3">
                {step.description.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold text-lg">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-700 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800 transition">
            {t("timeline.button")}
          </button>
        </div>
      </div>
    </section>
  );
}