import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Kontakt = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("kontakt.alert"));
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#bcb0a1] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#e8e0d8] rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#c9beb4] rounded-full opacity-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("kontakt.title")}</h1>
            <p className="text-lg opacity-90 mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t("kontakt.desc") }} />

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.28 21 3 13.72 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-80">{t("kontakt.phone.label")}</p>
                  <p className="text-xl font-medium">{t("kontakt.phone.number")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider opacity-80">{t("kontakt.email.label")}</p>
                  <p className="text-xl font-medium">{t("kontakt.email.address")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  {t("kontakt.form.name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder={t("kontakt.form.name.placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  {t("kontakt.form.email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder={t("kontakt.form.email.placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  {t("kontakt.form.phone")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder={t("kontakt.form.phone.placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  {t("kontakt.form.message")} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
                  placeholder={t("kontakt.form.message.placeholder")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-teal-700 text-white font-medium rounded-full hover:bg-teal-800 transition shadow-lg hover:shadow-xl"
              >
                {t("kontakt.form.button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;