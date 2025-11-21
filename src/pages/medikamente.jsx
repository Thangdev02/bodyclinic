"use client";

import "./medikamente.css";
import { useTranslation } from "react-i18next";

const MedicamentHeader = () => {
  const { t } = useTranslation();
  return (
    <section className="medicament-hero">
      <div className="medicament-hero-content">
        <h1>{t("medicamente.header.title")}</h1>
        <p>{t("medicamente.header.subtitle")}</p>
      </div>
    </section>
  );
};

const DoctorVerification = () => {
  const { t } = useTranslation();
  return (
    <div className="author-info">
      <img src="./avtdoctor.webp" alt="Dr. Nicolette Lammers" className="avatar" />
      <div>
        <p>{t("medicamente.author.checked")}</p>
        <p>
          <span style={{ color: '#568a9a' }}>{t("medicamente.author.name")}</span> geprüft.
        </p>
      </div>
    </div>
  );
};

const MedicationsGrid = () => {
  const medications = [
    { name: "Saxenda", logo: "./logosaxenda.webp" },
    { name: "Ozempic", logo: "./logooze.webp" },
    { name: "Wegovy", logo: "./logowe.webp" },
    { name: "Mounjaro", logo: "./logomoun.webp" },
    { name: "Rybelsus", logo: "./logorybe.webp" },
    { name: "Mysimba", logo: "./logomyse.webp" },
  ];

  return (
    <div className="medications-grid">
      {medications.map((med) => (
        <div key={med.name} className="medication-logo-card">
          <img src={med.logo || "/placeholder.svg"} alt={med.name} />
        </div>
      ))}
    </div>
  );
};

