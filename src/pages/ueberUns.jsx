import CTASection from "../components/Home/CTASection"
import "./ueberUns.css"

const HeroSection = () => {
  return (
      <>
          <div className="hero-section">
              <div className="hero-content container">
                  <h1 className="hero-title">
                  Über uns
                  </h1>
                  <p className="text-3xl">The Body Clinic
                  </p>
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
  const sections = [
    {
      id: "geschichte",
      title: "Unsere Geschichte",
      description:
        "The Body Clinic ist seit über 15 Jahren ein führender Privatpraxenverbund im Bereich ästhetischer Behandlungen und medizinischer Gewichtsreduktion. Seit 2025 sind wir auch mit drei Standorten in Berlin, München und Hamburg sowie deutschlandweit via Telemedzin vertreten!",
    },
    {
      id: "standorte",
      title: "Standorte",
      description: "Erfahren Sie mehr über die Standorte von The Body Clinic in Deutschland und den Niederlanden.",
    },
    {
      id: "team",
      title: "Team & Partner",
      description: "Lernen Sie Ihre begleitenden Ärzte, Ernährungscoaches und Partner kennen.",
    },
    {
      id: "stellen",
      title: "Stellenangebote",
      description: "Informieren Sie sich über unsere aktuellen Stellenausschreibungen.",
    },
    {
      id: "blog",
      title: "Blog",
      description: "Lesen Sie hier alle unsere Blogeinträge.",
    },
    {
      id: "kontakt",
      title: "Kontakt",
      description:
        "Kontaktieren Sie uns gerne via Anruf, Email oder Termin­buchung – wir freuen uns jederzeit, von Ihnen zu hören!",
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
              <button className="ueber-uns-btn">Mehr lesen</button>
            </div>
          </section>
        ))}
      </div>
      <CTASection/>
    </div>
  )
}

export default UeberUnsPage
