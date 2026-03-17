/* ═══════════════════════════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════════════════════════ */
const LANG = {
  el: {
    nav_about:'Σχετικά', nav_projects:'Έργα', nav_software:'Λογισμικό',
    nav_webdesign:'Web Design', nav_experience:'Ομάδα', nav_contact:'Επικοινωνία',
    hero_tag:'// Μηχανολογικό Studio — Αθήνα',
    hero_title:'Μηχανολογικός Σχεδιασμός · 3D Printing · Project Management',
    hero_desc:'Η <strong>Expertease Designs</strong> είναι studio μηχανολογικού σχεδιασμού και 3D printing — από το concept ως την κατασκευή.',
    hero_cta_work:'Δείτε τα Έργα →', hero_cta_contact:'Επικοινωνήστε',
    stat_years:'Χρόνια Εμπειρίας', stat_projects:'Παραδοθέντα Έργα', stat_degrees:'Μεταπτυχιακά',
    edu_strip:'Ιδρυτής — Δημήτριος Μουδιώτης · 5 Πανεπιστήμια, 3 Χώρες',
    edu1_deg:'Dipl.-Ing.', edu1_name:'Μηχανολόγος Μηχανικός',
    edu2_deg:'MSc General Engineering', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc Powertrain Engineering', edu3_name:'IFP School',
    edu4_deg:'MSc Strategic Product Design', edu4_name:'Διεθνές Πανεπιστήμιο Ελλάδος',
    edu5_deg:'MBA Leadership & Project Management', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'Σχετικά με Εμάς',
    about_p1:'Η <strong>Expertease Designs</strong> είναι studio μηχανολογικού σχεδιασμού με επικεφαλής τον <strong>Δημήτριο Μουδιώτη</strong> — Μηχανολόγο Μηχανικό ΑΠΘ με 7+ χρόνια εμπειρίας σε ρομποτική, εξοπλισμό ασφαλείας, βιομηχανικές κατασκευές και precision fabrication. Τέσσερα μεταπτυχιακά από ιδρύματα σε Ελλάδα, Γαλλία και ΗΠΑ.',
    about_quote:'«Η μηχανική είναι η τέχνη να μετατρέπεις μια ιδέα σε κάτι που κρατάς στα χέρια σου.»',
    about_p2:'Σχεδιάζουμε και κατασκευάζουμε μηχανολογικές διατάξεις και εξοπλισμό — καλύπτοντας κάθε στάδιο από R&amp;D και CAD ως τον συντονισμό κατασκευής και τον ποιοτικό έλεγχο. Κάθε παράδοση περιλαμβάνει πλήρη τεκμηρίωση: σχέδια εξαρτημάτων, συναρμολόγησης, BOM και οδηγίες.',
    about_p3:'Βάση: <strong><span class="accent-red">Αθήνα</span></strong> — δουλεύουμε σε Ελλάδα και εξωτερικό.',
    about_p4:'Βελτιστοποιούμε την επιλογή υλικών, κατασκευή και συναρμολόγηση για οικονομική αποδοτικότητα και βιωσιμότητα — συντονίζουμε υπεργολάβους, επιβλέπουμε την κατασκευή και διασφαλίζουμε ότι κάθε παράδοση πληροί τα πρότυπα ποιότητας, αξιοπιστίας και ασφάλειας (ISO).',
    val_1_title:'Ακρίβεια', val_1_text:'FEA, ανοχές σε στοίβα, δοκιμές σε πραγματικές συνθήκες. Δεν προσεγγίζουμε.',
    val_2_title:'Πλήρης Κύκλος', val_2_text:'Από σκίτσο ως συναρμολόγηση — σχεδιασμός, BOM, κατασκευή και παράδοση. Παραδίδουμε, δεν μεταβιβάζουμε.',
    val_3_title:'Διεθνή Πρότυπα', val_3_text:'Σπουδές σε 3 χώρες. Διεθνής μηχανολογική αυστηρότητα εφαρμοσμένη σε κάθε τοπικό έργο.',
    val_4_title:'Σχεδιασμός για Κατασκευή', val_4_text:'DFM από την πρώτη μέρα. Σχέδια βελτιστοποιημένα για γρήγορη παραγωγή, ελάχιστα απόβλητα και πραγματική συναρμολόγηση.',
    proc_label:'Πώς Δουλεύουμε',
    proc_1_title:'Brief', proc_1_text:'Αφιερώνουμε χρόνο να κατανοήσουμε τις ανάγκες, τους περιορισμούς και τους στόχους σας πριν πάρουμε οποιαδήποτε σχεδιαστική απόφαση — γιατί ένα σωστό brief οδηγεί σε σωστό αποτέλεσμα.',
    proc_2_title:'Σχεδιασμός', proc_2_text:'3D μοντέλο σε SolidWorks, FEA, πλήρες BOM και τεχνικά σχέδια (εξαρτημάτων, συναρμολόγησης, οδηγίες) — όλα έτοιμα για παραγωγή.',
    proc_3_title:'Παράδοση', proc_3_text:'Συντονίζουμε υπεργολάβους, επιβλέπουμε την κατασκευή και διασφαλίζουμε τήρηση προτύπων ποιότητας, αξιοπιστίας και ασφάλειας — παραδίδοντας δοκιμασμένο, έτοιμο προς λειτουργία αποτέλεσμα.',
    principles_label:'Αρχές μας',
    prin_1_title:'Ακρίβεια', prin_1_text:'Κάθε διάσταση μετράει. Σχεδιάζουμε με ανοχές, ελέγχουμε με πρωτότυπα, παραδίδουμε μέρη που <span class="accent-red">ταιριάζουν από την πρώτη</span>.',
    prin_2_title:'Ειλικρίνεια', prin_2_text:'<span class="accent-red">Ρεαλιστικά χρονοδιαγράμματα, διαφανές κόστος</span> — χωρίς εκπλήξεις, μόνο αποτελέσματα.',
    prin_3_title:'Καινοτομία', prin_3_text:'Νέα εργαλεία, υλικά, μεθόδους — FEA, <span class="accent-red">προηγμένη κατασκευή</span> και design optimization σε κάθε project.',
    prin_4_title:'Web Design', prin_4_text:'Σας άρεσε αυτή η σελίδα; Είναι εξ ολοκλήρου <span class="accent-green">custom HTML</span> — χωρίς templates. Σχεδιάζουμε <span class="accent-green">μοναδικές, διαδραστικές επαγγελματικές ιστοσελίδες</span> από το μηδέν. <a href="#contact" class="principle-cta" id="prin-4-cta-el">Επικοινωνήστε →</a>',
    projects_heading:'Έργα',
    sw_heading:'Λογισμικό', sw_label:'Ενεργό Προϊόν · easemanual.eu',
    sw_desc:'Λογισμικό που αυτοματοποιεί την τεχνική μελέτη για άδεια κυκλοφορίας οχημάτων ειδικής χρήσης — βάσει ΥΑ 80255/4693/19/2020. Φτιαγμένο από μηχανικούς για μηχανικούς.',
    sw_f1:'Τεχνικοί υπολογισμοί', sw_f2:'Διαγράμματα φόρτισης', sw_f3:'Σχέδια A3', sw_f4:'Αυτόματη μελέτη Word',
    sw_f5:'Άξονες & εφεδρανισμοί', sw_f6:'Ευστάθεια & πέδηση', sw_f7:'Συγκολλήσεις & ελατήρια', sw_f8:'Γερανοί & καλαθοφόρα',
    sw_cta1:'Δείτε το Προϊόν →', sw_cta2:'Τιμολόγηση',
    contact_label:'// Ας Δουλέψουμε Μαζί',
    contact_heading:'Έχετε κάποιο project;',
    contact_sub:'Ένα εξάρτημα ή ολόκληρο project — η Expertease είναι εδώ.',
    footer_copy:'© 2026 Expertease Designs', footer_loc:'Αθήνα, Ελλάδα',
  },
  en: {
    nav_about:'About', nav_projects:'Work', nav_software:'Software',
    nav_webdesign:'Web Design', nav_experience:'Team', nav_contact:'Contact',
    hero_tag:'// Mechanical Design & 3D Printing Studio — Athens, GR',
    hero_title:'Mechanical Design · 3D Printing · Project Management',
    hero_desc:'<strong>Expertease Designs</strong> — machine design, sheet metal, rapid prototyping, BOM, and project management. Athens-based, working internationally.',
    hero_cta_work:'View Work →', hero_cta_contact:'Get in Touch',
    stat_years:'Years Experience', stat_projects:'Projects Delivered', stat_degrees:'Postgrad Degrees',
    edu_strip:'Founder — Dimitrios Moudiotis · 5 Universities in 3 Countries',
    edu1_deg:'Dipl.-Ing.', edu1_name:'Mechanical Engineering',
    edu2_deg:'MSc General Engineering', edu2_name:'École Centrale Paris',
    edu3_deg:'MSc Powertrain Engineering', edu3_name:'IFP School',
    edu4_deg:'MSc Strategic Product Design', edu4_name:'International Hellenic University',
    edu5_deg:'MBA Leadership & Project Management', edu5_name:'Washington Univ. of Science & Technology',
    about_heading:'About',
    about_p1:'<strong>Expertease Designs</strong> is a mechanical engineering studio based in Athens, led by <strong>Dimitrios Moudiotis</strong> — Mechanical Engineer (AUTH) with 7+ years of experience spanning robotics, safety equipment, industrial machinery, and precision fabrication. Four postgraduate degrees from institutions in Greece, France, and the USA.',
    about_quote:'"Engineering is the art of turning an idea into something you can hold in your hands."',
    about_p2:'We design and build mechanical devices, products, and equipment — covering every stage from R&amp;D and CAD to manufacturing coordination and quality control. Every project is delivered with complete documentation: part drawings, assembly drawings, BOM structure, and instructions.',
    about_p3:'Based in <strong><span class="accent-red">Athens, Greece</span></strong> — available for projects across Greece and internationally.',
    about_p4:'We optimise material selection, manufacturing, and assembly for cost-effectiveness and sustainability — coordinating subcontractors, supervising construction, and enforcing ISO quality, reliability, and safety standards on every deliverable.',
    val_1_title:'Precision', val_1_text:'FEA-verified, tolerance-stacked, tested in real conditions. We don\'t approximate.',
    val_2_title:'Full Lifecycle', val_2_text:'From sketch to assembly — design, BOM, fabrication, and handover. We deliver, we don\'t hand off.',
    val_3_title:'Global Standards', val_3_text:'Educated across 3 countries. International engineering rigour applied to every local project.',
    val_4_title:'Built to Make', val_4_text:'DFM from day one. Designs optimised for fast fabrication, minimal waste, and real-world assembly.',
    proc_label:'How We Work',
    proc_1_title:'Brief', proc_1_text:'We take time to understand your requirements, constraints, and goals before committing to any design direction — because the right brief leads to the right outcome.',
    proc_2_title:'Design', proc_2_text:'Full 3D model in SolidWorks, FEA validation, complete BOM, and technical drawings (part, assembly, instructions) — every deliverable ready for production.',
    proc_3_title:'Deliver', proc_3_text:'We coordinate subcontractors, supervise fabrication, and make sure quality, reliability, and safety standards are met — then hand over a tested, production-ready assembly.',
    principles_label:'How We Work',
    prin_1_title:'Precision', prin_1_text:'Every dimension matters. We design to tolerance, prototype to verify, and deliver parts that <span class="accent-red">fit first time</span>.',
    prin_2_title:'Integrity', prin_2_text:'<span class="accent-red">Honest timelines, transparent costs</span>, and direct communication — no surprises, just results.',
    prin_3_title:'Innovation', prin_3_text:'We constantly explore new tools, materials, and methods to deliver smarter solutions — FEA, <span class="accent-red">advanced manufacturing</span>, and design optimisation built into every workflow.',
    prin_4_title:'Web Design', prin_4_text:'Liked this page? It\'s entirely <span class="accent-green">custom-built HTML</span> — no templates, no page builders. We design <span class="accent-green">fully interactive, unique business websites</span> from scratch. <a href="#contact" class="principle-cta" id="prin-4-cta-en">Get in touch →</a>',
    projects_heading:'Work',
    sw_heading:'Software', sw_label:'Active Product · easemanual.eu',
    sw_desc:'Powerful software automating the creation of technical studies for special-purpose vehicle licensing — per Greek regulation YA 80255/4693/19/2020. Built by engineers for engineers.',
    sw_f1:'Technical calculations', sw_f2:'Load diagrams', sw_f3:'A3 vehicle drawings', sw_f4:'Auto Word report',
    sw_f5:'Shafts & bearings', sw_f6:'Stability & braking', sw_f7:'Welds & springs', sw_f8:'Cranes & platforms',
    sw_cta1:'View Product →', sw_cta2:'Pricing',
    contact_label:'// Let\'s Work Together',
    contact_heading:'Got a project in mind?',
    contact_sub:'From designing a single component to managing an entire project — Expertease is here.',
    footer_copy:'© 2026 Expertease Designs', footer_loc:'Athens, Greece',
  }
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE APPLY
═══════════════════════════════════════════════════════════════ */
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = LANG[lang];
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';
  const set = (id, val, html=false) => { const el=document.getElementById(id); if(!el)return; html?el.innerHTML=val:el.textContent=val; };
  set('nav-about',t.nav_about); set('nav-projects',t.nav_projects);
  set('nav-software',t.nav_software); set('nav-webdesign',t.nav_webdesign); set('nav-experience',t.nav_experience); set('nav-contact',t.nav_contact);
  set('hero-tag',t.hero_tag); set('hero-title',t.hero_title);
  set('hero-desc',t.hero_desc,true);
  set('hero-cta-work',t.hero_cta_work); set('hero-cta-contact',t.hero_cta_contact);
  set('stat-years',t.stat_years); set('stat-projects',t.stat_projects); set('stat-degrees',t.stat_degrees);

  set('edu-strip-title',t.edu_strip);
  set('edu1-deg',t.edu1_deg); set('edu1-name',t.edu1_name);
  set('edu2-deg',t.edu2_deg); set('edu2-name',t.edu2_name);
  set('edu3-deg',t.edu3_deg); set('edu3-name',t.edu3_name);
  set('edu4-deg',t.edu4_deg); set('edu4-name',t.edu4_name);
  set('edu5-deg',t.edu5_deg); set('edu5-name',t.edu5_name);
  set('about-heading',t.about_heading);
  set('about-p1',t.about_p1,true); set('about-quote',t.about_quote);
  set('about-p2',t.about_p2,true); set('about-p3',t.about_p3,true);
  set('about-p4',t.about_p4);
  set('val-1-title',t.val_1_title); set('val-1-text',t.val_1_text);
  set('val-2-title',t.val_2_title); set('val-2-text',t.val_2_text);
  set('val-3-title',t.val_3_title); set('val-3-text',t.val_3_text);
  set('val-4-title',t.val_4_title); set('val-4-text',t.val_4_text);
  set('proc-label',t.proc_label);
  set('proc-1-title',t.proc_1_title); set('proc-1-text',t.proc_1_text);
  set('proc-2-title',t.proc_2_title); set('proc-2-text',t.proc_2_text);
  set('proc-3-title',t.proc_3_title); set('proc-3-text',t.proc_3_text);
  set('principles-label',t.principles_label);
  set('prin-1-title',t.prin_1_title); set('prin-1-text',t.prin_1_text,true);
  set('prin-2-title',t.prin_2_title); set('prin-2-text',t.prin_2_text,true);
  set('prin-3-title',t.prin_3_title); set('prin-3-text',t.prin_3_text,true);
  set('prin-4-title',t.prin_4_title); set('prin-4-text',t.prin_4_text,true);
  set('projects-heading',t.projects_heading);
  set('sw-heading',t.sw_heading); set('sw-label',t.sw_label);
  set('sw-desc',t.sw_desc);
  for(let i=1;i<=8;i++) set('sw-f'+i,t['sw_f'+i]);
  set('sw-cta1',t.sw_cta1); set('sw-cta2',t.sw_cta2);
  set('contact-label',t.contact_label); set('contact-heading',t.contact_heading,true);
  set('contact-sub',t.contact_sub);
  set('footer-copy',t.footer_copy); set('footer-loc',t.footer_loc);
  const mmap = {'mnav-about':t.nav_about,'mnav-projects':t.nav_projects,'mnav-software':t.nav_software,'mnav-webdesign':t.nav_webdesign,'mnav-experience':t.nav_experience,'mnav-contact':t.nav_contact};
  Object.entries(mmap).forEach(([id,val])=>{ const el=document.getElementById(id); if(el) el.textContent=val; });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('lang',lang);
  renderPortfolio();
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO DATA
═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO — 2-COLUMN DYNAMIC
═══════════════════════════════════════════════════════════════ */
let portLeft  = 0;
let portRight = 1;
let portTimer = null;
const colImgIdx    = { portColLeft: 0, portColRight: 0 };
const colImgTimers = { portColLeft: null, portColRight: null };

function updatePortDots() {
  document.querySelectorAll('.port-dot').forEach((d, i) => {
    d.classList.toggle('active', i === portLeft || i === portRight);
  });
}

function startColImageCycle(colEl, project) {
  const id = colEl.id;
  clearInterval(colImgTimers[id]);
  colImgIdx[id] = 0;
  if (project.images.length <= 1) return;
  colImgTimers[id] = setInterval(() => {
    colImgIdx[id] = (colImgIdx[id] + 1) % project.images.length;
    const img = colEl.querySelector('.port-img');
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => { img.src = project.images[colImgIdx[id]]; img.style.opacity = '1'; }, 500);
  }, 5200);
}

