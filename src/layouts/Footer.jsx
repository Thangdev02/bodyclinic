export default function Footer() {
    return (
      <footer className="bg-[#ede8e2] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Fußnoten</h3>
            <div className="space-y-3  text-sm">
              <p>
                1. Bei Programmen mit medikamentöser Unterstützung z.B. durch Spritzen oder Tabletten ist eine Lieferung
                durch eine Partnerapotheke von The Body Clinic möglich. Die Medikamentenlieferung erfolgt auf Wunsch des
                Patienten – unabhängig von der ärztlichen Beratung.
              </p>
            </div>
          </div>
  
          <div className="mb-8 pb-8 ">
            <h3 className="text-2xl font-bold mb-4">Quellen</h3>
            <ul className="space-y-2 text-sm" style={{color:'#568a9a'}}>
              <li>
                <a href="#" className="hover:underline">
                  Arzneiblatt. 26.05.2023. Adipositas: Orales Semaglutid erzielt 15% Gewichtsreduktion.
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  European Medicines Agency. 25.10.2024. Mounjaro: EPAR – Product Information.
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  European Medicines Agency. 08.01.2025. Wegovy: EPAR – Product Information.
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  European Medicines Agency. 28.10.2024. Saxenda: EPAR – Product Information.
                </a>
              </li>
            </ul>
          </div>
  
          <div className="flex justify-center gap-4 pt-8 ">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </footer>
    )
  }
  