"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BMICalculator() {
  const { t } = useTranslation();
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);

  const bmi = (weight / (height / 100) ** 2).toFixed(1);

  const getBMICategory = (bmi) => {
    const value = Number.parseFloat(bmi);
    if (value < 18.5) return { category: t("bmi.category.underweight"), color: "#d2f9ff" };
    if (value < 25) return { category: t("bmi.category.normal"), color: "bg-cyan-200" };
    if (value < 30) return { category: t("bmi.category.overweight"), color: "bg-yellow-200" };
    return { category: t("bmi.category.obese"), color: "bg-red-200" };
  };

  const category = getBMICategory(bmi);
  const message = bmi >= 18.5 && bmi < 25 ? t("bmi.message.normal") : t("bmi.message.other");

  return (
    <section className="bg-gradient-to-b from-[#f1ece7] to-[#f1ece7] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900" style={{ lineHeight: "1.2" }}>
              {t("bmi.title")}
            </h2>
            <p className="text-gray-700 text-lg" style={{ lineHeight: "2" }}>
              {t("bmi.desc")}
            </p>
          </div>

          {/* Right - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">{t("bmi.calculator.title")}</h3>

            {/* Height */}
            <div className="mb-8">
              <label className="block text-gray-900 font-medium mb-4">{t("bmi.height")}</label>
              <input
                type="range"
                min="120"
                max="250"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>120 cm</span>
                <span>{height} cm</span>
                <span>250 cm</span>
              </div>
            </div>

            {/* Weight */}
            <div className="mb-8">
              <label className="block text-gray-900 font-medium mb-4">{t("bmi.weight")}</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setWeight(Math.max(20, weight - 1))}
                  className="border-2 border-gray-300 w-10 h-10 rounded hover:bg-gray-100"
                >
                  −
                </button>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="flex-1 text-center text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2"
                />
                <button
                  onClick={() => setWeight(Math.min(200, weight + 1))}
                  className="border-2 border-gray-300 w-10 h-10 rounded hover:bg-gray-100"
                >
                  +
                </button>
                <span className="text-gray-700 font-medium">kg</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-gray-600 mb-2">{t("bmi.result")}</p>
              <p className="text-4xl font-bold text-gray-900">{bmi}</p>
            </div>

            {/* Category */}
            <div className={`${category.color} p-6 rounded-lg`}>
              <p className="font-bold text-gray-900 mb-3">{category.category}</p>
              <p className="text-gray-800 text-xl">{message}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}