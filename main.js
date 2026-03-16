// ── Language Data ──────────────────────────────────────────────
const LANG = {
  el: {
    // Nav
    nav_about:      'Σχετικά',
    nav_projects:   'Έργα',
    nav_experience: 'Εμπειρία',
    nav_contact:    'Επικοινωνία',

    // Hero
    hero_tag:   '// Μηχανολόγος Μηχανικός — Αθήνα, GR',
    hero_title: 'Σχεδιασμός · Προσομοίωση · Κατασκευή',
    hero_desc:  'Μετατρέπω σύνθετες μηχανολογικές προκλήσεις σε κομψές, κατασκευάσιμες λύσεις. Ειδίκευση στη δομική ανάλυση, CAD/CAM και ανάπτυξη προϊόντων για αεροναυπηγικές και βιομηχανικές εφαρμογές.',
    hero_cta_work:    'Δείτε τα Έργα →',
    hero_cta_contact: 'Επικοινωνία',
    stat_years:    'Χρόνια Εμπειρίας',
    stat_projects: 'Ολοκληρωμένα Έργα',
    stat_patents:  'Κατατεθειμένα Πατέντα',

    // About
    about_heading: 'Σχετικά',
    about_p1: 'Είμαι <strong>Μηχανολόγος Μηχανικός</strong> με 7+ χρόνια εμπειρίας στο σχεδιασμό, προσομοίωση και υλοποίηση ακριβείας μηχανολογικών συστημάτων σε αεροναυπηγικό, αυτοκινητοβιομηχανικό και βιομηχανικό τομέα.',
    about_quote: '«Η καλή μηχανική είναι αόρατη — όλα λειτουργούν, τίποτα δεν αποτυγχάνει, και η λύση φαίνεται αυτονόητη εκ των υστέρων.»',
    about_p2: 'Η ροή εργασίας μου καλύπτει <strong>σύλληψη ιδέας → μοντελοποίηση CAD → προσομοίωση FEA/CFD → πρωτότυπο → παραγωγή</strong>. Αναλαμβάνω ολόκληρο τον κύκλο ζωής προϊόντος, σε στενή συνεργασία με ομάδες κατασκευής και ποιότητας.',
    about_p3: 'Βάση: <strong>Αθήνα, Ελλάδα</strong> — Ανοιχτός σε θέσεις on-site, υβριδικές και πλήρως εξ αποστάσεως σε όλη την Ευρώπη.',

    // Projects
    projects_heading: 'Έργα',
    proj1_cat:   'Αεροναυτική · Δομική Ανάλυση',
    proj1_title: 'Επανασχεδιασμός Ελαφρού Βραχίονα\nγια Συναρμολόγηση Πόρτας Αεροσκάφους',
    proj1_desc:  'Επανασχεδιασμός κρίσιμου φέροντος βραχίονα για μηχανισμό πόρτας εμπορικού αεροσκάφους, με μείωση βάρους 34% διατηρώντας όλα τα περιθώρια ασφαλείας. Πλήρης στατική ανάλυση κόπωσης FEA, επαληθευμένη σύμφωνα με MIL-SPEC και κανονισμούς EASA.',
    proj1_link:  'Δείτε Μελέτη →',
    proj2_cat:   'Θερμικά · CFD',
    proj2_title: 'Βελτιστοποίηση Εναλλάκτη Θερμότητας',
    proj2_desc:  'Επανασχεδιασμός βιομηχανικού εναλλάκτη θερμότητας πλακών με CFD. Βελτίωση θερμικής απόδοσης κατά 22% μέσω βελτιστοποίησης γεωμετρίας πτερυγίων, με μείωση πτώσης πίεσης κατά 15%.',
    proj2_link:  'Δείτε Λεπτομέρειες →',
    proj3_cat:   'Ανάπτυξη Προϊόντος',
    proj3_title: 'Συναρμολόγηση Πνευματικού Ενεργοποιητή',
    proj3_desc:  'Ολοκληρωμένος σχεδιασμός προσαρμοσμένου διπλής ενέργειας πνευματικού ενεργοποιητή για αυτοματοποιημένη γραμμή συσκευασίας τροφίμων. Βελτιστοποιημένο DFM για μαζική παραγωγή.',
    proj3_link:  'Δείτε Λεπτομέρειες →',
    proj4_cat:   'Δομικά · Πολιτικά',
    proj4_title: 'Αρθρωτό Σύστημα Χαλύβδινου Πλαισίου',
    proj4_desc:  'Παραμετρικός σχεδιασμός κλιμακούμενου αρθρωτού πλαισίου για προσωρινές βιομηχανικές κατασκευές. Σχεδιασμένο για γρήγορη συναρμολόγηση χωρίς εξειδικευμένα εργαλεία.',
    proj4_link:  'Δείτε Λεπτομέρειες →',
    proj5_cat:   'Ρομποτική · Σχεδιασμός Μηχανισμών',
    proj5_title: 'Καρπός Ρομποτικού Βραχίονα 6-DOF',
    proj5_desc:  'Σχεδιασμός συμπαγούς, backdrivable μηχανισμού καρπού για συνεργατικό ρομπότ. Βελτιστοποιημένος για ελάχιστο backlash με harmonic drive, επιτυγχάνοντας επαναληψιμότητα ±0.02mm.',
    proj5_link:  'Δείτε Λεπτομέρειες →',

    // Experience
    experience_heading: 'Εμπειρία',
    exp1_role:    'Ανώτερος Μηχανολόγος Σχεδιαστής',
    exp1_company: 'Ελληνική Αεροπορική Βιομηχανία (ΕΑΒ), Αθήνα',
    exp1_b1: 'Επικεφαλής δομικού σχεδιασμού και επικύρωσης FEA για εξαρτήματα ατράκτου αεροσκαφών',
    exp1_b2: 'Διαχείριση ομάδας 3 ατόμων CAD σε πλήρεις κύκλους ανάπτυξης προϊόντος',
    exp1_b3: 'Μείωση βάρους εξαρτημάτων κατά μέσο όρο 28% μέσω βελτιστοποίησης τοπολογίας',
    exp1_b4: 'Συνεργασία με ομάδες πιστοποίησης για συμμόρφωση EASA Part-21',
    exp2_role:    'Μηχανολόγος Μηχανικός',
    exp2_company: 'IndustraTech Α.Ε., Πειραιάς',
    exp2_b1: 'Σχεδιασμός βιομηχανικών μηχανημάτων και πνευματικών συστημάτων για αυτοματισμό',
    exp2_b2: 'Θερμικές και ρευστομηχανικές προσομοιώσεις για συστήματα διαχείρισης θερμότητας',
    exp2_b3: 'Ανάπτυξη οδηγιών DFM που μείωσαν το κόστος παραγωγής κατά 18%',
    exp3_role:    'Νέος Μηχανικός / Ε&Α',
    exp3_company: 'NovaMech Engineering, Αθήνα',
    exp3_b1: 'Υποστήριξη ανωτέρων μηχανικών σε μοντελοποίηση CAD και τεχνική τεκμηρίωση',
    exp3_b2: 'Εκτέλεση προσομοιώσεων ANSYS για στατική φόρτιση και ανάλυση κραδασμών',
    exp3_b3: 'Συνεισφορά σε 2 κατατεθειμένες πατέντες για νέους μηχανισμούς σύνδεσης',
    exp4_role:    'ΜΔΕ Μηχανολογία Μηχανικών',
    exp4_company: 'Εθνικό Μετσόβιο Πολυτεχνείο (ΕΜΠ)',
    exp4_b1: 'Ειδίκευση σε Εφαρμοσμένη Μηχανική & Ρευστομηχανική',
    exp4_b2: 'Διπλωματική: «Βελτιστοποίηση Τοπολογίας Φερουσών Κατασκευών υπό Δυναμική Φόρτιση» — Βαθμός: 9.4/10',

    // Contact
    contact_label:   '// Ας Συνεργαστούμε',
    contact_heading: 'Έχετε ένα\nέργο στο νου;',
    contact_sub:     'Είτε χρειάζεστε αναθεώρηση σχεδιασμού, συνεργάτη ανάπτυξης προϊόντος, είτε απλά θέλετε να μιλήσετε για μηχανική — το inbox μου είναι πάντα ανοιχτό.',

    // Footer
    footer_copy: '© 2026 Alex Mercer — Μηχανολόγος Μηχανικός',
  },

  en: {
    nav_about:      'About',
    nav_projects:   'Projects',
    nav_experience: 'Experience',
    nav_contact:    'Contact',

    hero_tag:   '// Mechanical Engineer — Athens, GR',
    hero_title: 'Design · Simulation · Manufacturing',
    hero_desc:  'Turning complex engineering challenges into elegant, manufacturable solutions. Specialized in structural analysis, CAD/CAM, and product development for aerospace and industrial applications.',
    hero_cta_work:    'View Work →',
    hero_cta_contact: 'Get in Touch',
    stat_years:    'Years Experience',
    stat_projects: 'Projects Delivered',
    stat_patents:  'Patents Filed',

    about_heading: 'About',
    about_p1: 'I\'m a <strong>Mechanical Engineer</strong> with 7+ years of experience designing, simulating, and delivering precision-engineered systems across aerospace, automotive, and industrial sectors.',
    about_quote: '"Good engineering is invisible — everything works, nothing fails, and the solution looks obvious in hindsight."',
    about_p2: 'My workflow spans <strong>concept ideation → CAD modeling → FEA/CFD simulation → prototype → production</strong>. I take ownership across the entire product lifecycle, collaborating closely with manufacturing and quality teams.',
    about_p3: 'Based in <strong>Athens, Greece</strong> — open to on-site, hybrid, and fully remote opportunities across Europe.',

    projects_heading: 'Projects',
    proj1_cat:   'Aerospace · Structural Analysis',
    proj1_title: 'Lightweight Bracket Redesign\nfor Aircraft Door Assembly',
    proj1_desc:  'Redesigned a critical load-bearing bracket for a commercial aircraft door mechanism, achieving a 34% weight reduction while maintaining all safety margins. Full static and fatigue FEA, validated against MIL-SPEC and EASA regulations.',
    proj1_link:  'View Case Study →',
    proj2_cat:   'Thermal · CFD',
    proj2_title: 'Heat Exchanger Optimization',
    proj2_desc:  'CFD-driven redesign of an industrial plate heat exchanger. Improved thermal efficiency by 22% through fin geometry optimization, reducing pressure drop by 15%.',
    proj2_link:  'View Details →',
    proj3_cat:   'Product Development',
    proj3_title: 'Pneumatic Actuator Assembly',
    proj3_desc:  'End-to-end design of a custom double-acting pneumatic actuator for a food-grade automated packaging line. DFM-optimized for high-volume production.',
    proj3_link:  'View Details →',
    proj4_cat:   'Structural · Civil',
    proj4_title: 'Modular Steel Frame System',
    proj4_desc:  'Parametric design of a scalable modular framing system for temporary industrial structures. Designed for rapid assembly with zero specialized tooling.',
    proj4_link:  'View Details →',
    proj5_cat:   'Robotics · Mechanism Design',
    proj5_title: '6-DOF Robotic Arm Wrist',
    proj5_desc:  'Designed a compact, backdrivable wrist mechanism for a collaborative robot. Optimized for minimal backlash using harmonic drive gearing, achieving ±0.02mm repeatability.',
    proj5_link:  'View Details →',

    experience_heading: 'Experience',
    exp1_role:    'Senior Mechanical Design Engineer',
    exp1_company: 'Hellenic Aerospace Industry (HAI), Athens',
    exp1_b1: 'Lead structural design and FEA validation for aircraft fuselage components',
    exp1_b2: 'Manage a 3-person CAD team across full product development cycles',
    exp1_b3: 'Reduced component weight by an average of 28% through topology optimization',
    exp1_b4: 'Interface with certification teams to ensure EASA Part-21 compliance',
    exp2_role:    'Mechanical Engineer',
    exp2_company: 'IndustraTech S.A., Piraeus',
    exp2_b1: 'Designed custom industrial machinery and pneumatic systems for process automation',
    exp2_b2: 'Conducted thermal and fluid simulations for heat management systems',
    exp2_b3: 'Developed DFM guidelines that cut production costs by 18% across product lines',
    exp3_role:    'Junior Engineer / R&D',
    exp3_company: 'NovaMech Engineering, Athens',
    exp3_b1: 'Supported senior engineers in CAD modeling and technical documentation',
    exp3_b2: 'Ran ANSYS simulations for static load and vibration analysis',
    exp3_b3: 'Contributed to 2 filed patents for novel fastening mechanisms',
    exp4_role:    'MEng Mechanical Engineering',
    exp4_company: 'National Technical University of Athens (NTUA)',
    exp4_b1: 'Specialization in Applied Mechanics & Fluid Dynamics',
    exp4_b2: 'Thesis: "Topology Optimization of Load-Bearing Structures Under Dynamic Loading" — Grade: 9.4/10',

    contact_label:   '// Let\'s Work Together',
    contact_heading: 'Got a project\nin mind?',
    contact_sub:     'Whether you need a design review, a full product development partner, or just want to talk engineering — my inbox is always open.',

    footer_copy: '© 2026 Alex Mercer — Mechanical Engineer',
  }
};