function renderPortfolioCol(colEl, idx) {
  const p    = PORTFOLIO_DATA[idx];
  const lang = currentLang;
  colEl.classList.add('port-fade-out');
  setTimeout(() => {
    const img = colEl.querySelector('.port-img');
    if (img) { img.src = p.images[0]; img.alt = lang === 'el' ? p.titleEl : p.titleEn; img.style.opacity = '1'; }
    const badge = colEl.querySelector('.port-badge');
    if (badge) { const b = lang === 'el' ? p.badgeEl : p.badgeEn; badge.textContent = b; badge.style.display = b ? '' : 'none'; }
    const cat = colEl.querySelector('.port-cat');
    if (cat) cat.textContent = lang === 'el' ? p.catEl : p.catEn;
    const title = colEl.querySelector('.port-title');
    if (title) title.textContent = lang === 'el' ? p.titleEl : p.titleEn;
    const desc = colEl.querySelector('.port-desc');
    if (desc) desc.textContent = lang === 'el' ? p.descEl : p.descEn;
    const link = colEl.querySelector('.port-link');
    if (link) { link.href = p.link; link.textContent = lang === 'el' ? 'Επικοινωνήστε →' : 'Get in Touch →'; }
    colEl.classList.remove('port-fade-out');
    startColImageCycle(colEl, p);
  }, 500);
}

