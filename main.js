/* ═══════════════════════════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════════════════════════ */
const LANG = {
  el: {
    nav_about:'Σχετικά', nav_projects:'Έργα', nav_software:'Λογισμικό',
    nav_experience:'Σπουδές', nav_contact:'Επικοινωνία',
    hero_tag:'// Μηχανολόγος Μηχανικός — Παγκράτι, Αθήνα',
    hero_title:'Μηχανολογικός Σχεδιασμός · 3D Printing · Διαχείριση Έργων',
    hero_tagline:'from vision to reality',
    hero_desc:'Ιδρυτής της <strong>Expertease</strong> — σχεδιασμός μηχανών, φύλλα μετάλλου, rapid prototyping, BOM και διαχείριση έργων. Παγκράτι, Αθήνα.',
    hero_cta_work:'Δείτε τα Έργα →', hero_cta_contact:'Επικοινωνήστε',
    stat_years:'Χρόνια Εμπειρίας', stat_projects:'Ολοκληρωμένα Έργα', stat_degrees:'Μεταπτυχιακοί Τίτλοι',
    viewer_hint:'σύρτε για περιστροφή',
    about_heading:'Σχετικά',
    about_p1:'Είμαι ο <strong>Δημήτριος Μουδιώτης</strong>, Μηχανολόγος Μηχανικός με πτυχίο από το <strong>ΑΠΘ</strong> και τέσσερις μεταπτυχιακούς τίτλους: δύο MSc στη Γαλλία, MSc Σχεδιασμού Προϊόντων στην Ελλάδα και MBA σε Ηγεσία & Διαχείριση Έργων στις ΗΠΑ.',
    about_quote:'«Η μηχανική είναι η τέχνη να μετατρέπεις μια ιδέα σε κάτι που μπορείς να κρατήσεις στα χέρια σου.»',
    about_p2:'Μέσω της <strong>Expertease</strong> αναλαμβάνω τον πλήρη κύκλο ζωής ενός προϊόντος — από τον αρχικό σχεδιασμό και την ανάπτυξη BOM, μέχρι την τρισδιάστατη εκτύπωση, την κατεργασία φύλλων μετάλλου και τη διαχείριση έργου.',
    about_p3:'Έδρα: <strong>Παγκράτι, Αθήνα</strong> — Αναλαμβάνω έργα σε Ελλάδα και εξωτερικό.',
    projects_heading:'Έργα',
    filter_all:'Όλα', filter_robotics:'Ρομποτική', filter_3dprint:'3D Printing',
    filter_metal:'Φύλλα Μετάλλου', filter_safety:'Ασφάλεια',
    p1_badge:'Ναυαρχίδα', p1_cat:'Ρομποτική · Ηλεκτρονικά · Κατασκευή', p1_title:'Αρθρωτό Ρομπότ Ι',
    p1_desc:'Τροχήλατο ρομπότ με 3 μπαταρίες μολύβδου, 36V, ηλιακό πάνελ, 4 κάμερες, αισθητήρες και ισχυρά LED. Laser cut χάλυβας, βιοδιασπάσιμη PLA, ξύλο. Αδιάβροχο και αντισκονικό.', p1_link:'Δείτε Έργο →',
    p2_cat:'Ρομποτική · Μηχανισμοί', p2_title:'Αρθρωτό Ρομπότ ΙΙ',
    p2_desc:'Omni-wheels και σερβο-κινούμενοι βραχίονες. Κινείται με ακρίβεια σε πολύ στενούς χώρους.', p2_link:'Δείτε →',
    p3_cat:'Ασφάλεια · Εκπαίδευση', p3_title:'Simulator Ζώνης Ασφαλείας',
    p3_desc:'Νιώστε πώς είναι να χτυπάτε τοίχο στα 12km/h. Εκδόσεις μονής και διπλής θέσης.', p3_link:'Δείτε →',
    p4_cat:'Ασφάλεια · Προσομοίωση', p4_title:'Rollcar Simulator',
    p4_desc:'Προσομοιωτής ανατροπής αυτοκινήτου. Τοποθετείτε αυτοκίνητο στην κορυφή και κυλάτε μέσα. Εκδόσεις Ι & ΙΙ έως 20rpm.', p4_link:'Δείτε →',
    p5_cat:'Δυναμική · Δομές', p5_title:'Αρμονικός Διεγέρτης 1D',
    p5_desc:'Δόνηση κατασκευής 450kg μονοδιευθυντικά, έως 20Hz. Αναποδογυρίστε τον για 3 κατευθύνσεις.', p5_link:'Δείτε →',
    p6_badge:'Sheet Metal', p6_cat:'Φύλλα Μετάλλου · Laser Cutting', p6_title:'Εφαρμογές Φύλλων Μετάλλου',
    p6_desc:'Laser cutting και brake press — κοπή, διαμόρφωση, συγκόλληση. Διακοσμητικά LED, καλάθια καυσόξυλων, δομικά στοιχεία. Ταχύς σχεδιασμός, βελτιστοποιημένη κατασκευή.', p6_link:'Δείτε →',
    p7_badge:'3D Printing', p7_cat:'Rapid Prototyping · Δημιουργία', p7_title:'Σειρά 3D Printing',
    p7_desc:'Jet turbine fan, αυτόματος τροφοδότης κατοικίδιων (Arduino), εργαλεία DIY, reverse engineering, custom αξεσουάρ μοτοσυκλέτας.', p7_link:'Δείτε Σειρά →',
    p8_cat:'3D Print · Ακρίβεια', p8_title:'Slingshot Τυφέκιο',
    p8_desc:'Modular slingshot τυφέκιο με 3D-printed εξαρτήματα, σύστημα στόχου και οπτικό στόχαστρο.', p8_link:'Δείτε →',
    p9_cat:'FEA · Τεχνική Τεκμηρίωση', p9_title:'FEA & Τεχνικά Σχέδια',
    p9_desc:'Ανάλυση FEA, gear & shaft assemblies με εκκεντρικές μάζες, χαλύβδινες βάσεις υπό βαριά φόρτιση.', p9_link:'Δείτε →',
    sw_heading:'Λογισμικό', sw_label:'Ενεργό Προϊόν · easemanual.eu',
    sw_desc:'Ισχυρό λογισμικό που αυτοματοποιεί τη δημιουργία τεχνικής μελέτης για άδεια κυκλοφορίας οχημάτων ειδικής χρήσης — βάσει ΥΑ 80255/4693/19/2020. Από μηχανικούς για μηχανικούς.',
    sw_f1:'Τεχνικοί υπολογισμοί', sw_f2:'Διαγράμματα φόρτισης', sw_f3:'Σχέδια οχημάτων A3', sw_f4:'Αυτόματη μελέτη Word',
    sw_f5:'Άξονες & εφεδρανισμοί', sw_f6:'Ευστάθεια & πέδηση', sw_f7:'Συγκολλήσεις & ελατήρια', sw_f8:'Γερανοί & καλαθοφόρα',
    sw_cta1:'Δείτε το Προϊόν →', sw_cta2:'Τιμολόγηση',
    contact_label:'// Ας Δουλέψουμε Μαζί',
    contact_heading:'Έχετε ένα\nέργο στο νου;',
    contact_sub:'Από τον σχεδιασμό ενός εξαρτήματος έως τη διαχείριση ολόκληρου έργου — επικοινωνήστε μαζί μας.',
    footer_copy:'© 2026 Δημήτριος Μουδιώτης — Expertease', footer_loc:'Παγκράτι, Αθήνα',
  },
  en: {
    nav_about:'About', nav_projects:'Work', nav_software:'Software',
    nav_experience:'Education', nav_contact:'Contact',
    hero_tag:'// Mechanical Engineer — Pagrati, Athens GR',
    hero_title:'Mechanical Design · 3D Printing · Project Management',
    hero_tagline:'from vision to reality',
    hero_desc:'Founder of <strong>Expertease</strong> — machine design, sheet metal, rapid prototyping, BOM, and project management. Based in Pagrati, Athens.',
    hero_cta_work:'View Work →', hero_cta_contact:'Get in Touch',
    stat_years:'Years Experience', stat_projects:'Projects Delivered', stat_degrees:'Postgrad Degrees',
    viewer_hint:'drag to rotate',
    about_heading:'About',
    about_p1:'I\'m <strong>Dimitrios Moudiotis</strong>, a Mechanical Engineer from <strong>AUTH</strong> with four postgraduate degrees: two MSc in France, one MSc in Product Design in Greece, and an MBA in Leadership & Project Management in the USA.',
    about_quote:'"Engineering is the art of turning an idea into something you can hold in your hands."',
    about_p2:'Through <strong>Expertease</strong> I take ownership of the full product lifecycle — from initial design and BOM to 3D printing, sheet metal fabrication, and project management.',
    about_p3:'Based in <strong>Pagrati, Athens</strong> — available for projects across Greece and internationally.',
    projects_heading:'Work',
    filter_all:'All', filter_robotics:'Robotics', filter_3dprint:'3D Printing',
    filter_metal:'Sheet Metal', filter_safety:'Safety',
    p1_badge:'Featured', p1_cat:'Robotics · Electronics · Fabrication', p1_title:'Modular Robot I',
    p1_desc:'Tracked robot with 3 lead-acid batteries, 36V, solar panel, 4 cameras, sensors, powerful LEDs. Laser-cut steel, biodegradable PLA, wood. Dustproof & waterproof.', p1_link:'View Project →',
    p2_cat:'Robotics · Mechanisms', p2_title:'Modular Robot II',
    p2_desc:'Omni-wheels and servo-driven robotic arms. Moves accurately in very tight spaces.', p2_link:'View →',
    p3_cat:'Safety · Education', p3_title:'Seatbelt Convincer',
    p3_desc:'Feel what it\'s like to hit a wall at 12km/h. Single and double-seat versions.', p3_link:'View →',
    p4_cat:'Safety · Simulation', p4_title:'Rollcar Simulator',
    p4_desc:'Car rollover simulator. Place a car on top and roll inside it. Versions I & II up to 20rpm.', p4_link:'View →',
    p5_cat:'Dynamics · Structures', p5_title:'1D Harmonic Exciter',
    p5_desc:'Shake a structure with 450kg uni-directional loading, up to 20Hz. Flip it for all 3 axes.', p5_link:'View →',
    p6_badge:'Sheet Metal', p6_cat:'Sheet Metal · Laser Cutting', p6_title:'Sheet Metal Applications',
    p6_desc:'Laser cutting & brake press — cutting, forming, welding. LED wall décor, log baskets, structural elements. Fast design, optimised fabrication.', p6_link:'View →',
    p7_badge:'3D Printing', p7_cat:'Rapid Prototyping · Creative Design', p7_title:'3D Printing Series',
    p7_desc:'Jet turbine fan, Arduino pet feeder, DIY tools, reverse engineering, custom motorcycle accessories — all fully 3D printed.', p7_link:'View Series →',
    p8_cat:'3D Print · Precision', p8_title:'Slingshot Rifle',
    p8_desc:'Modular slingshot rifle with 3D-printed parts, target system, and optical sight.', p8_link:'View →',
    p9_cat:'FEA · Technical Docs', p9_title:'FEA & Technical Drawings',
    p9_desc:'FEA analysis, gear & shaft assemblies with eccentric masses, steel structures under heavy rotational loading.', p9_link:'View →',
    sw_heading:'Software', sw_label:'Active Product · easemanual.eu',
    sw_desc:'Powerful software automating the creation of technical studies for special-purpose vehicle licensing — per Greek regulation YA 80255/4693/19/2020. Built by engineers for engineers.',
    sw_f1:'Technical calculations', sw_f2:'Load diagrams', sw_f3:'A3 vehicle drawings', sw_f4:'Auto Word report',
    sw_f5:'Shafts & bearings', sw_f6:'Stability & braking', sw_f7:'Welds & springs', sw_f8:'Cranes & platforms',
    sw_cta1:'View Product →', sw_cta2:'Pricing',
    contact_label:'// Let\'s Work Together',
    contact_heading:'Got a project\nin mind?',
    contact_sub:'From designing a single component to managing an entire project — Expertease is here.',
    footer_copy:'© 2026 Dimitrios Moudiotis — Expertease', footer_loc:'Pagrati, Athens',
  }
};

