import "./ueberUns.css"

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
      <section className="ueber-uns-hero">
        <div className="ueber-uns-hero-content">
          <h1 className="ueber-uns-hero-title">Über uns</h1>
          <p className="ueber-uns-hero-subtitle">The Body Clinic</p>
        </div>
      </section>

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
    </div>
  )
}

export default UeberUnsPage