function buildPortThumbStrip() {
  const container = document.getElementById('portThumbStrip');
  if (!container) return;
  container.innerHTML = '';
  const lang = currentLang;
  PORTFOLIO_DATA.forEach((p, i) => {
    const item = document.createElement('button');
    item.className = 'port-thumb-item';
    item.dataset.idx = i;
    const title = lang === 'el' ? p.titleEl : p.titleEn;
    item.innerHTML = `
      <div class="port-thumb-img-wrap">
        <img class="port-thumb-img" src="${p.images[0]}" alt="${title}" loading="lazy">
      </div>
      <div class="port-thumb-label">
        <span class="port-thumb-num">0${i + 1} &nbsp;</span>${title}
      </div>`;
    item.addEventListener('click', () => openProjectModal(i));
    container.appendChild(item);
  });
}

function setThumbActive(idx) {
  document.querySelectorAll('.port-thumb-item').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
}

function renderPortfolio() {
  const L = document.getElementById('portColLeft');
  const R = document.getElementById('portColRight');
  if (L) renderPortfolioCol(L, portLeft);
  if (R) renderPortfolioCol(R, portRight);
  updatePortDots();
  buildPortThumbStrip();
}

function swapPortCols() {
  const tmp = portLeft; portLeft = portRight; portRight = tmp;
  renderPortfolio();
  resetPortTimer();
}