const MedicationInfoTable = ({ medication }) => {
  const { t } = useTranslation();
  return (
    <table className="medication-table">
      <tbody>
        <tr>
          <td className="table-label">{t("medicamente.table.price")}</td>
          <td>{medication.preis}</td>
        </tr>
        <tr>
          <td className="table-label">{t("medicamente.table.administration")}</td>
          <td>{medication.verabreichung}</td>
        </tr>
        <tr>
          <td className="table-label">{t("medicamente.table.active")}</td>
          <td>{medication.wirkstoff}</td>
        </tr>
        <tr>
          <td className="table-label">{t("medicamente.table.target")}</td>
          <td>{medication.zielgruppe}</td>
        </tr>
        <tr>
          <td className="table-label">{t("medicamente.table.mechanism")}</td>
          <td>{medication.wirkungsweise}</td>
        </tr>
        <tr>
          <td className="table-label">{t("medicamente.table.sideeffects")}</td>
          <td>
            <p>{medication.nebenwirkungen}</p>
            <button className="side-effects-btn">
              {t("medicamente.table.btn.sideeffects", { name: medication.name })}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const MedicationCard = ({ medication, isOdd }) => {
  const { t } = useTranslation();
  return (
    <div className={`medication-card ${isOdd ? "odd" : "even"}`}>
      <div className="medication-card-header">
        <img src={medication.logo || "/placeholder.svg"} alt={medication.name} className="medication-card-logo" />
        <h2>{medication.name}</h2>
      </div>
      <p className="medication-description">{medication.description}</p>
      <MedicationInfoTable medication={medication} />
      <div className="medication-actions">
        <button className="btn-primary">{t("medicamente.btn.view")}</button>
        <button className="btn-secondary">{t("medicamente.btn.treatment")}</button>
      </div>
    </div>
  );
};

const MedicamentePage = () => {
  const { t } = useTranslation();

  const medicationsData = [
    {
      name: "Saxenda",
      logo: "./logosaxenda.webp",
      description: "Saxenda ist ein injzierbares Arzneimittel, das entwickelt wurde, um Erwachsenen mit Adipositas beim Abnehmen und Halten ihres Gewichts zu helfen. Das Medikament wurde von dem Pharmaunternehmen Novo Nordisk entwickelt und ist ausschließlich auf Rezept erhältlich.",
      preis: 'Das Medikament ist ein Teil des ganzheitlichen Programms "Abnehmen mit Spritzen"\n\nStarter-Monat (niedrige Dosierung):\n• 1 Monat: 345 €\n\nProgrammverlängerung:\n• 1 Monat: 495 €\n• 2 Monate: 940 € (470 € pro Monat)\n• 3 Monate: 1.375 € (458 € pro Monat)',
      verabreichung: "Täglicher Injektionsstift",
      wirkstoff: "Liraglutid",
      zielgruppe: "Übergewicht: BMI ≥30 oder BMI ≥27 mit einer gewichtsbedingten Erkrankung",
      wirkungsweise: "Das Medikament ähnelt dem natürlichen GLP-1-Hormon. Es reguliert den Appetit, erhöht das Sättigungsgefühl und verbessert den Zuckerstoffwechsel.",
      nebenwirkungen: "Die häufigsten Nebenwirkungen sind Kopfschmerzen, Übelkeit, Durchfall, Verstopfung, Erbrechen und Müdigkeit.",
    },
    {
      name: "Ozempic",
      logo: "./logooze.webp",
      description: "Ozempic ist ein injzierbares Medikament, das zur Behandlung von Typ-2-Diabetes eingesetzt wird. Es gehört zu einer Klasse von Medikamenten, die als Glucagon-like Peptide-1 (GLP-1)-Rezeptoragonisten bekannt sind. Diese wirken auf die natürlichen GLP-1-Rezeptoren des Körpers, um den Blutzuckerspiegel zu regulieren.",
      preis: 'Preise zur Behandlung von Adipositas oder Übergewicht mit dem Wirkstoff Semaglutid finden Sie unter "Wegovy".',
      verabreichung: "Wöchentlicher Injektionsstift",
      wirkstoff: "Semaglutid",
      zielgruppe: "Typ-2-Diabetes & Übergewicht: BMI ≥30 oder BMI ≥27 mit einer gewichtsbedingten Erkrankung",
      wirkungsweise: "Tirzepatid aktiviert GIP- und GLP-1-Rezeptoren. Dies führt zu einer erhöhten Insulinfreisetzung, reduzierter Glukagonausschüttung, es verlangsammt die Magenentleerung und verringert den Appetit.",
      nebenwirkungen: "Die häufigsten Nebenwirkungen sind Kopfschmerzen, Übelkeit, Durchfall, Verstopfung, Erbrechen und Müdigkeit.",
    },
    {
      name: "Wegovy",
      logo: "./logowe.webp",
      description: "Wegovy enthält Semaglutid, ein GLP-1-Hormonanalogon, das Hunger- und Sättigungsgefühl reguliert. Es wird als ergänzende Therapie bei erwachsenen Patienten mit Adipositas oder Übergewicht eingesetzt, wenn mindestens eine gewichtsbedingte Begleiterkrankung wie Typ-2-Diabetes, Bluthochdruck oder hohes Cholesterin vorliegt.",
      preis: 'Das Medikament ist ein Teil des ganzheitlichen Programms "Abnehmen mit Spritzen".\n\nStarter-Monat (niedrige Dosierung):\n• 1 Monat: 395 €\n\nProgrammverlängerung:\n• 1 Monat: 495 €\n• 2 Monate: 940 € (470 € pro Monat)\n• 3 Monate: 1.375 € (458 € pro Monat)\n\nBei der höchsten Dosierung 2,4 mg fallen 100 Euro zusätzlich pro Monat an.',
      verabreichung: "Wöchentlicher Injektionsstift",
      wirkstoff: "Semaglutid",
      zielgruppe: "Übergewicht: BMI ≥30 oder BMI ≥27 mit einer gewichtsbedingten Erkrankung",
      wirkungsweise: "Das Medikament ähnelt dem natürlichen GLP-1-Hormon. Es reguliert den Appetit, erhöht das Sättigungsgefühl und verbessert den Zuckerstoffwechsel.",
      nebenwirkungen: "Die häufigsten Nebenwirkungen sind Kopfschmerzen, Übelkeit, Durchfall, Verstopfung, Erbrechen und Müdigkeit.",
    },
    {
      name: "Mounjaro",
      logo: "./logomoun.webp",
      description: "Mounjaro enthält den Wirkstoff Tirzepatid und wird zur Behandlung von Typ-2-Diabetes und zur Gewichtskontrolle eingesetzt. Mounjaro beeinflusst das Hunger- und Sättigungsgefühl. Es senkt den Blutzuckerspiegel und verbessert die Insulinproduktion im Körper. Das Medikament hat zudem positive Effekte auf die Gewichtsabnahme.",
      preis: 'Das Medikament ist ein Teil des ganzheitlichen Programms "Abnehmen mit Spritzen"\n\nStarter-Monat (niedrige Dosierung):\n• 1 Monat: 450 €\n\nProgrammverlängerung:\n• 1 Monat: 645 €\n• 2 Monate: 1.230 € (615 € pro Monat)\n• 3 Monate: 1.820 € (607 € pro Monat)\n\nBei den höchsten Dosierungen 12,5 mg & 15 mg fallen 100 Euro zusätzlich pro Monat an.',
      verabreichung: "Wöchentlicher Injektionsstift",
      wirkstoff: "Tirzepatid",
      zielgruppe: "Typ-2-Diabetes & Übergewicht: BMI ≥30 oder BMI ≥27 mit einer gewichtsbedingten Erkrankung",
      wirkungsweise: "Tirzepatid aktiviert GIP- und GLP-1-Rezeptoren. Dies führt zu einer erhöhten Insulinfreisetzung, reduzierter Glukagonausschüttung, es verlangsammt die Magenentleerung und verringert den Appetit.",
      nebenwirkungen: "Die häufigsten Nebenwirkungen sind Kopfschmerzen, Übelkeit, Durchfall, Verstopfung, Erbrechen und Müdigkeit.",
    },
    {
      name: "Rybelsus",
      logo: "./logorybe.webp",
      description: "Rybelsus wird zur Behandlung von Typ-2-Diabetes eingesetzt. Es regelt die Insulinproduktion an und senkt die Zuckerproduktion der Leber, wodurch der Blutzuckerspiegel stabil bleibt und Risiken wie Herzkrankheiten, Schlaganfälle und Nierenschäden reduziert werden können.",
      preis: "Rybelsus, d.h. der Markenname für die orale Darreichungsform von Semaglutid, wird in Deutschland derzeit nicht vermarktet.",
      verabreichung: "Tablettenform, 1x täglich",
      wirkstoff: "Semaglutid",
      zielgruppe: "Typ-2-Diabetes",
      wirkungsweise: "Das Medikament ähnelt dem natürlichen GLP-1-Hormon. Es reguliert den Appetit, erhöht das Sättigungsgefühl und verbessert den Zuckerstoffwechsel.",
      nebenwirkungen: "Die häufigsten Nebenwirkungen sind Kopfschmerzen, Übelkeit, Durchfall, Verstopfung, Erbrechen und Müdigkeit.",
    },
    {
      name: "Mysimba",
      logo: "./logomyse.webp",
      description: "Mysimba ist ein oral einzunehmendes Medikament, das Erwachsenen mit Adipositas hilft, Gewicht zu verlieren und das Gewicht zu halten. Dieses Medikament wirkt auf Bereiche im Gehirn, die an der Regulierung der Nahrungsaufnahme und des Energieverbrauchs beteiligt sind, und beeinflusst spezifische Heißhungerattacken.",
      preis: "Auch wenn Mysimba in Deutschland nicht im Verkehr ist, kann es ggf. über Einzelimport verordnet, eingeführt und abgegeben werden. Für eine Preisauskunft sprechen Sie uns bitte an.",
      verabreichung: "Tablettenform, 2x täglich",
      wirkstoff: "Naltrexon / Bupropion",
      zielgruppe: "Übergewicht",
      wirkungsweise: "Das Medikament ähnelt dem natürlichen GLP-1-Hormon. Es reguliert den Appetit, erhöht das Sättigungsgefühl und verbessert den Zuckerstoffwechsel.",
      nebenwirkungen: "Die häufigsten Nebenwirkungen sind Kopfschmerzen, Übelkeit, Durchfall, Verstopfung, Erbrechen und Müdigkeit.",
    },
  ];

  return (
    <div className="medicament-page">
      <MedicamentHeader />
      <DoctorVerification />

      <section className="medicament-intro" style={{ background: '#f3efeb' }}>
        <h2>{t("medicamente.intro.title")}</h2>
        <p>{t("medicamente.intro.text")}</p>
      </section>

      <section className="medications-logos-section">
        <MedicationsGrid />
      </section>

      <section className="medications-detail-section">
        {medicationsData.map((med, index) => (
          <MedicationCard key={med.name} medication={med} isOdd={index % 2 === 0} />
        ))}
      </section>
    </div>
  );
};

export default MedicamentePage;