// ── State ──────────────────────────────────────────────────────
let currentLang = 'el';

// ── Apply language to DOM ──────────────────────────────────────
function applyLang(lang) {
  const t = LANG[lang];
  currentLang = lang;

  // Update html lang attribute
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';

  // Helper to set text (supports innerHTML for <strong> tags)
  const set = (id, val, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = val;
    else el.textContent = val;
  };

  // Nav
  set('nav-about',      t.nav_about);
  set('nav-projects',   t.nav_projects);
  set('nav-experience', t.nav_experience);
  set('nav-contact',    t.nav_contact);

  // Hero
  set('hero-tag',         t.hero_tag);
  set('hero-title',       t.hero_title);
  set('hero-desc',        t.hero_desc);
  set('hero-cta-work',    t.hero_cta_work);
  set('hero-cta-contact', t.hero_cta_contact);
  set('stat-years',       t.stat_years);
  set('stat-projects',    t.stat_projects);
  set('stat-patents',     t.stat_patents);

  // About
  set('about-heading', t.about_heading);
  set('about-p1',      t.about_p1,    true);
  set('about-quote',   t.about_quote);
  set('about-p2',      t.about_p2,    true);
  set('about-p3',      t.about_p3,    true);

  // Projects
  set('projects-heading', t.projects_heading);
  set('proj1-cat',   t.proj1_cat);   set('proj1-title', t.proj1_title); set('proj1-desc', t.proj1_desc); set('proj1-link', t.proj1_link);
  set('proj2-cat',   t.proj2_cat);   set('proj2-title', t.proj2_title); set('proj2-desc', t.proj2_desc); set('proj2-link', t.proj2_link);
  set('proj3-cat',   t.proj3_cat);   set('proj3-title', t.proj3_title); set('proj3-desc', t.proj3_desc); set('proj3-link', t.proj3_link);
  set('proj4-cat',   t.proj4_cat);   set('proj4-title', t.proj4_title); set('proj4-desc', t.proj4_desc); set('proj4-link', t.proj4_link);
  set('proj5-cat',   t.proj5_cat);   set('proj5-title', t.proj5_title); set('proj5-desc', t.proj5_desc); set('proj5-link', t.proj5_link);

  // Experience
  set('experience-heading', t.experience_heading);
  set('exp1-role', t.exp1_role); set('exp1-company', t.exp1_company);
  set('exp1-b1', t.exp1_b1); set('exp1-b2', t.exp1_b2); set('exp1-b3', t.exp1_b3); set('exp1-b4', t.exp1_b4);
  set('exp2-role', t.exp2_role); set('exp2-company', t.exp2_company);
  set('exp2-b1', t.exp2_b1); set('exp2-b2', t.exp2_b2); set('exp2-b3', t.exp2_b3);
  set('exp3-role', t.exp3_role); set('exp3-company', t.exp3_company);
  set('exp3-b1', t.exp3_b1); set('exp3-b2', t.exp3_b2); set('exp3-b3', t.exp3_b3);
  set('exp4-role', t.exp4_role); set('exp4-company', t.exp4_company);
  set('exp4-b1', t.exp4_b1); set('exp4-b2', t.exp4_b2);

  // Contact
  set('contact-label',   t.contact_label);
  set('contact-heading', t.contact_heading);
  set('contact-sub',     t.contact_sub);

  // Footer
  set('footer-copy', t.footer_copy);

  // Toggle button active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  localStorage.setItem('lang', lang);
}

// ── Custom Cursor ──────────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a, button, .project-card, .skill-item, .lang-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
  });
}

// ── Skill Bars ─────────────────────────────────────────────────
function initSkillBars() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
      }
    });
  }, { threshold: 0.3 });

  const grid = document.getElementById('skillsGrid');
  if (grid) observer.observe(grid);
}

// ── Timeline Reveal ────────────────────────────────────────────
function initTimeline() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 150);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

// ── Active Nav ─────────────────────────────────────────────────
function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });
}

// ── Boot ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Load saved or default language
  const saved = localStorage.getItem('lang') || 'el';
  applyLang(saved);

  initCursor();
  initSkillBars();
  initTimeline();
  initActiveNav();
});