function resetPortTimer() { clearInterval(portTimer); setTimeout(startPortTimer, 400); }

function startPortTimer() {
  portTimer = setInterval(() => {
    const available = PORTFOLIO_DATA.map((_,i) => i).filter(i => i !== portLeft && i !== portRight);
    const newIdx = available[Math.floor(Math.random() * available.length)];
    if (Math.random() < 0.5) {
      portLeft = newIdx;
      const el = document.getElementById('portColLeft');
      if (el) renderPortfolioCol(el, portLeft);
    } else {
      portRight = newIdx;
      const el = document.getElementById('portColRight');
      if (el) renderPortfolioCol(el, portRight);
    }
    updatePortDots();
  }, 7000);
}

function nextProjectForColumn(colId) {
  const current = colId === 'portColLeft' ? portLeft : portRight;
  const other = colId === 'portColLeft' ? portRight : portLeft;
  let available = PORTFOLIO_DATA.map((_, i) => i).filter(i => i !== current && i !== other);
  if (available.length === 0) {
    available = PORTFOLIO_DATA.map((_, i) => i).filter(i => i !== current);
  }
  const next = available[Math.floor(Math.random() * available.length)];
  if (colId === 'portColLeft') portLeft = next;
  else portRight = next;
  renderPortfolio();
  resetPortTimer();
}