function applyLang(lang) {
  const t = LANG[lang];
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';
  const set = (id, val, html=false) => { const el=document.getElementById(id); if(!el)return; html?el.innerHTML=val:el.textContent=val; };
  set('nav-about',t.nav_about); set('nav-projects',t.nav_projects);
  set('nav-software',t.nav_software); set('nav-experience',t.nav_experience); set('nav-contact',t.nav_contact);
  set('hero-tag',t.hero_tag); set('hero-title',t.hero_title); set('hero-tagline',t.hero_tagline);
  set('hero-desc',t.hero_desc,true);
  set('hero-cta-work',t.hero_cta_work); set('hero-cta-contact',t.hero_cta_contact);
  set('stat-years',t.stat_years); set('stat-projects',t.stat_projects); set('stat-degrees',t.stat_degrees);
  set('viewer-hint',t.viewer_hint);
  set('about-heading',t.about_heading);
  set('about-p1',t.about_p1,true); set('about-quote',t.about_quote);
  set('about-p2',t.about_p2,true); set('about-p3',t.about_p3,true);
  set('projects-heading',t.projects_heading);
  set('filter-all',t.filter_all); set('filter-robotics',t.filter_robotics);
  set('filter-3dprint',t.filter_3dprint); set('filter-metal',t.filter_metal); set('filter-safety',t.filter_safety);
  for(let i=1;i<=9;i++){
    ['badge','cat','title','desc','link'].forEach(k=>{ if(t[`p${i}_${k}`]) set(`p${i}-${k}`,t[`p${i}_${k}`]); });
  }
  set('sw-heading',t.sw_heading); set('sw-label',t.sw_label); set('sw-desc',t.sw_desc);
  for(let i=1;i<=8;i++) set(`sw-f${i}`,t[`sw_f${i}`]);
  set('sw-cta1',t.sw_cta1); set('sw-cta2',t.sw_cta2);
  set('contact-label',t.contact_label); set('contact-heading',t.contact_heading); set('contact-sub',t.contact_sub);
  set('footer-copy',t.footer_copy); set('footer-loc',t.footer_loc);
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('lang',lang);
}

