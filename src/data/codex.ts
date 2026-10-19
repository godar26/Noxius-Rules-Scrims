export type ModeId = "hp" | "snd" | "ctrl";

export type SettingRow = { label: string; value: string };

export type ModeSetting = {
  id: ModeId;
  fr: string;
  en: string;
  rows: SettingRow[];
};

export type MapCard = {
  name: string;
  mode: ModeId;
  image?: string;
  plate?: "plate" | "plate-b" | "plate-c";
  line: string;
};

export type ScriptStep = {
  team: "1" | "2";
  verb: "Bannit" | "Choisit" | "Côté" | "Reste";
  text: string;
};

export type Phase = {
  title: string;
  mode: ModeId;
  steps: ScriptStep[];
};

export type Slot = {
  n: string;
  mode: ModeId;
  fr: string;
  pick: string;
  side: string;
};

export type Role = {
  quota: string;
  fr: string;
  en: string;
  short: string;
  rule: string;
};

export type Entry = { fr: string; en?: string; note?: string };

export type Group = {
  id: string;
  cat: string;
  title: string;
  tone: "ban" | "allow" | "note";
  intro?: string;
  items: Entry[];
};

export const nav = [
  { id: "accueil", label: "Accueil" },
  { id: "reglages", label: "Réglages" },
  { id: "cartes", label: "Cartes" },
  { id: "formats", label: "Formats" },
  { id: "roles", label: "Rôles" },
  { id: "arsenal", label: "Arsenal" },
  { id: "journal", label: "Journal" },
] as const;

export const modeLabel: Record<ModeId, string> = {
  hp: "Point stratégique",
  snd: "Recherche et destruction",
  ctrl: "Contrôle",
};

export const settings: ModeSetting[] = [
  {
    id: "hp",
    fr: "Point stratégique",
    en: "Hardpoint",
    rows: [
      { label: "Score de manche", value: "250" },
      { label: "Temps limite", value: "600 s" },
      { label: "Spectateurs", value: "N/A" },
      { label: "Mot de passe", value: "N/A" },
      { label: "Invitations", value: "Oui" },
    ],
  },
  {
    id: "snd",
    fr: "Recherche et destruction",
    en: "Search & Destroy",
    rows: [
      { label: "Manches à gagner", value: "9" },
      { label: "Temps de manche", value: "120 s" },
      { label: "Prolongation", value: "Oui" },
      { label: "Plafond de prolongation", value: "20" },
      { label: "Spectateurs", value: "N/A" },
      { label: "Mot de passe", value: "N/A" },
      { label: "Invitations", value: "Oui" },
    ],
  },
  {
    id: "ctrl",
    fr: "Contrôle",
    en: "Control",
    rows: [
      { label: "Score de manche", value: "3" },
      { label: "Temps de manche", value: "90 s" },
      { label: "Spectateurs", value: "N/A" },
      { label: "Mot de passe", value: "N/A" },
      { label: "Invitations", value: "Oui" },
    ],
  },
];

export const maps: MapCard[] = [
  { name: "Summit", mode: "hp", image: "/codex/maps/summit.jpg", line: "Crête, neige, bunkers de béton." },
  { name: "Hacienda", mode: "hp", image: "/codex/maps/hacienda.jpg", line: "Cour, arches, fontaine sèche." },
  { name: "Combine", mode: "hp", image: "/codex/maps/combine.jpg", line: "Silos, passerelles, poussière." },
  { name: "Takeoff", mode: "hp", image: "/codex/maps/takeoff.jpg", line: "Tarmac, terminal, tour." },
  { name: "Arsenal", mode: "hp", image: "/codex/maps/arsenal.jpg", line: "Entrepôt, cages, caisses." },
  { name: "Tunisia", mode: "snd", image: "/codex/maps/tunisia.jpg", line: "Murs ocres, escaliers, mer." },
  { name: "Firing Range", mode: "snd", image: "/codex/maps/firing-range.jpg", line: "Couloirs de stand, merlons." },
  { name: "Coastal", mode: "snd", image: "/codex/maps/coastal.jpg", line: "Terrasses blanches, falaise." },
  { name: "Slums", mode: "snd", plate: "plate-b", line: "Ruelles serrées, étages bas." },
  { name: "Meltdown", mode: "snd", plate: "plate-c", line: "Tours, vapeur, coursives." },
  { name: "Raid", mode: "ctrl", plate: "plate", line: "Villa, bassin, escaliers." },
  { name: "Standoff", mode: "ctrl", plate: "plate-b", line: "Rue large, façades face à face." },
  { name: "Crossroads Strike", mode: "ctrl", plate: "plate-c", line: "Quatre routes, village croisé." },
];