function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  const ring = document.createElement('div');
  cursor.id = 'custom-cursor';
  ring.id = 'custom-cursor-ring';
  document.body.appendChild(ring);
  document.body.appendChild(cursor);

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let ringX = targetX;
  let ringY = targetY;

  const darkSections = '#hero, #process, #principles, #cad-viewer';

  document.addEventListener('mousemove', e => {
    targetX = e.clientX;
    targetY = e.clientY;
    const onDark = !!e.target.closest(darkSections);
    cursor.classList.toggle('on-dark', onDark);
    ring.classList.toggle('on-dark', onDark);
  });

  function animate() {
    currentX += (targetX - currentX) * 0.35;
    currentY += (targetY - currentY) * 0.35;

    // Magnetic ring: faster overall, accelerates as it closes in
    const dx = currentX - ringX;
    const dy = currentY - ringY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const factor = dist < 0.5 ? 1 : Math.min(0.9, 0.18 + 7 / (dist + 3));
    ringX += dx * factor;
    ringY += dy * factor;

    cursor.style.transform = `translate3d(${currentX - 4}px, ${currentY - 4}px, 0)`;
    ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  const interactiveSelector = 'a, button, .port-image-wrap, .project-link, .lang-btn, .nav-hamburger';

  function setHover(on) {
    cursor.classList.toggle('hover', on);
    ring.classList.toggle('hover', on);
  }
  function setActive(on) {
    cursor.classList.toggle('active', on);
    ring.classList.toggle('active', on);
  }

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelector)) setHover(true);
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveSelector)) setHover(false);
  });

  document.addEventListener('mousedown', () => setActive(true));
  document.addEventListener('mouseup', () => setActive(false));
}