/* ═══════════════════════════════════════════════════════════════
   THREE.JS — COMPLEX FLOATING MACHINE ASSEMBLY
═══════════════════════════════════════════════════════════════ */
let scene, camera, renderer, parts=[], explodeT=0, exploding=false;
let isDragging=false, prevMouse={x:0,y:0}, rotGroup, clock;
let currentMode='rotate', floatT=0;

function makeGearShape(teeth, innerR, toothH) {
  const s = new THREE.Shape();
  const step = (Math.PI*2)/teeth;
  for(let i=0;i<teeth;i++){
    const a0=i*step-step*.45, a1=i*step-step*.18;
    const a2=i*step+step*.18, a3=i*step+step*.45;
    const fn = (a,r) => [Math.cos(a)*r, Math.sin(a)*r];
    if(i===0) s.moveTo(...fn(a0,innerR)); else s.lineTo(...fn(a0,innerR));
    s.lineTo(...fn(a1,innerR+toothH));
    s.lineTo(...fn(a2,innerR+toothH));
    s.lineTo(...fn(a3,innerR));
  }
  s.closePath();
  const h = new THREE.Path();
  h.absarc(0,0,innerR*0.28,0,Math.PI*2,true);
  s.holes.push(h);
  // spoke holes
  for(let i=0;i<(teeth>14?6:4);i++){
    const a = (i/(teeth>14?6:4))*Math.PI*2;
    const sh = new THREE.Path();
    sh.absarc(Math.cos(a)*innerR*.58, Math.sin(a)*innerR*.58, innerR*.12, 0, Math.PI*2, true);
    s.holes.push(sh);
  }
  return s;
}

