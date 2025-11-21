import CTASection from "../components/Home/CTASection"
import "./ueberUns.css"
import { useTranslation } from "react-i18next"

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title">
            {t("ueberuns.hero.title")}
          </h1>
          <p className="text-3xl">{t("ueberuns.hero.subtitle")}</p>
        </div>

        {/* Shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </>
  )
}

const UeberUnsPage = () => {
  const { t } = useTranslation()

  const sections = [
    {
      id: "geschichte",
      title: t("ueberuns.section.geschichte.title"),
      description: t("ueberuns.section.geschichte.desc"),
    },
    {
      id: "standorte",
      title: t("ueberuns.section.standorte.title"),
      description: t("ueberuns.section.standorte.desc"),
    },
    {
      id: "team",
      title: t("ueberuns.section.team.title"),
      description: t("ueberuns.section.team.desc"),
    },
    {
      id: "stellen",
      title: t("ueberuns.section.stellen.title"),
      description: t("ueberuns.section.stellen.desc"),
    },
    {
      id: "blog",
      title: t("ueberuns.section.blog.title"),
      description: t("ueberuns.section.blog.desc"),
    },
    {
      id: "kontakt",
      title: t("ueberuns.section.kontakt.title"),
      description: t("ueberuns.section.kontakt.desc"),
    },
  ]

  return (
    <div className="ueber-uns-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <div className="ueber-uns-content">
        {sections.map((section) => (
          <section key={section.id} className="ueber-uns-section">
            <div className="ueber-uns-section-left">
              <h2 className="ueber-uns-section-title">{section.title}</h2>
            </div>
            <div className="ueber-uns-section-right">
              <p className="ueber-uns-section-description">{section.description}</p>
              <button className="ueber-uns-btn">{t("ueberuns.btn.more")}</button>
            </div>
          </section>
        ))}
      </div>
      <CTASection />
    </div>
  )
}

export default UeberUnsPage