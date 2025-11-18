// Verfmachine Data - Gemakkelijk bij te werken
// Om nieuwe machines toe te voegen, kopieer gewoon een machine object en pas de waarden aan

const machinesData = [
  {
    id: 1,
    naam: "iMix M2M PRO",
    fabrikant: "CHAMELEON",
    type: "MENGER",
    prijs: 4281,
    vermogen: "1.1 kW",
    spanning: "230 V",
    frequentie: "50 Hz",
    afmetingen: "800x860x1100 mm",
    gewicht: "210 kg",
    capaciteit: "40 kg",
    laadhoogte: "540 mm",
    bedrijfssnelheid: "91-140",
    geluidsniveau: "65 dB",
    schudrichting: "Gyroscopic / Biaxal",
    veiligheidsvoorzieningen: "Emergency Stop, Sliding door, safe mode, automatic speed control",
    automatisering: "Automatic",
    gebruikersinterface: "Control panel / touch",
    connectiviteit: "WiFi",
    garantie: "1 jaar",
    testmodel: true,
    afbeelding: "https://via.placeholder.com/400x400?text=iMix+M2M+PRO",
    documentatie: "https://example.com/imix-m2m-pro"
  },
  {
    id: 2,
    naam: "XM-60",
    fabrikant: "COLLOMIX",
    type: "MENGER",
    prijs: 3850,
    vermogen: "1.5 kW",
    spanning: "230 V",
    frequentie: "50 Hz",
    afmetingen: "750x800x1050 mm",
    gewicht: "195 kg",
    capaciteit: "60 kg",
    laadhoogte: "500 mm",
    bedrijfssnelheid: "80-120",
    geluidsniveau: "68 dB",
    schudrichting: "Biaxal",
    veiligheidsvoorzieningen: "Emergency Stop, Safety lid",
    automatisering: "Semi-automatic",
    gebruikersinterface: "Control panel",
    connectiviteit: "USB",
    garantie: "2 jaar",
    testmodel: false,
    afbeelding: "https://via.placeholder.com/400x400?text=XM-60",
    documentatie: "https://example.com/xm-60"
  },
  {
    id: 3,
    naam: "S-50",
    fabrikant: "COROB",
    type: "SCHUDDER",
    prijs: 2950,
    vermogen: "0.75 kW",
    spanning: "230 V",
    frequentie: "50 Hz",
    afmetingen: "600x700x900 mm",
    gewicht: "145 kg",
    capaciteit: "30 kg",
    laadhoogte: "450 mm",
    bedrijfssnelheid: "100-150",
    geluidsniveau: "62 dB",
    schudrichting: "Linear",
    veiligheidsvoorzieningen: "Emergency Stop, Door lock",
    automatisering: "Manual",
    gebruikersinterface: "Buttons",
    connectiviteit: "None",
    garantie: "1 jaar",
    testmodel: false,
    afbeelding: "https://via.placeholder.com/400x400?text=S-50",
    documentatie: "https://example.com/s-50"
  }
  // Voeg hier meer machines toe...
  // Kopieer gewoon een machine object hierboven en pas de waarden aan
];

// Functie om de totale statistieken te berekenen
function bereken Statistieken() {
  const fabrikanten = [...new Set(machinesData.map(m => m.fabrikant))];
  const mengers = machinesData.filter(m => m.type === "MENGER");
  const schudders = machinesData.filter(m => m.type === "SCHUDDER");
  
  return {
    totaalMachines: machinesData.length,
    aantalFabrikanten: fabrikanten.length,
    aantalMengers: mengers.length,
    aantalSchudders: schudders.length,
    fabrikanten: fabrikanten
  };
}