function initPortDots() {
  const container = document.getElementById('portDots');
  if (!container) return;
  container.innerHTML = '';
  PORTFOLIO_DATA.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'port-dot';
    d.dataset.idx = i;
    d.setAttribute('aria-label', 'Project ' + (i + 1));
    d.addEventListener('click', () => {
      if (portLeft === i || portRight === i) return;
      portLeft = i;
      const el = document.getElementById('portColLeft');
      if (el) renderPortfolioCol(el, portLeft);
      updatePortDots();
      resetPortTimer();
    });
    container.appendChild(d);
  });
}

function initPortDrag() {
  const leftEl  = document.getElementById('portColLeft');
  const rightEl = document.getElementById('portColRight');
  if (!leftEl || !rightEl) return;
  let activeCol = null, startX = 0, currentDx = 0, hasDragged = false;

  const onDown = (col, clientX) => {
    activeCol = col; startX = clientX; currentDx = 0; hasDragged = false;
    col.style.transition = 'transform .1s ease, opacity .28s ease';
  };
  const onMove = (clientX) => {
    if (!activeCol) return;
    currentDx = clientX - startX;
    if (Math.abs(currentDx) > 6) hasDragged = true;
    if (hasDragged) activeCol.style.transform = `translateX(${currentDx * 0.22}px)`;
  };
  const onUp = () => {
    if (!activeCol) return;
    activeCol.style.transition = 'transform .35s cubic-bezier(.19,1,.22,1), opacity .28s ease';
    activeCol.style.transform = '';
    const isLeft = activeCol.id === 'portColLeft';
    if (hasDragged) {
      if (isLeft  && currentDx >  90) swapPortCols();
      if (!isLeft && currentDx < -90) swapPortCols();
    }
    activeCol = null; hasDragged = false; currentDx = 0;
  };

  [leftEl, rightEl].forEach(col => {
    col.addEventListener('mousedown',  e => { if (e.button === 0) onDown(col, e.clientX); });
    col.addEventListener('touchstart', e => onDown(col, e.touches[0].clientX), {passive:true});
  });
  document.addEventListener('mousemove', e => onMove(e.clientX));
  document.addEventListener('touchmove', e => { if (activeCol) onMove(e.touches[0].clientX); }, {passive:true});
  document.addEventListener('mouseup',   onUp);
  document.addEventListener('touchend',  onUp, {passive:true});
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════════════════ */
let modalImgIdx = 0;
let modalProject = null;

function buildProjectModal() {
  if (document.getElementById('portModal')) return;
  const m = document.createElement('div');
  m.id = 'portModal';
  m.className = 'port-modal';
  m.innerHTML = `
    <div class="port-modal-backdrop"></div>
    <div class="port-modal-panel">
      <button class="port-modal-close" id="portModalClose" aria-label="Close">✕</button>
      <div class="port-modal-gallery">
        <button class="port-modal-nav port-modal-prev" id="portModalPrev">‹</button>
        <img class="port-modal-img" id="portModalImg" src="" alt="">
        <button class="port-modal-nav port-modal-next" id="portModalNext">›</button>
        <div class="port-modal-img-counter" id="portModalCounter"></div>
      </div>
      <div class="port-modal-dots-row" id="portModalDots"></div>
      <div class="port-modal-info">
        <div class="port-modal-cat"  id="portModalCat"></div>
        <h2  class="port-modal-title" id="portModalTitle"></h2>
        <p   class="port-modal-desc"  id="portModalDesc"></p>
      </div>
    </div>`;
  document.body.appendChild(m);

  document.getElementById('portModalClose').addEventListener('click', closeProjectModal);
  m.querySelector('.port-modal-backdrop').addEventListener('click', closeProjectModal);
  document.getElementById('portModalPrev').addEventListener('click', () => modalNav(-1));
  document.getElementById('portModalNext').addEventListener('click', () => modalNav(+1));
  document.addEventListener('keydown', e => {
    if (!m.classList.contains('open')) return;
    if (e.key === 'Escape')      closeProjectModal();
    if (e.key === 'ArrowLeft')  modalNav(-1);
    if (e.key === 'ArrowRight') modalNav(+1);
  });
}

function openProjectModal(projectIdx) {
  modalProject = PORTFOLIO_DATA[projectIdx];
  modalImgIdx  = 0;
  const lang = currentLang;
  document.getElementById('portModalCat').textContent   = lang === 'el' ? modalProject.catEl   : modalProject.catEn;
  document.getElementById('portModalTitle').textContent = lang === 'el' ? modalProject.titleEl : modalProject.titleEn;
  document.getElementById('portModalDesc').textContent  = lang === 'el' ? modalProject.descEl  : modalProject.descEn;
  buildModalDots();
  modalSetImage(0);
  setThumbActive(projectIdx);
  const m = document.getElementById('portModal');
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const m = document.getElementById('portModal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}

function buildModalDots() {
  const container = document.getElementById('portModalDots');
  if (!container || !modalProject) return;
  container.innerHTML = '';
  modalProject.images.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'port-modal-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Image ' + (i + 1));
    d.addEventListener('click', () => modalSetImage(i));
    container.appendChild(d);
  });
}

