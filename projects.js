/* ═══════════════════════════════════════════════════════════════
   PROJECTS DATA
   Add, remove, or reorder projects here.
   Each project object supports:
     catEn / catEl   — category label (English / Greek)
     titleEn / titleEl — project title
     descEn / descEl — description paragraph
     badgeEn / badgeEl — optional badge text (leave '' to hide)
     images          — array of image paths (first image = thumbnail)
     link            — CTA link (usually '#contact')
═══════════════════════════════════════════════════════════════ */

const PORTFOLIO_DATA = [
  {
    catEn:'Robotics · Electronics · Fabrication', catEl:'Ρομποτική · Ηλεκτρονικά · Κατασκευή',
    titleEn:'Modular Robot', titleEl:'Αρθρωτό Ρομπότ',
    descEn:'Tracked robot with 3 lead-acid batteries, 36V supply, solar panel, 4 cameras, sensors, and powerful LEDs. Laser-cut steel, biodegradable PLA parts, wood panels. Dustproof, waterproof, recyclable.',
    descEl:'Τροχήλατο ρομπότ με 3 μπαταρίες μολύβδου, τροφοδοσία 36V, ηλιακό πάνελ, 4 κάμερες, αισθητήρες και ισχυρά LED. Laser cut χάλυβας, βιοδιασπάσιμη PLA. Αδιάβροχο, αντισκονικό.',
    badgeEn:'Featured', badgeEl:'Ναυαρχίδα',
    images:[
      'images/modular_robot/Untitled Project.png',
      'images/modular_robot/Untitled Project 2.png',
      'images/modular_robot/Untitled Project 3.png',
      'images/modular_robot/444.png',
      'images/modular_robot/Untitled Project 4.png',
      'images/modular_robot/Untitled Project 5.png',
      'images/modular_robot/Untitled Project 6.png',
      'images/modular_robot/Untitled Project 7.png',
      'images/modular_robot/adsas.png',
      'images/modular_robot/saas.png',
      'images/modular_robot/dwd.png',
      'images/modular_robot/44104.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Robotics · Tracked Platform', catEl:'Ρομποτική · Τροχήλατη Πλατφόρμα',
    titleEn:'Tracked Platform', titleEl:'Τροχήλατη Πλατφόρμα',
    descEn:'Heavy-duty tracked chassis — steel construction, modular design for field robotics, remote inspection, and outdoor deployment in harsh environments.',
    descEl:'Βαρύ τροχήλατο πλαίσιο — χαλύβδινη κατασκευή, αρθρωτός σχεδιασμός για ρομποτική πεδίου και εξωτερικές συνθήκες.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/tracked/Untitled Project 3.png',
      'images/tracked/Untitled Project 4.png',
      'images/tracked/Untitled Project 5.png',
      'images/tracked/Untitled Project 6.png',
      'images/tracked/Untitled Project 7.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Driver Education', catEl:'Ασφάλεια · Εκπαίδευση Οδηγών',
    titleEn:'Seatbelt Convincer', titleEl:'Simulator Ζώνης Ασφαλείας',
    descEn:'Experience a controlled 12 km/h impact in a safe environment. Single and double-seat versions — lightweight steel frame, assembled by one person in half a day.',
    descEl:'Νιώστε μια σύγκρουση στα 12km/h σε ελεγχόμενο περιβάλλον. Εκδόσεις μονής και διπλής θέσης — ελαφρύ, συναρμολογείται σε μισή μέρα.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/double_seat_belt_convincer/1.png',
      'images/double_seat_belt_convincer/2.png',
      'images/double_seat_belt_convincer/3.png',
      'images/double_seat_belt_convincer/4.png',
      'images/double_seat_belt_convincer/5.png',
      'images/double_seat_belt_convincer/6.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Safety · Educational Equipment', catEl:'Ασφάλεια · Εκπαιδευτικός Εξοπλισμός',
    titleEn:'Rollcar Simulator', titleEl:'Rollcar Simulator',
    descEn:'Vehicle rollover simulator — place a car on top and roll inside it. Versions I & II, up to 20 rpm. Powerful tool for driver-safety training programmes.',
    descEl:'Προσομοιωτής ανατροπής οχήματος. Τοποθετείτε αυτοκίνητο στην κορυφή. Εκδόσεις Ι & ΙΙ, έως 20rpm. Ισχυρό εργαλείο εκπαίδευσης οδηγών.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/gear/Untitled Project.png',
      'images/gear/Untitled Project 2.png',
      'images/gear/Untitled Project 3.png',
      'images/gear/Untitled Project 4.png',
      'images/gear/Untitled Project 5.png',
      'images/gear/Untitled Project 6.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Impact Testing · Mechanical Engineering', catEl:'Δοκιμές Κρούσης · Μηχανολογία',
    titleEn:'Impactor', titleEl:'Κρουστήρας',
    descEn:'Precision impact testing device for controlled collision simulations and structural testing under repeatable, measurable impact loads.',
    descEl:'Συσκευή ελεγχόμενης κρούσης για επαναλαμβανόμενες δοκιμές σύγκρουσης και δομικές δοκιμές υπό μετρήσιμη φόρτιση.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/impactor/impactor.png',
      'images/impactor/impactor 2.png',
      'images/impactor/impactor 3.png',
      'images/impactor/impactor 4.png',
      'images/impactor/impactor 5.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Laser Cutting · Brake Press · Welding', catEl:'Laser Cutting · Brake Press · Συγκόλληση',
    titleEn:'Sheet Metal Applications', titleEl:'Εφαρμογές Φύλλων Μετάλλου',
    descEn:'Custom sheet metal work — LED wall décor, structural panels, and formed parts. 1.5–5mm steel, optimised DFM for fast fabrication and minimal waste.',
    descEl:'Εφαρμογές από φύλλα μετάλλου — διακοσμητικά LED, δομικά πάνελ και διαμορφωμένα εξαρτήματα. Χάλυβας 1.5–5mm, βελτιστοποιημένο DFM.',
    badgeEn:'Sheet Metal', badgeEl:'Sheet Metal',
    images:[
      'images/sheetmetal/1.png',
      'images/sheetmetal/2.png',
      'images/sheetmetal/3.png',
      'images/sheetmetal/4.png',
      'images/sheetmetal/5.png',
      'images/sheetmetal/6.png',
      'images/sheetmetal/7.png',
      'images/sheetmetal/8.png',
      'images/sheetmetal/9.png',
      'images/sheetmetal/10.png',
      'images/sheetmetal/a1.png',
      'images/sheetmetal/a2.png',
      'images/sheetmetal/a3.png',
      'images/sheetmetal/a4.png',
      'images/sheetmetal/a5.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Sheet Metal · Consumer Product', catEl:'Φύλλα Μετάλλου · Προϊόν',
    titleEn:'Log Basket', titleEl:'Καλάθι Καυσόξυλων',
    descEn:'Welded steel log basket — 3mm mild steel, powder-coated finish. Designed for easy fabrication with minimal material waste.',
    descEl:'Χαλύβδινο καλάθι καυσόξυλων από χάλυβα 3mm, βαφή σκόνης. Σχεδιασμένο για γρήγορη κατασκευή με ελάχιστα απόβλητα υλικού.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/log_basket/καροτσακι.png',
      'images/log_basket/καροτσακι 2.png',
      'images/log_basket/καροτσακι 3.png',
      'images/log_basket/καροτσακι 4.png',
      'images/log_basket/καροτσακι 5.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Sheet Metal · Structural Connection', catEl:'Φύλλα Μετάλλου · Δομική Σύνδεση',
    titleEn:'Anchor Bracket', titleEl:'Αγκύρωμα',
    descEn:'Custom steel anchor brackets for structural attachment applications — laser-cut, brake-pressed, and welded to spec. Multiple variants for different load cases.',
    descEl:'Εξατομικευμένα χαλύβδινα αγκύρια για δομικές εφαρμογές — laser cut, διαμόρφωση και συγκόλληση. Πολλαπλές παραλλαγές για διαφορετικές φορτίσεις.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/ancor/1.png',
      'images/ancor/2.png',
      'images/ancor/3.png',
      'images/ancor/4.png',
      'images/ancor/5.png',
      'images/ancor/Untitled Project.png',
      'images/ancor/Untitled Project 2.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Structural Steel · Industrial Fabrication', catEl:'Δομικός Χάλυβας · Βιομηχανική Κατασκευή',
    titleEn:'Steel Base', titleEl:'Χαλύβδινη Βάση',
    descEn:'Heavy structural steel base — welded mild steel, precision-cut mounting points. Designed for industrial machinery, equipment anchoring, and heavy-load applications.',
    descEl:'Βαριά δομική χαλύβδινη βάση — συγκολλημένος χάλυβας, ακριβή σημεία στήριξης. Για βιομηχανικές μηχανές, αγκύρωση εξοπλισμού και εφαρμογές βαριάς φόρτισης.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/steel_base/Untitled Project_left.png',
      'images/steel_base/Untitled Project 2_left.png',
      'images/steel_base/base__right.png'
    ],
    link:'#contact'
  },
  {
    catEn:'Dynamic Loading · Structural Testing', catEl:'Δυναμική Φόρτιση · Δομικές Δοκιμές',
    titleEn:'1D Harmonic Exciter', titleEl:'Αρμονικός Διεγέρτης 1D',
    descEn:'Applies 450 kg uni-directional vibration to structures at up to 20 Hz. Flip it over and it covers all three axes. Built for structural testing labs and research institutions.',
    descEl:'Μονοδιευθυντική δόνηση 450kg σε κατασκευές, έως 20Hz. Αναποδογυρίστε τον και καλύπτει και τις τρεις κατευθύνσεις.',
    badgeEn:'', badgeEl:'',
    images:[
      'images/harmonic_exhiter/he_1.png',
      'images/harmonic_exhiter/1.png',
      'images/harmonic_exhiter/2.png',
      'images/harmonic_exhiter/3.png',
      'images/harmonic_exhiter/4.png',
      'images/harmonic_exhiter/5.png',
      'images/harmonic_exhiter/6.png',
      'images/harmonic_exhiter/7.png',
      'images/harmonic_exhiter/8.png',
      'images/harmonic_exhiter/9.png',
      'images/harmonic_exhiter/10.png',
      'images/harmonic_exhiter/11.png',
      'images/harmonic_exhiter/12.png',
      'images/harmonic_exhiter/Untitled Project 6.png',
      'images/harmonic_exhiter/Untitled Project 7.png',
      'images/harmonic_exhiter/Untitled Project 8.png'
    ],
    link:'#contact'
  }
];