function initThree() {
  const canvas = document.getElementById('hero3d');
  if(!canvas || typeof THREE==='undefined') return;
  const W = canvas.parentElement.offsetWidth || 600;
  const H = canvas.parentElement.offsetHeight || 580;

  renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W,H);
  renderer.setClearColor(0x000000, 0); // transparent background
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();
  // NO fog, NO background, NO grid — pure floating

  camera = new THREE.PerspectiveCamera(40, W/H, 0.1, 300);
  camera.position.set(0, 2, 18);
  camera.lookAt(0, 0, 0);
  clock = new THREE.Clock();

  // Lights — dramatic 3-point
  const ambient = new THREE.AmbientLight(0xaec6e8, 0.5);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(8, 12, 10); key.castShadow = true;
  key.shadow.mapSize.width = 2048; key.shadow.mapSize.height = 2048;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x4a82d4, 0.5);
  fill.position.set(-10, 4, -6); scene.add(fill);
  const rim = new THREE.PointLight(0xc0392b, 0.8, 40);
  rim.position.set(-5, 6, -8); scene.add(rim);
  const bot = new THREE.PointLight(0x2a5fa8, 0.4, 30);
  bot.position.set(4, -6, 4); scene.add(bot);

  rotGroup = new THREE.Group();
  scene.add(rotGroup);

  const ext = {depth:0.7, bevelEnabled:true, bevelThickness:0.05, bevelSize:0.04, bevelSegments:4};
  const extThin = {depth:0.35, bevelEnabled:true, bevelThickness:0.03, bevelSize:0.03, bevelSegments:3};

  // Materials
  const matSteel = new THREE.MeshStandardMaterial({color:0x4a5568, metalness:0.92, roughness:0.18});
  const matBlue  = new THREE.MeshStandardMaterial({color:0x1a3a6a, metalness:0.9, roughness:0.15});
  const matRed   = new THREE.MeshStandardMaterial({color:0x8a1a1a, metalness:0.88, roughness:0.2});
  const matBrass = new THREE.MeshStandardMaterial({color:0x8a7040, metalness:0.95, roughness:0.1});
  const matShaft = new THREE.MeshStandardMaterial({color:0x5a6070, metalness:0.97, roughness:0.1});
  const matHouse = new THREE.MeshStandardMaterial({color:0x2a3040, metalness:0.7, roughness:0.35});

  // ── BIG DRIVE GEAR (18 teeth)
  const bigGearMesh = new THREE.Mesh(
    new THREE.ExtrudeGeometry(makeGearShape(18,2.8,0.5), ext), matSteel);
  bigGearMesh.position.set(-1.5,0,0); bigGearMesh.castShadow=true; rotGroup.add(bigGearMesh);
  parts.push({mesh:bigGearMesh, origin:bigGearMesh.position.clone(), explodeDir:new THREE.Vector3(-2.5,0,1.2), spinSpeed:0.35});

  // ── MEDIUM GEAR (12 teeth)
  const medGearMesh = new THREE.Mesh(
    new THREE.ExtrudeGeometry(makeGearShape(12,1.8,0.45), ext), matBlue);
  medGearMesh.position.set(2.6,0,0); medGearMesh.castShadow=true; rotGroup.add(medGearMesh);
  parts.push({mesh:medGearMesh, origin:medGearMesh.position.clone(), explodeDir:new THREE.Vector3(2.2,0.5,0.8), spinSpeed:-0.53});

  // ── SMALL GEAR (8 teeth)
  const smlGearMesh = new THREE.Mesh(
    new THREE.ExtrudeGeometry(makeGearShape(8,1.1,0.4), extThin), matBrass);
  smlGearMesh.position.set(2.6,3.1,0.18); smlGearMesh.castShadow=true; rotGroup.add(smlGearMesh);
  parts.push({mesh:smlGearMesh, origin:smlGearMesh.position.clone(), explodeDir:new THREE.Vector3(1.5,3.0,1.5), spinSpeed:0.9});

  // ── IDLER GEAR (10 teeth)
  const idlerMesh = new THREE.Mesh(
    new THREE.ExtrudeGeometry(makeGearShape(10,1.4,0.42), extThin), matRed);
  idlerMesh.position.set(0.5,2.2,0.1); idlerMesh.castShadow=true; rotGroup.add(idlerMesh);
  parts.push({mesh:idlerMesh, origin:idlerMesh.position.clone(), explodeDir:new THREE.Vector3(0,2.8,-1.2), spinSpeed:-0.7});

  // ── MAIN SHAFT
  const shaftGeo = new THREE.CylinderGeometry(0.25,0.25,5,20);
  const sh1 = new THREE.Mesh(shaftGeo, matShaft);
  sh1.rotation.x=Math.PI/2; sh1.position.set(-1.5,0,0.35); rotGroup.add(sh1);
  parts.push({mesh:sh1, origin:sh1.position.clone(), explodeDir:new THREE.Vector3(-2,0,-2), spinSpeed:0});

  // ── SECONDARY SHAFT
  const sh2 = new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.18,4.5,16), matShaft);
  sh2.rotation.x=Math.PI/2; sh2.position.set(2.6,0,0.35); rotGroup.add(sh2);
  parts.push({mesh:sh2, origin:sh2.position.clone(), explodeDir:new THREE.Vector3(2.5,0,-2), spinSpeed:0});

  // ── SMALL SHAFT
  const sh3 = new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,3.8,14), matShaft);
  sh3.rotation.x=Math.PI/2; sh3.position.set(2.6,3.1,0.35); rotGroup.add(sh3);
  parts.push({mesh:sh3, origin:sh3.position.clone(), explodeDir:new THREE.Vector3(2,3.5,-2), spinSpeed:0});

  // ── HOUSING (back plate)
  const houseShape = new THREE.Shape();
  houseShape.moveTo(-4.5,-2.5); houseShape.lineTo(4.5,-2.5);
  houseShape.lineTo(4.5,5.2); houseShape.lineTo(-4.5,5.2); houseShape.closePath();
  const holeB = new THREE.Path(); holeB.absarc(-1.5,0,3.2,0,Math.PI*2,true); houseShape.holes.push(holeB);
  const holeM = new THREE.Path(); holeM.absarc(2.6,0,2.2,0,Math.PI*2,true); houseShape.holes.push(holeM);
  const holeS = new THREE.Path(); holeS.absarc(2.6,3.1,1.6,0,Math.PI*2,true); houseShape.holes.push(holeS);
  const holeI = new THREE.Path(); holeI.absarc(0.5,2.2,1.8,0,Math.PI*2,true); houseShape.holes.push(holeI);
  // corner bolts
  [[-4,-2],[4,-2],[4,4.8],[-4,4.8]].forEach(([x,y])=>{
    const b=new THREE.Path(); b.absarc(x,y,0.22,0,Math.PI*2,true); houseShape.holes.push(b);
  });
  const backPlate = new THREE.Mesh(
    new THREE.ExtrudeGeometry(houseShape,{depth:0.3,bevelEnabled:false}), matHouse);
  backPlate.position.set(0,0,-0.65); rotGroup.add(backPlate);
  parts.push({mesh:backPlate, origin:backPlate.position.clone(), explodeDir:new THREE.Vector3(0,0,-3.5), spinSpeed:0});

  // ── FRONT COVER (with windows)
  const coverShape = new THREE.Shape();
  coverShape.moveTo(-4.5,-2.5); coverShape.lineTo(4.5,-2.5);
  coverShape.lineTo(4.5,5.2); coverShape.lineTo(-4.5,5.2); coverShape.closePath();
  // viewing windows
  const win1=new THREE.Path(); win1.absarc(-1.5,0,2.6,0,Math.PI*2,true); coverShape.holes.push(win1);
  const win2=new THREE.Path(); win2.absarc(2.6,0,1.6,0,Math.PI*2,true); coverShape.holes.push(win2);
  const win3=new THREE.Path(); win3.absarc(2.6,3.1,1.2,0,Math.PI*2,true); coverShape.holes.push(win3);
  [[-4,-2],[4,-2],[4,4.8],[-4,4.8]].forEach(([x,y])=>{
    const b=new THREE.Path(); b.absarc(x,y,0.22,0,Math.PI*2,true); coverShape.holes.push(b);
  });
  const frontCover = new THREE.Mesh(
    new THREE.ExtrudeGeometry(coverShape,{depth:0.25,bevelEnabled:false}), matHouse);
  frontCover.position.set(0,0,1.0); rotGroup.add(frontCover);
  parts.push({mesh:frontCover, origin:frontCover.position.clone(), explodeDir:new THREE.Vector3(0,0,3.2), spinSpeed:0});

  // ── CORNER BOLT CYLINDERS
  [[-4,-2],[4,-2],[4,4.8],[-4,4.8]].forEach(([x,y])=>{
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.18,2.2,12), matBrass);
    bolt.rotation.x=Math.PI/2; bolt.position.set(x,y,0); rotGroup.add(bolt);
    parts.push({mesh:bolt, origin:bolt.position.clone(), explodeDir:new THREE.Vector3(x*0.4,y*0.3,0), spinSpeed:0});
  });

  // ── BEARING RINGS (decorative on shafts)
  [[−1.5,0],[2.6,0],[2.6,3.1]].forEach(([x,y])=>{
    [-1.5,1.5].forEach(z=>{
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.36,0.1,12,32), matBrass);
      ring.position.set(x,y,z); rotGroup.add(ring);
      parts.push({mesh:ring, origin:ring.position.clone(), explodeDir:new THREE.Vector3(x*0.2,y*0.1,z*1.8), spinSpeed:0});
    });
  });

  // ── OUTPUT FLANGE
  const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.9,0.9,0.4,20), matSteel);
  flange.rotation.x=Math.PI/2; flange.position.set(-1.5,0,-1.2); rotGroup.add(flange);
  parts.push({mesh:flange, origin:flange.position.clone(), explodeDir:new THREE.Vector3(-1.5,0,-3), spinSpeed:0.35});

  // Drag
  canvas.addEventListener('mousedown', e=>{isDragging=true; prevMouse={x:e.clientX,y:e.clientY};});
  window.addEventListener('mouseup',()=>isDragging=false);
  window.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    const dx=e.clientX-prevMouse.x, dy=e.clientY-prevMouse.y;
    rotGroup.rotation.y+=dx*.01; rotGroup.rotation.x+=dy*.007;
    rotGroup.rotation.x=Math.max(-1,Math.min(1,rotGroup.rotation.x));
    prevMouse={x:e.clientX,y:e.clientY};
  });
  canvas.addEventListener('touchstart',e=>{isDragging=true; prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  window.addEventListener('touchend',()=>isDragging=false);
  window.addEventListener('touchmove',e=>{
    if(!isDragging)return;
    const dx=e.touches[0].clientX-prevMouse.x;
    rotGroup.rotation.y+=dx*.01;
    prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};
  },{passive:true});

  window.addEventListener('resize',()=>{
    const W2=canvas.parentElement.offsetWidth, H2=canvas.parentElement.offsetHeight||580;
    camera.aspect=W2/H2; camera.updateProjectionMatrix(); renderer.setSize(W2,H2);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  floatT += dt;

  // Floating motion — gentle bob + drift
  if(!isDragging && currentMode==='rotate') {
    rotGroup.rotation.y += 0.003;
    rotGroup.position.y = Math.sin(floatT*0.6)*0.18;
    rotGroup.position.x = Math.sin(floatT*0.4)*0.08;
  }

  // Gear spinning
  parts.forEach(p=>{ if(p.spinSpeed!==0) p.mesh.rotation.z+=p.spinSpeed*dt; });

  // Explode/collapse
  if(exploding && explodeT<1){
    explodeT=Math.min(1,explodeT+dt*0.65);
    updateExplode(explodeT);
  } else if(!exploding && explodeT>0){
    explodeT=Math.max(0,explodeT-dt*0.9);
    updateExplode(explodeT);
  }

  renderer.render(scene,camera);
}

function updateExplode(t) {
  const e=easeInOut(t);
  parts.forEach(p=>{
    p.mesh.position.x = p.origin.x + p.explodeDir.x*2.8*e;
    p.mesh.position.y = p.origin.y + p.explodeDir.y*2.8*e;
    p.mesh.position.z = p.origin.z + p.explodeDir.z*2.8*e;
  });
}
function easeInOut(t){return t<.5?2*t*t:-1+(4-2*t)*t;}

function setMode(mode){
  currentMode=mode;
  if(mode==='explode') exploding=true;
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('btn-'+mode); if(btn) btn.classList.add('active');
}
function resetModel(){
  exploding=false;
  rotGroup.rotation.set(0,0,0);
  rotGroup.position.set(0,0,0);
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const rb=document.getElementById('btn-rotate'); if(rb) rb.classList.add('active');
  currentMode='rotate';
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO FILTER
═══════════════════════════════════════════════════════════════ */
function initFilter(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card=>{
        const show=f==='all'||card.dataset.cat===f;
        card.style.opacity=show?'1':'0.25';
        card.style.transform=show?'':'scale(0.97)';
        card.style.transition='opacity .3s, transform .3s';
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   CURSOR
═══════════════════════════════════════════════════════════════ */
function initCursor(){
  const cur=document.getElementById('cursor'), ring=document.getElementById('cursorRing');
  if(!cur)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  (function loop(){
    cur.style.left=mx+'px'; cur.style.top=my+'px';
    rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.project-card,.skill-item,.vctrl').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.classList.add('hover');ring.classList.add('hover');});
    el.addEventListener('mouseleave',()=>{cur.classList.remove('hover');ring.classList.remove('hover');});
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════════════════════════════ */
function initScrollAnimations(){
  const barObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.querySelectorAll('.skill-bar').forEach(b=>b.style.width=b.dataset.width);
    });
  },{threshold:0.3});
  const sg=document.getElementById('skillsGrid'); if(sg) barObs.observe(sg);

  const tlObs=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{ if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'),i*130); });
  },{threshold:0.1});
  document.querySelectorAll('.timeline-item').forEach(el=>tlObs.observe(el));

  const sections=document.querySelectorAll('section[id]');
  const navLinks=document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll',()=>{
    let cur='';
    sections.forEach(s=>{if(window.scrollY>=s.offsetTop-160)cur=s.id;});
    navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
  });
}

/* ═══════════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));
  applyLang(localStorage.getItem('lang')||'el');
  initCursor();
  initScrollAnimations();
  initFilter();
  initThree();
});