function modalSetImage(idx) {
  if (!modalProject) return;
  modalImgIdx = (idx + modalProject.images.length) % modalProject.images.length;
  const img = document.getElementById('portModalImg');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = modalProject.images[modalImgIdx];
    img.alt = '';
    img.style.opacity = '1';
  }, 180);
  document.getElementById('portModalCounter').textContent = `${modalImgIdx + 1} / ${modalProject.images.length}`;
  document.querySelectorAll('.port-modal-dot').forEach((d, i) => d.classList.toggle('active', i === modalImgIdx));
  const prev = document.getElementById('portModalPrev');
  const next = document.getElementById('portModalNext');
  if (prev) prev.disabled = modalImgIdx === 0;
  if (next) next.disabled = modalImgIdx === modalProject.images.length - 1;
}

function modalNav(dir) {
  if (!modalProject) return;
  const newIdx = modalImgIdx + dir;
  if (newIdx < 0 || newIdx >= modalProject.images.length) return;
  modalSetImage(newIdx);
}

function addPortImageClickHandlers() {
  ['portColLeft', 'portColRight'].forEach(colId => {
    const colEl = document.getElementById(colId);
    if (!colEl) return;
    const imgWrap = colEl.querySelector('.port-image-wrap');
    if (!imgWrap) return;

    imgWrap.addEventListener('click', () => {
      const idx = colId === 'portColLeft' ? portLeft : portRight;
      openProjectModal(idx);
    });

    colEl.querySelectorAll('a, button, .project-link').forEach(el => {
      el.addEventListener('mouseenter', () => colEl.classList.add('port-hover'));
      el.addEventListener('mouseleave', () => colEl.classList.remove('port-hover'));
    });
  });
}