export const bo5Slots: Slot[] = [
  { n: "01", mode: "hp", fr: "Point stratégique", pick: "Carte choisie par l’équipe 1", side: "Côté : équipe 2" },
  { n: "02", mode: "snd", fr: "Recherche et destruction", pick: "Carte choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "03", mode: "ctrl", fr: "Contrôle", pick: "Carte restante du pool", side: "Côté : équipe 1" },
  { n: "04", mode: "hp", fr: "Point stratégique", pick: "Carte choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "05", mode: "snd", fr: "Recherche et destruction", pick: "Carte choisie par l’équipe 1", side: "Côté : équipe 2" },
];

export const bo5Phases: Phase[] = [
  {
    title: "Phase Point stratégique",
    mode: "hp",
    steps: [
      { team: "1", verb: "Bannit", text: "Une carte du pool Point stratégique." },
      { team: "2", verb: "Bannit", text: "Une carte du pool Point stratégique." },
      { team: "1", verb: "Choisit", text: "La carte de la manche 1. L’équipe 2 prend le côté de départ." },
      { team: "2", verb: "Choisit", text: "La carte de la manche 4. L’équipe 1 prend le côté de départ." },
    ],
  },
  {
    title: "Phase Recherche et destruction",
    mode: "snd",
    steps: [
      { team: "2", verb: "Bannit", text: "Une carte du pool Recherche et destruction." },
      { team: "1", verb: "Bannit", text: "Une carte du pool Recherche et destruction." },
      { team: "2", verb: "Choisit", text: "La carte de la manche 2. L’équipe 1 prend le côté de départ." },
      { team: "1", verb: "Choisit", text: "La carte de la manche 5. L’équipe 2 prend le côté de départ." },
    ],
  },
  {
    title: "Phase Contrôle",
    mode: "ctrl",
    steps: [
      { team: "1", verb: "Bannit", text: "Une carte du pool Contrôle." },
      { team: "2", verb: "Bannit", text: "Une carte du pool Contrôle." },
      { team: "1", verb: "Côté", text: "La carte restante est la manche 3. L’équipe 1 prend le côté de départ." },
    ],
  },
];

export const bo3Slots: Slot[] = [
  { n: "01", mode: "hp", fr: "Point stratégique", pick: "Dernière carte du pool", side: "Côté : équipe 1" },
  { n: "02", mode: "snd", fr: "Recherche et destruction", pick: "Dernière carte du pool", side: "Côté : équipe 2" },
  { n: "03", mode: "ctrl", fr: "Contrôle", pick: "Dernière carte du pool", side: "Côté : équipe 1" },
];

export const bo3Phases: Phase[] = [
  {
    title: "Phase Point stratégique",
    mode: "hp",
    steps: [
      { team: "1", verb: "Bannit", text: "Une carte du pool Point stratégique." },
      { team: "2", verb: "Bannit", text: "Une carte du pool Point stratégique." },
      { team: "1", verb: "Bannit", text: "Une deuxième carte du pool." },
      { team: "2", verb: "Bannit", text: "Une deuxième carte du pool." },
      { team: "1", verb: "Reste", text: "La carte restante est la manche 1. L’équipe 1 prend le côté." },
    ],
  },
  {
    title: "Phase Recherche et destruction",
    mode: "snd",
    steps: [
      { team: "2", verb: "Bannit", text: "Une carte du pool Recherche et destruction." },
      { team: "1", verb: "Bannit", text: "Une carte du pool Recherche et destruction." },
      { team: "2", verb: "Bannit", text: "Une deuxième carte du pool." },
      { team: "1", verb: "Bannit", text: "Une deuxième carte du pool." },
      { team: "2", verb: "Reste", text: "La carte restante est la manche 2. L’équipe 2 prend le côté." },
    ],
  },
  {
    title: "Phase Contrôle",
    mode: "ctrl",
    steps: [
      { team: "1", verb: "Bannit", text: "Une carte du pool Contrôle." },
      { team: "2", verb: "Bannit", text: "Une carte du pool Contrôle." },
      { team: "1", verb: "Reste", text: "La carte restante est la manche 3. L’équipe 1 prend le côté." },
    ],
  },
];

export const bo7Slots: Slot[] = [
  { n: "01", mode: "hp", fr: "Point stratégique", pick: "Choisie par l’équipe 1", side: "Côté : équipe 2" },
  { n: "02", mode: "snd", fr: "Recherche et destruction", pick: "Choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "03", mode: "ctrl", fr: "Contrôle", pick: "Choisie par l’équipe 1", side: "Côté : équipe 2" },
  { n: "04", mode: "hp", fr: "Point stratégique", pick: "Choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "05", mode: "snd", fr: "Recherche et destruction", pick: "Choisie par l’équipe 1", side: "Côté : équipe 2" },
  { n: "06", mode: "ctrl", fr: "Contrôle", pick: "Choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "07", mode: "snd", fr: "Recherche et destruction", pick: "Carte restante du pool", side: "Côté : équipe 2" },
];

export const bo7Phases: Phase[] = [
  {
    title: "Point stratégique",
    mode: "hp",
    steps: [
      { team: "1", verb: "Bannit", text: "Une carte Point stratégique." },
      { team: "2", verb: "Bannit", text: "Une carte Point stratégique." },
      { team: "1", verb: "Choisit", text: "Manche 1. Côté : équipe 2." },
      { team: "2", verb: "Choisit", text: "Manche 4. Côté : équipe 1." },
    ],
  },
  {
    title: "Recherche et destruction",
    mode: "snd",
    steps: [
      { team: "2", verb: "Bannit", text: "Une carte Recherche et destruction." },
      { team: "1", verb: "Bannit", text: "Une carte Recherche et destruction." },
      { team: "2", verb: "Choisit", text: "Manche 2. Côté : équipe 1." },
      { team: "1", verb: "Choisit", text: "Manche 5. Côté : équipe 2." },
      { team: "2", verb: "Reste", text: "La carte restante est la manche 7. Côté : équipe 2." },
    ],
  },
  {
    title: "Contrôle",
    mode: "ctrl",
    steps: [
      { team: "1", verb: "Choisit", text: "Manche 3. Côté : équipe 2." },
      { team: "2", verb: "Choisit", text: "Manche 6. Côté : équipe 1." },
    ],
  },
];

export const finalSlots: Slot[] = [
  { n: "01", mode: "hp", fr: "Point stratégique", pick: "Choisie par l’équipe 1", side: "Côté : équipe 2" },
  { n: "02", mode: "snd", fr: "Recherche et destruction", pick: "Choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "03", mode: "ctrl", fr: "Contrôle", pick: "Choisie par l’équipe 1", side: "Côté : équipe 2" },
  { n: "04", mode: "hp", fr: "Point stratégique", pick: "Choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "05", mode: "ctrl", fr: "Contrôle", pick: "Choisie par l’équipe 2", side: "Côté : équipe 1" },
  { n: "06", mode: "snd", fr: "Recherche et destruction", pick: "Choisie par l’équipe 1", side: "Côté : équipe 2" },
];

export const finalPhases: Phase[] = [
  {
    title: "Point stratégique",
    mode: "hp",
    steps: [
      { team: "1", verb: "Bannit", text: "Une carte Point stratégique." },
      { team: "2", verb: "Bannit", text: "Une carte Point stratégique." },
      { team: "1", verb: "Choisit", text: "Manche 1. Côté : équipe 2." },
      { team: "2", verb: "Choisit", text: "Manche 4. Côté : équipe 1." },
    ],
  },
  {
    title: "Recherche et destruction",
    mode: "snd",
    steps: [
      { team: "2", verb: "Bannit", text: "Une carte Recherche et destruction." },
      { team: "1", verb: "Bannit", text: "Une carte Recherche et destruction." },
      { team: "2", verb: "Choisit", text: "Manche 2. Côté : équipe 1." },
      { team: "1", verb: "Choisit", text: "Manche 6. Côté : équipe 2." },
    ],
  },
  {
    title: "Contrôle",
    mode: "ctrl",
    steps: [
      { team: "1", verb: "Choisit", text: "Manche 3. Côté : équipe 2." },
      { team: "2", verb: "Choisit", text: "Manche 5. Côté : équipe 1." },
    ],
  },
];

export const roles: Role[] = [
  { quota: "3", short: "FA", fr: "Fusils d’assaut", en: "Assault Rifles", rule: "Autorisé à équiper la classe fusil d’assaut." },
  { quota: "3", short: "SMG", fr: "Mitraillettes", en: "Sub-Machine Guns", rule: "Autorisé à équiper la classe mitraillette." },
  { quota: "1", short: "FM", fr: "Fusils-mitrailleurs", en: "Light Machine Guns", rule: "Autorisé à équiper la classe fusil-mitrailleur." },
  { quota: "1", short: "POMPE", fr: "Fusils à pompe", en: "Shotgun", rule: "Autorisé à équiper la classe fusil à pompe." },
  { quota: "1", short: "SNIPER", fr: "Précision", en: "Sniper", rule: "Autorisé à équiper la classe fusil de précision." },
  { quota: "1", short: "MARKS", fr: "Tireur", en: "Marksman", rule: "Autorisé à équiper la classe fusil de tireur d’élite." },
];

export const roster = [
  { player: "Joueur 1", a: "FA", b: "SMG" },
  { player: "Joueur 2", a: "SMG", b: "Pompe" },
  { player: "Joueur 3", a: "FA", b: "FM" },
  { player: "Joueur 4", a: "FA", b: "Sniper" },
  { player: "Joueur 5", a: "SMG", b: "Marksman" },
];

export const poolChips = ["FA", "FA", "FA", "SMG", "SMG", "SMG", "FM", "Pompe", "Sniper", "Marksman"];

export const cats = [
  { id: "tout", label: "Tout" },
  { id: "armes", label: "Armes" },
  { id: "accessoires", label: "Accessoires" },
  { id: "equipement", label: "Équipement" },
  { id: "atouts", label: "Atouts" },
  { id: "competences", label: "Compétences" },
  { id: "series", label: "Séries" },
  { id: "jokers", label: "Jokers" },
  { id: "cosmetiques", label: "Skins" },
  { id: "reperes", label: "Repères" },
] as const;

export const groups: Group[] = [
  {
    id: "pompes",
    cat: "armes",
    title: "Fusils à pompe interdits",
    tone: "ban",
    intro: "Le rôle pompe existe. Seules ces deux armes sont bannies. Les autres pompes restent jouables, hors accessoires listés.",
    items: [{ fr: "Argus" }, { fr: "R9-0", note: "Ajoutée le 9 juin 2026." }],
  },
  {
    id: "snipers-ban",
    cat: "armes",
    title: "Précision interdite",
    tone: "ban",
    intro: "DL Q33, Locus, Arctic .50, LW3 Tundra et les autres précisions absentes de cette liste ne sont pas des armes bannies. Certains de leurs accessoires le sont.",
    items: [
      { fr: "M21 EBR", note: "Aide à la visée trop forte, 1er septembre 2026." },
      { fr: "NA-45" },
      { fr: "SO14", note: "Ajoutée le 23 janvier 2026." },
      { fr: "SVD" },
      { fr: "XPR" },
    ],
  },
  {
    id: "smg-ban",
    cat: "armes",
    title: "Mitraillettes interdites",
    tone: "ban",
    items: [
      { fr: "FSS Hurricane", note: "1er septembre 2026." },
      { fr: "Static HV", note: "24 septembre 2026, aide à la visée excessive." },
      { fr: "Sten", note: "1er septembre 2026." },
    ],
  },
  {
    id: "lanceurs",
    cat: "armes",
    title: "Lanceurs interdits",
    tone: "ban",
    items: [{ fr: "D13 Sector" }, { fr: "FHJ-18" }, { fr: "SMRS" }, { fr: "Thumper" }],
  },
  {
    id: "pistolets",
    cat: "armes",
    title: "Pistolets interdits",
    tone: "ban",
    intro: "Le pistolet-mitrailleur n’est pas banni en tant qu’arme. Un de ses canons l’est, plus bas.",
    items: [{ fr: ".50 GS" }, { fr: "MW11" }, { fr: "Shorty" }],
  },
  {
    id: "attach-global",
    cat: "accessoires",
    title: "Accessoires — toutes les armes",
    tone: "ban",
    items: [
      { fr: "Akimbo", en: "Atout d’arme" },
      { fr: "Disabled", en: "Atout d’arme" },
      { fr: "Munitions thermite, souffle du dragon, explosives et incendiaires", en: "Thermite, Dragon’s Breath, Explosive, Incendiary" },
      { fr: "Munitions slug sur tous les fusils à pompe", en: "Slug Ammo" },
    ],
  },
  {
    id: "attach-named",
    cat: "accessoires",
    title: "Accessoires nommés",
    tone: "ban",
    intro: "Les noms d’accessoires restent ceux de l’armurerie, pour les retrouver au caractère près. Les silencieux ne sont pas restreints.",
    items: [
      { fr: "3-Line Rifle", note: "Canon EMPRESS 514MM F01 · Bipod · Crosse KOVALEVSKAYA S01" },
      { fr: ".50 GS", note: "Lightweight Trigger · Match Grade Trigger" },
      { fr: "AS VAL", note: "Chargeur 15 Round FMG Mag" },
      { fr: "BP-50", note: "Leroy 438mm · Recoil Booster" },
      { fr: "CR AMAX", note: "M67 Ammo" },
      { fr: "Cronen Squall", note: "Semi Automatic Fire — 1er septembre 2026" },
      { fr: "Arbalète", en: "Crossbow", note: "Carreaux thermite, gaz et grenade collante" },
      { fr: "CX9", note: "9mm Hollow Point Rounds" },
      { fr: "DL Q33", en: "DLQ", note: "Concussion Ammo" },
      { fr: "DR-H", en: "DRH", note: "OTM Mag" },
      { fr: "Hades", note: "Heartseeker" },
      { fr: "HS0405", note: "Thunder Rounds" },
      { fr: "HVK", note: "Large Caliber Mag" },
      { fr: "LAG 53", note: "Canon 13.0” OSW Para Barrel" },
      { fr: "M4", note: "Lanceur sous le canon" },
      { fr: "Pistolet-mitrailleur", en: "Machine Pistol", note: "Canon VDD 35MM Short Barrel" },
      { fr: "MG42", note: "KRAUSNICK 355MM Rapid · Tambours 6.5 ARISAKA 125 · Recoil Booster" },
      { fr: "Oden", note: "OWC Ranger Barrel · OWC Marksman Barrel" },
      { fr: "QQ9", note: "10MM 30 Round Reload" },
      { fr: "RAM-7", en: "Ram7", note: "FORGE TAC Eclipse Barrel" },
      { fr: "RPD", note: "Infinite Ammo" },
      { fr: "SKS", note: "Tactical Foregrip A · Granulated Grip Tape" },
      { fr: "Type 19", note: "Hi-Accuracy Sniper Ammo" },
      { fr: "Type 63", note: "Airborne Elastic Wrap Grip · Firm Grip Tape · canons 16.4” Rapid Fire, 16.4” Titanium, 18.3” Strike Team" },
      { fr: "LW3 Tundra", en: "Tundra", note: "26.5” Hammer Forged Barrel · 28.2” Tiger Team Barrel" },
      { fr: "USS 9", en: "USS-9", note: "Carbine Pro Barrel · 16.6” Factory Carbine Barrel · 13.1” First Responder Barrel · chargeurs .41 AE 32 coups" },
    ],
  },
  {
    id: "letales",
    cat: "equipement",
    title: "Létales interdites",
    tone: "ban",
    items: [
      { fr: "C4", en: "C4" },
      { fr: "Grenade à sous-munitions", en: "Cluster Grenade" },
      { fr: "Grenade de contact", en: "Contact Grenade" },
      { fr: "Charge perforante", en: "Drill Charge", note: "30 avril 2026." },
      { fr: "Cocktail Molotov", en: "Molotov Cocktail" },
      { fr: "Thermite", en: "Thermite" },
      { fr: "Mine bondissante", en: "Trip Mine" },
    ],
  },
  {
    id: "tactiques",
    cat: "equipement",
    title: "Tactiques interdites",
    tone: "ban",
    items: [
      { fr: "Bombe cryo", en: "Cryo Bomb" },
      { fr: "Grenade leurre", en: "Decoy Grenade" },
      { fr: "Grenade extincteur", en: "Douser Grenade" },
      { fr: "Grenade écho", en: "Echo Grenade" },
      { fr: "Charge flash", en: "Flash Charge", note: "30 avril 2026." },
      { fr: "Drone flash", en: "Flash Drone" },
      { fr: "Grenades à gaz", en: "Gas Grenades" },
      { fr: "Capteur cardiaque", en: "Heartbeat Sensor" },
      { fr: "Leurre gonflable", en: "Inflatable Decoy", note: "30 avril 2026." },
      { fr: "Stimulant", en: "Stim Shot" },
      { fr: "Sphère tempête", en: "Storm Ball" },
      { fr: "Capteur de passage", en: "Trip Sensor" },
    ],
  },
  {
    id: "atouts-rouge",
    cat: "atouts",
    title: "Atouts rouges interdits",
    tone: "ban",
    items: [
      { fr: "Martyre", en: "Martyrdom" },
      { fr: "Surcadence", en: "Overclock" },
      { fr: "Repérage", en: "Pinpoint" },
      { fr: "Réapprovisionnement", en: "Restock" },
      { fr: "Stabilisateurs de glissade", en: "Slide Stabilizers", note: "1er septembre 2026." },
      { fr: "Tacticien", en: "Tactician" },
    ],
  },
  {
    id: "atouts-vert",
    cat: "atouts",
    title: "Atouts verts interdits",
    tone: "ban",
    items: [
      { fr: "Soin rapide", en: "Quick Fix" },
      { fr: "Reconnaissance", en: "Recon" },
      { fr: "Pisteur", en: "Tracker" },
      { fr: "Vautour", en: "Vulture" },
    ],
  },
  {
    id: "atouts-bleu",
    cat: "atouts",
    title: "Atouts bleus interdits",
    tone: "ban",
    items: [
      { fr: "Alerte", en: "Alert" },
      { fr: "Assassin", en: "Assassin" },
      { fr: "Ingénieur", en: "Engineer" },
      { fr: "Ligne dure", en: "Hardline" },
      { fr: "Haute alerte", en: "High Alert" },
      { fr: "Persistance", en: "Persistence" },
      { fr: "Soutien d’unité", en: "Unit Support" },
      { fr: "Expert en démolition", en: "Demo Expert", note: "23 janvier 2026." },
      { fr: "Éclats", en: "Shrapnel", note: "30 avril 2026." },
    ],
  },
  {
    id: "jokers",
    cat: "jokers",
    title: "Jokers",
    tone: "ban",
    intro: "Tous les jokers sont interdits. Aucune exception.",
    items: [{ fr: "Tous les jokers", en: "All Wildcards" }],
  },
  {
    id: "skills",
    cat: "competences",
    title: "Compétences d’opérateur autorisées",
    tone: "allow",
    intro: "Tout ce qui n’est pas dans cette liste est interdit. Deux joueurs vivants de la même équipe ne peuvent pas porter la même compétence, même sans l’activer.",
    items: [
      { fr: "Annihilateur", en: "Annihilator", note: "Revolver à un coup, forte pénétration." },
      { fr: "Griffe", en: "Claw", note: "Charge de mêlée." },
      { fr: "Machine de la mort", en: "Death Machine", note: "Minigun temporaire." },
      { fr: "Égaliseur", en: "Equalizer", note: "Armes de poing lourdes." },
      { fr: "Pics de gravité", en: "Gravity Spikes", note: "Onde de choc au sol, idéal en intérieur." },
      { fr: "Canon vortex", en: "Gravity Vortex Gun", note: "Tir qui attire la zone." },
      { fr: "Purificateur", en: "Purifier", note: "Lance-flammes courte portée." },
      { fr: "Sparrow", en: "Sparrow", note: "Arc à projectiles." },
      { fr: "Tempête", en: "Tempest", note: "Décharges qui se chaînent." },
      { fr: "Machine de guerre", en: "War Machine", note: "Lance-grenades." },
    ],
  },
  {
    id: "streaks",
    cat: "series",
    title: "Séries de points autorisées",
    tone: "allow",
    intro: "Seules ces trois séries peuvent être équipées. Toutes les autres sont interdites.",
    items: [
      { fr: "Drone traqueur", en: "Hunter Killer Drone" },
      { fr: "Missile prédateur", en: "Predator Missile" },
      { fr: "IEM", en: "EMP" },
    ],
  },
  {
    id: "skins",
    cat: "cosmetiques",
    title: "Cosmétiques restreints",
    tone: "ban",
    intro: "Valable pour le split d’été, le split d’automne et les finales du championnat du monde 2026. Pas de délai de 21 jours sur les cosmétiques : le staff annonce les restrictions de chaque étape.",
    items: [
      { fr: "Skins d’équipement létal et tactique" },
      { fr: "Tous les skins légendaires d’équipement" },
      { fr: "Toutes les emotes", note: "Interdites à tout moment d’un match." },
      { fr: "Cosmic Silverback" },
      { fr: "Death Angel Alice — Trench" },
      { fr: "Death Angel Alice — Shrouded Maiden" },
      { fr: "Florence — Night Terror" },
      { fr: "Golem — Everglade" },
      { fr: "Grinch — Night Fang" },
      { fr: "Grinch — Wreath Havoc" },
      { fr: "Grinch — The Lionheart" },
      { fr: "Roze — Murk" },
      { fr: "Roze — Rook" },
      { fr: "Zombie — Wicht Warden" },
    ],
  },
  {
    id: "rep-let",
    cat: "reperes",
    title: "Létales souvent jouables",
    tone: "note",
    intro: "Repère de révision, pas une deuxième liste officielle. Est jouable ce qui n’est pas interdit, et qui a plus de 21 jours en jeu.",
    items: [
      { fr: "Grenade à fragmentation", en: "Frag Grenade" },
      { fr: "Grenade collante", en: "Sticky Grenade" },
      { fr: "Hache de combat", en: "Combat Axe" },
    ],
  },
  {
    id: "rep-tac",
    cat: "reperes",
    title: "Tactiques souvent jouables",
    tone: "note",
    intro: "Même règle : absentes de la liste interdite, et disponibles depuis plus de 21 jours.",
    items: [
      { fr: "Grenade flash", en: "Flashbang" },
      { fr: "Grenade commotion", en: "Concussion" },
      { fr: "Fumigène", en: "Smoke Grenade" },
      { fr: "Grenade IEM", en: "EMP Grenade" },
      { fr: "Système trophée", en: "Trophy System" },
    ],
  },
  {
    id: "rep-perks",
    cat: "reperes",
    title: "Atouts souvent jouables",
    tone: "note",
    intro: "Aide-mémoire des atouts absents de la liste interdite. Si un atout n’y figure pas et n’est pas nouveau, il est autorisé. L’entraînement à la survie a été retiré des restrictions le 30 avril 2026.",
    items: [
      { fr: "Légèreté", en: "Lightweight", note: "Rouge" },
      { fr: "Gilet pare-éclats", en: "Flak Jacket", note: "Rouge" },
      { fr: "Rôdeur", en: "Skulker", note: "Rouge" },
      { fr: "Agile", en: "Agile", note: "Rouge" },
      { fr: "Récupération rapide", en: "Fast Recover", note: "Rouge" },
      { fr: "Impavide", en: "Dauntless", note: "Rouge" },
      { fr: "Entraînement à la survie", en: "Survival Training", note: "Rouge · de nouveau autorisé" },
      { fr: "Résistance", en: "Toughness", note: "Vert" },
      { fr: "Fantôme", en: "Ghost", note: "Vert" },
      { fr: "Sang-froid", en: "Cold-Blooded", note: "Vert" },
      { fr: "Câblé", en: "Hard Wired", note: "Vert" },
      { fr: "Tête brûlée", en: "Gung-Ho", note: "Vert" },
      { fr: "Silence mortel", en: "Dead Silence", note: "Bleu" },
      { fr: "Masque tactique", en: "Tactical Mask", note: "Bleu" },
    ],
  },
];

export const journal = [
  {
    date: "24 septembre 2026",
    text: "Static HV ajoutée aux armes interdites : aide à la visée excessive.",
  },
  {
    date: "1er septembre 2026",
    text: "Armes ajoutées pour la même raison : .50 GS, MW11, FSS Hurricane, Sten, M21 EBR. Stabilisateurs de glissade interdits. Tir semi-auto du Cronen Squall interdit. Si l’aide à la visée redescend à un niveau compétitif, ces armes pourront revenir.",
  },
  {
    date: "9 juin 2026",
    text: "R9-0 ajoutée aux restrictions.",
  },
  {
    date: "30 avril 2026",
    text: "Entraînement à la survie retiré des restrictions. Accessoires ajoutés sur QQ9, Type 63, LAG 53 et .50 GS. Éclats, charge perforante, charge flash et leurre gonflable interdits.",
  },
  {
    date: "23 janvier 2026",
    text: "Nouveau pool de cartes. Recherche et destruction passe à 9 manches. Les rôles lourds et tireur sont séparés : sniper, marksman, pompe et FM, chacun une fois. SO14, expert en démolition et entraînement à la survie ajoutés. Les silencieux ne sont pas restreints. Contrôle reste le troisième mode.",
  },
];