function initPortfolio() {
  initPortDots();
  renderPortfolio();
  initPortDrag();
  addPortImageClickHandlers();
  setTimeout(startPortTimer, 3200);
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
    });
  }, { threshold: 0.10 });
  els.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL
═══════════════════════════════════════════════════════════════ */
function initScroll() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  });
}

function initHeroExplode() {
  const hero     = document.getElementById('hero');
  const heroLeft = hero ? hero.querySelector('.hero-left') : null;
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const heroH    = hero.offsetHeight;
    const progress = Math.max(0, Math.min(1, window.scrollY / (heroH * 0.55)));

    if (typeof setScrollExplode === 'function') setScrollExplode(progress);

    if (heroLeft) {
      /* text fades out between 25 % and 75 % explosion progress */
      const fade = Math.max(0, 1 - Math.max(0, progress - 0.25) / 0.5);
      heroLeft.style.opacity = fade;
    }
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE NAV
═══════════════════════════════════════════════════════════════ */
function initMobileNav() {
  const btn=document.getElementById('navHamburger'), drawer=document.getElementById('navMobile');
  if(!btn||!drawer)return;
  btn.addEventListener('click',()=>{btn.classList.toggle('open');drawer.classList.toggle('open');});
}
function closeMobileNav() {
  const btn=document.getElementById('navHamburger'),drawer=document.getElementById('navMobile');
  if(btn)btn.classList.remove('open');if(drawer)drawer.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form=document.getElementById('contactForm'),success=document.getElementById('formSuccess');
  if(!form)return;
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=form.querySelector('.form-submit');btn.textContent='Sending…';btn.disabled=true;
    try{
      const res=await fetch(form.action,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
      if(res.ok){form.style.display='none';if(success)success.style.display='flex';}
      else{btn.textContent='Error — try again';btn.disabled=false;}
    }catch(_){btn.textContent='Error — try again';btn.disabled=false;}
  });
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem('lang') || 'en');
  initScroll();
  initHeroExplode();
  initPortfolio();
  buildProjectModal();
  initMobileNav();
  initContactForm();
  initScrollReveal();
  initCustomCursor();
  setTimeout(initThree, 120);
});
