import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Search, r as Printer } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B9Wqdegy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		id: "accueil",
		label: "Accueil"
	},
	{
		id: "reglages",
		label: "Réglages"
	},
	{
		id: "cartes",
		label: "Cartes"
	},
	{
		id: "formats",
		label: "Formats"
	},
	{
		id: "roles",
		label: "Rôles"
	},
	{
		id: "arsenal",
		label: "Arsenal"
	},
	{
		id: "journal",
		label: "Journal"
	}
];
var modeLabel = {
	hp: "Point stratégique",
	snd: "Recherche et destruction",
	ctrl: "Contrôle"
};
var settings = [
	{
		id: "hp",
		fr: "Point stratégique",
		en: "Hardpoint",
		rows: [
			{
				label: "Score de manche",
				value: "250"
			},
			{
				label: "Temps limite",
				value: "600 s"
			},
			{
				label: "Spectateurs",
				value: "N/A"
			},
			{
				label: "Mot de passe",
				value: "N/A"
			},
			{
				label: "Invitations",
				value: "Oui"
			}
		]
	},
	{
		id: "snd",
		fr: "Recherche et destruction",
		en: "Search & Destroy",
		rows: [
			{
				label: "Manches à gagner",
				value: "9"
			},
			{
				label: "Temps de manche",
				value: "120 s"
			},
			{
				label: "Prolongation",
				value: "Oui"
			},
			{
				label: "Plafond de prolongation",
				value: "20"
			},
			{
				label: "Spectateurs",
				value: "N/A"
			},
			{
				label: "Mot de passe",
				value: "N/A"
			},
			{
				label: "Invitations",
				value: "Oui"
			}
		]
	},
	{
		id: "ctrl",
		fr: "Contrôle",
		en: "Control",
		rows: [
			{
				label: "Score de manche",
				value: "3"
			},
			{
				label: "Temps de manche",
				value: "90 s"
			},
			{
				label: "Spectateurs",
				value: "N/A"
			},
			{
				label: "Mot de passe",
				value: "N/A"
			},
			{
				label: "Invitations",
				value: "Oui"
			}
		]
	}
];
var maps = [
	{
		name: "Summit",
		mode: "hp",
		image: "/codex/maps/summit.jpg",
		line: "Crête, neige, bunkers de béton."
	},
	{
		name: "Hacienda",
		mode: "hp",
		image: "/codex/maps/hacienda.jpg",
		line: "Cour, arches, fontaine sèche."
	},
	{
		name: "Combine",
		mode: "hp",
		image: "/codex/maps/combine.jpg",
		line: "Silos, passerelles, poussière."
	},
	{
		name: "Takeoff",
		mode: "hp",
		image: "/codex/maps/takeoff.jpg",
		line: "Tarmac, terminal, tour."
	},
	{
		name: "Arsenal",
		mode: "hp",
		image: "/codex/maps/arsenal.jpg",
		line: "Entrepôt, cages, caisses."
	},
	{
		name: "Tunisia",
		mode: "snd",
		image: "/codex/maps/tunisia.jpg",
		line: "Murs ocres, escaliers, mer."
	},
	{
		name: "Firing Range",
		mode: "snd",
		image: "/codex/maps/firing-range.jpg",
		line: "Couloirs de stand, merlons."
	},
	{
		name: "Coastal",
		mode: "snd",
		image: "/codex/maps/coastal.jpg",
		line: "Terrasses blanches, falaise."
	},
	{
		name: "Slums",
		mode: "snd",
		plate: "plate-b",
		line: "Ruelles serrées, étages bas."
	},
	{
		name: "Meltdown",
		mode: "snd",
		plate: "plate-c",
		line: "Tours, vapeur, coursives."
	},
	{
		name: "Raid",
		mode: "ctrl",
		plate: "plate",
		line: "Villa, bassin, escaliers."
	},
	{
		name: "Standoff",
		mode: "ctrl",
		plate: "plate-b",
		line: "Rue large, façades face à face."
	},
	{
		name: "Crossroads Strike",
		mode: "ctrl",
		plate: "plate-c",
		line: "Quatre routes, village croisé."
	}
];
var bo5Slots = [
	{
		n: "01",
		mode: "hp",
		fr: "Point stratégique",
		pick: "Carte choisie par l’équipe 1",
		side: "Côté : équipe 2"
	},
	{
		n: "02",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Carte choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "03",
		mode: "ctrl",
		fr: "Contrôle",
		pick: "Carte restante du pool",
		side: "Côté : équipe 1"
	},
	{
		n: "04",
		mode: "hp",
		fr: "Point stratégique",
		pick: "Carte choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "05",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Carte choisie par l’équipe 1",
		side: "Côté : équipe 2"
	}
];
var bo5Phases = [
	{
		title: "Phase Point stratégique",
		mode: "hp",
		steps: [
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte du pool Point stratégique."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte du pool Point stratégique."
			},
			{
				team: "1",
				verb: "Choisit",
				text: "La carte de la manche 1. L’équipe 2 prend le côté de départ."
			},
			{
				team: "2",
				verb: "Choisit",
				text: "La carte de la manche 4. L’équipe 1 prend le côté de départ."
			}
		]
	},
	{
		title: "Phase Recherche et destruction",
		mode: "snd",
		steps: [
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte du pool Recherche et destruction."
			},
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte du pool Recherche et destruction."
			},
			{
				team: "2",
				verb: "Choisit",
				text: "La carte de la manche 2. L’équipe 1 prend le côté de départ."
			},
			{
				team: "1",
				verb: "Choisit",
				text: "La carte de la manche 5. L’équipe 2 prend le côté de départ."
			}
		]
	},
	{
		title: "Phase Contrôle",
		mode: "ctrl",
		steps: [
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte du pool Contrôle."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte du pool Contrôle."
			},
			{
				team: "1",
				verb: "Côté",
				text: "La carte restante est la manche 3. L’équipe 1 prend le côté de départ."
			}
		]
	}
];
var bo3Slots = [
	{
		n: "01",
		mode: "hp",
		fr: "Point stratégique",
		pick: "Dernière carte du pool",
		side: "Côté : équipe 1"
	},
	{
		n: "02",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Dernière carte du pool",
		side: "Côté : équipe 2"
	},
	{
		n: "03",
		mode: "ctrl",
		fr: "Contrôle",
		pick: "Dernière carte du pool",
		side: "Côté : équipe 1"
	}
];
var bo3Phases = [
	{
		title: "Phase Point stratégique",
		mode: "hp",
		steps: [
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte du pool Point stratégique."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte du pool Point stratégique."
			},
			{
				team: "1",
				verb: "Bannit",
				text: "Une deuxième carte du pool."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une deuxième carte du pool."
			},
			{
				team: "1",
				verb: "Reste",
				text: "La carte restante est la manche 1. L’équipe 1 prend le côté."
			}
		]
	},
	{
		title: "Phase Recherche et destruction",
		mode: "snd",
		steps: [
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte du pool Recherche et destruction."
			},
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte du pool Recherche et destruction."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une deuxième carte du pool."
			},
			{
				team: "1",
				verb: "Bannit",
				text: "Une deuxième carte du pool."
			},
			{
				team: "2",
				verb: "Reste",
				text: "La carte restante est la manche 2. L’équipe 2 prend le côté."
			}
		]
	},
	{
		title: "Phase Contrôle",
		mode: "ctrl",
		steps: [
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte du pool Contrôle."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte du pool Contrôle."
			},
			{
				team: "1",
				verb: "Reste",
				text: "La carte restante est la manche 3. L’équipe 1 prend le côté."
			}
		]
	}
];
var bo7Slots = [
	{
		n: "01",
		mode: "hp",
		fr: "Point stratégique",
		pick: "Choisie par l’équipe 1",
		side: "Côté : équipe 2"
	},
	{
		n: "02",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "03",
		mode: "ctrl",
		fr: "Contrôle",
		pick: "Choisie par l’équipe 1",
		side: "Côté : équipe 2"
	},
	{
		n: "04",
		mode: "hp",
		fr: "Point stratégique",
		pick: "Choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "05",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Choisie par l’équipe 1",
		side: "Côté : équipe 2"
	},
	{
		n: "06",
		mode: "ctrl",
		fr: "Contrôle",
		pick: "Choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "07",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Carte restante du pool",
		side: "Côté : équipe 2"
	}
];
var bo7Phases = [
	{
		title: "Point stratégique",
		mode: "hp",
		steps: [
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte Point stratégique."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte Point stratégique."
			},
			{
				team: "1",
				verb: "Choisit",
				text: "Manche 1. Côté : équipe 2."
			},
			{
				team: "2",
				verb: "Choisit",
				text: "Manche 4. Côté : équipe 1."
			}
		]
	},
	{
		title: "Recherche et destruction",
		mode: "snd",
		steps: [
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte Recherche et destruction."
			},
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte Recherche et destruction."
			},
			{
				team: "2",
				verb: "Choisit",
				text: "Manche 2. Côté : équipe 1."
			},
			{
				team: "1",
				verb: "Choisit",
				text: "Manche 5. Côté : équipe 2."
			},
			{
				team: "2",
				verb: "Reste",
				text: "La carte restante est la manche 7. Côté : équipe 2."
			}
		]
	},
	{
		title: "Contrôle",
		mode: "ctrl",
		steps: [{
			team: "1",
			verb: "Choisit",
			text: "Manche 3. Côté : équipe 2."
		}, {
			team: "2",
			verb: "Choisit",
			text: "Manche 6. Côté : équipe 1."
		}]
	}
];
var finalSlots = [
	{
		n: "01",
		mode: "hp",
		fr: "Point stratégique",
		pick: "Choisie par l’équipe 1",
		side: "Côté : équipe 2"
	},
	{
		n: "02",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "03",
		mode: "ctrl",
		fr: "Contrôle",
		pick: "Choisie par l’équipe 1",
		side: "Côté : équipe 2"
	},
	{
		n: "04",
		mode: "hp",
		fr: "Point stratégique",
		pick: "Choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "05",
		mode: "ctrl",
		fr: "Contrôle",
		pick: "Choisie par l’équipe 2",
		side: "Côté : équipe 1"
	},
	{
		n: "06",
		mode: "snd",
		fr: "Recherche et destruction",
		pick: "Choisie par l’équipe 1",
		side: "Côté : équipe 2"
	}
];
var finalPhases = [
	{
		title: "Point stratégique",
		mode: "hp",
		steps: [
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte Point stratégique."
			},
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte Point stratégique."
			},
			{
				team: "1",
				verb: "Choisit",
				text: "Manche 1. Côté : équipe 2."
			},
			{
				team: "2",
				verb: "Choisit",
				text: "Manche 4. Côté : équipe 1."
			}
		]
	},
	{
		title: "Recherche et destruction",
		mode: "snd",
		steps: [
			{
				team: "2",
				verb: "Bannit",
				text: "Une carte Recherche et destruction."
			},
			{
				team: "1",
				verb: "Bannit",
				text: "Une carte Recherche et destruction."
			},
			{
				team: "2",
				verb: "Choisit",
				text: "Manche 2. Côté : équipe 1."
			},
			{
				team: "1",
				verb: "Choisit",
				text: "Manche 6. Côté : équipe 2."
			}
		]
	},
	{
		title: "Contrôle",
		mode: "ctrl",
		steps: [{
			team: "1",
			verb: "Choisit",
			text: "Manche 3. Côté : équipe 2."
		}, {
			team: "2",
			verb: "Choisit",
			text: "Manche 5. Côté : équipe 1."
		}]
	}
];
var roles = [
	{
		quota: "3",
		short: "FA",
		fr: "Fusils d’assaut",
		en: "Assault Rifles",
		rule: "Autorisé à équiper la classe fusil d’assaut."
	},
	{
		quota: "3",
		short: "SMG",
		fr: "Mitraillettes",
		en: "Sub-Machine Guns",
		rule: "Autorisé à équiper la classe mitraillette."
	},
	{
		quota: "1",
		short: "FM",
		fr: "Fusils-mitrailleurs",
		en: "Light Machine Guns",
		rule: "Autorisé à équiper la classe fusil-mitrailleur."
	},
	{
		quota: "1",
		short: "POMPE",
		fr: "Fusils à pompe",
		en: "Shotgun",
		rule: "Autorisé à équiper la classe fusil à pompe."
	},
	{
		quota: "1",
		short: "SNIPER",
		fr: "Précision",
		en: "Sniper",
		rule: "Autorisé à équiper la classe fusil de précision."
	},
	{
		quota: "1",
		short: "MARKS",
		fr: "Tireur",
		en: "Marksman",
		rule: "Autorisé à équiper la classe fusil de tireur d’élite."
	}
];
var roster = [
	{
		player: "Joueur 1",
		a: "FA",
		b: "SMG"
	},
	{
		player: "Joueur 2",
		a: "SMG",
		b: "Pompe"
	},
	{
		player: "Joueur 3",
		a: "FA",
		b: "FM"
	},
	{
		player: "Joueur 4",
		a: "FA",
		b: "Sniper"
	},
	{
		player: "Joueur 5",
		a: "SMG",
		b: "Marksman"
	}
];
var poolChips = [
	"FA",
	"FA",
	"FA",
	"SMG",
	"SMG",
	"SMG",
	"FM",
	"Pompe",
	"Sniper",
	"Marksman"
];
var cats = [
	{
		id: "tout",
		label: "Tout"
	},
	{
		id: "armes",
		label: "Armes"
	},
	{
		id: "accessoires",
		label: "Accessoires"
	},
	{
		id: "equipement",
		label: "Équipement"
	},
	{
		id: "atouts",
		label: "Atouts"
	},
	{
		id: "competences",
		label: "Compétences"
	},
	{
		id: "series",
		label: "Séries"
	},
	{
		id: "jokers",
		label: "Jokers"
	},
	{
		id: "cosmetiques",
		label: "Skins"
	},
	{
		id: "reperes",
		label: "Repères"
	}
];
var groups = [
	{
		id: "pompes",
		cat: "armes",
		title: "Fusils à pompe interdits",
		tone: "ban",
		intro: "Le rôle pompe existe. Seules ces deux armes sont bannies. Les autres pompes restent jouables, hors accessoires listés.",
		items: [{ fr: "Argus" }, {
			fr: "R9-0",
			note: "Ajoutée le 9 juin 2026."
		}]
	},
	{
		id: "snipers-ban",
		cat: "armes",
		title: "Précision interdite",
		tone: "ban",
		intro: "DL Q33, Locus, Arctic .50, LW3 Tundra et les autres précisions absentes de cette liste ne sont pas des armes bannies. Certains de leurs accessoires le sont.",
		items: [
			{
				fr: "M21 EBR",
				note: "Aide à la visée trop forte, 1er septembre 2026."
			},
			{ fr: "NA-45" },
			{
				fr: "SO14",
				note: "Ajoutée le 23 janvier 2026."
			},
			{ fr: "SVD" },
			{ fr: "XPR" }
		]
	},
	{
		id: "smg-ban",
		cat: "armes",
		title: "Mitraillettes interdites",
		tone: "ban",
		items: [
			{
				fr: "FSS Hurricane",
				note: "1er septembre 2026."
			},
			{
				fr: "Static HV",
				note: "24 septembre 2026, aide à la visée excessive."
			},
			{
				fr: "Sten",
				note: "1er septembre 2026."
			}
		]
	},
	{
		id: "lanceurs",
		cat: "armes",
		title: "Lanceurs interdits",
		tone: "ban",
		items: [
			{ fr: "D13 Sector" },
			{ fr: "FHJ-18" },
			{ fr: "SMRS" },
			{ fr: "Thumper" }
		]
	},
	{
		id: "pistolets",
		cat: "armes",
		title: "Pistolets interdits",
		tone: "ban",
		intro: "Le pistolet-mitrailleur n’est pas banni en tant qu’arme. Un de ses canons l’est, plus bas.",
		items: [
			{ fr: ".50 GS" },
			{ fr: "MW11" },
			{ fr: "Shorty" }
		]
	},
	{
		id: "attach-global",
		cat: "accessoires",
		title: "Accessoires — toutes les armes",
		tone: "ban",
		items: [
			{
				fr: "Akimbo",
				en: "Atout d’arme"
			},
			{
				fr: "Disabled",
				en: "Atout d’arme"
			},
			{
				fr: "Munitions thermite, souffle du dragon, explosives et incendiaires",
				en: "Thermite, Dragon’s Breath, Explosive, Incendiary"
			},
			{
				fr: "Munitions slug sur tous les fusils à pompe",
				en: "Slug Ammo"
			}
		]
	},
	{
		id: "attach-named",
		cat: "accessoires",
		title: "Accessoires nommés",
		tone: "ban",
		intro: "Les noms d’accessoires restent ceux de l’armurerie, pour les retrouver au caractère près. Les silencieux ne sont pas restreints.",
		items: [
			{
				fr: "3-Line Rifle",
				note: "Canon EMPRESS 514MM F01 · Bipod · Crosse KOVALEVSKAYA S01"
			},
			{
				fr: ".50 GS",
				note: "Lightweight Trigger · Match Grade Trigger"
			},
			{
				fr: "AS VAL",
				note: "Chargeur 15 Round FMG Mag"
			},
			{
				fr: "BP-50",
				note: "Leroy 438mm · Recoil Booster"
			},
			{
				fr: "CR AMAX",
				note: "M67 Ammo"
			},
			{
				fr: "Cronen Squall",
				note: "Semi Automatic Fire — 1er septembre 2026"
			},
			{
				fr: "Arbalète",
				en: "Crossbow",
				note: "Carreaux thermite, gaz et grenade collante"
			},
			{
				fr: "CX9",
				note: "9mm Hollow Point Rounds"
			},
			{
				fr: "DL Q33",
				en: "DLQ",
				note: "Concussion Ammo"
			},
			{
				fr: "DR-H",
				en: "DRH",
				note: "OTM Mag"
			},
			{
				fr: "Hades",
				note: "Heartseeker"
			},
			{
				fr: "HS0405",
				note: "Thunder Rounds"
			},
			{
				fr: "HVK",
				note: "Large Caliber Mag"
			},
			{
				fr: "LAG 53",
				note: "Canon 13.0” OSW Para Barrel"
			},
			{
				fr: "M4",
				note: "Lanceur sous le canon"
			},
			{
				fr: "Pistolet-mitrailleur",
				en: "Machine Pistol",
				note: "Canon VDD 35MM Short Barrel"
			},
			{
				fr: "MG42",
				note: "KRAUSNICK 355MM Rapid · Tambours 6.5 ARISAKA 125 · Recoil Booster"
			},
			{
				fr: "Oden",
				note: "OWC Ranger Barrel · OWC Marksman Barrel"
			},
			{
				fr: "QQ9",
				note: "10MM 30 Round Reload"
			},
			{
				fr: "RAM-7",
				en: "Ram7",
				note: "FORGE TAC Eclipse Barrel"
			},
			{
				fr: "RPD",
				note: "Infinite Ammo"
			},
			{
				fr: "SKS",
				note: "Tactical Foregrip A · Granulated Grip Tape"
			},
			{
				fr: "Type 19",
				note: "Hi-Accuracy Sniper Ammo"
			},
			{
				fr: "Type 63",
				note: "Airborne Elastic Wrap Grip · Firm Grip Tape · canons 16.4” Rapid Fire, 16.4” Titanium, 18.3” Strike Team"
			},
			{
				fr: "LW3 Tundra",
				en: "Tundra",
				note: "26.5” Hammer Forged Barrel · 28.2” Tiger Team Barrel"
			},
			{
				fr: "USS 9",
				en: "USS-9",
				note: "Carbine Pro Barrel · 16.6” Factory Carbine Barrel · 13.1” First Responder Barrel · chargeurs .41 AE 32 coups"
			}
		]
	},
	{
		id: "letales",
		cat: "equipement",
		title: "Létales interdites",
		tone: "ban",
		items: [
			{
				fr: "C4",
				en: "C4"
			},
			{
				fr: "Grenade à sous-munitions",
				en: "Cluster Grenade"
			},
			{
				fr: "Grenade de contact",
				en: "Contact Grenade"
			},
			{
				fr: "Charge perforante",
				en: "Drill Charge",
				note: "30 avril 2026."
			},
			{
				fr: "Cocktail Molotov",
				en: "Molotov Cocktail"
			},
			{
				fr: "Thermite",
				en: "Thermite"
			},
			{
				fr: "Mine bondissante",
				en: "Trip Mine"
			}
		]
	},
	{
		id: "tactiques",
		cat: "equipement",
		title: "Tactiques interdites",
		tone: "ban",
		items: [
			{
				fr: "Bombe cryo",
				en: "Cryo Bomb"
			},
			{
				fr: "Grenade leurre",
				en: "Decoy Grenade"
			},
			{
				fr: "Grenade extincteur",
				en: "Douser Grenade"
			},
			{
				fr: "Grenade écho",
				en: "Echo Grenade"
			},
			{
				fr: "Charge flash",
				en: "Flash Charge",
				note: "30 avril 2026."
			},
			{
				fr: "Drone flash",
				en: "Flash Drone"
			},
			{
				fr: "Grenades à gaz",
				en: "Gas Grenades"
			},
			{
				fr: "Capteur cardiaque",
				en: "Heartbeat Sensor"
			},
			{
				fr: "Leurre gonflable",
				en: "Inflatable Decoy",
				note: "30 avril 2026."
			},
			{
				fr: "Stimulant",
				en: "Stim Shot"
			},
			{
				fr: "Sphère tempête",
				en: "Storm Ball"
			},
			{
				fr: "Capteur de passage",
				en: "Trip Sensor"
			}
		]
	},
	{
		id: "atouts-rouge",
		cat: "atouts",
		title: "Atouts rouges interdits",
		tone: "ban",
		items: [
			{
				fr: "Martyre",
				en: "Martyrdom"
			},
			{
				fr: "Surcadence",
				en: "Overclock"
			},
			{
				fr: "Repérage",
				en: "Pinpoint"
			},
			{
				fr: "Réapprovisionnement",
				en: "Restock"
			},
			{
				fr: "Stabilisateurs de glissade",
				en: "Slide Stabilizers",
				note: "1er septembre 2026."
			},
			{
				fr: "Tacticien",
				en: "Tactician"
			}
		]
	},
	{
		id: "atouts-vert",
		cat: "atouts",
		title: "Atouts verts interdits",
		tone: "ban",
		items: [
			{
				fr: "Soin rapide",
				en: "Quick Fix"
			},
			{
				fr: "Reconnaissance",
				en: "Recon"
			},
			{
				fr: "Pisteur",
				en: "Tracker"
			},
			{
				fr: "Vautour",
				en: "Vulture"
			}
		]
	},
	{
		id: "atouts-bleu",
		cat: "atouts",
		title: "Atouts bleus interdits",
		tone: "ban",
		items: [
			{
				fr: "Alerte",
				en: "Alert"
			},
			{
				fr: "Assassin",
				en: "Assassin"
			},
			{
				fr: "Ingénieur",
				en: "Engineer"
			},
			{
				fr: "Ligne dure",
				en: "Hardline"
			},
			{
				fr: "Haute alerte",
				en: "High Alert"
			},
			{
				fr: "Persistance",
				en: "Persistence"
			},
			{
				fr: "Soutien d’unité",
				en: "Unit Support"
			},
			{
				fr: "Expert en démolition",
				en: "Demo Expert",
				note: "23 janvier 2026."
			},
			{
				fr: "Éclats",
				en: "Shrapnel",
				note: "30 avril 2026."
			}
		]
	},
	{
		id: "jokers",
		cat: "jokers",
		title: "Jokers",
		tone: "ban",
		intro: "Tous les jokers sont interdits. Aucune exception.",
		items: [{
			fr: "Tous les jokers",
			en: "All Wildcards"
		}]
	},
	{
		id: "skills",
		cat: "competences",
		title: "Compétences d’opérateur autorisées",
		tone: "allow",
		intro: "Tout ce qui n’est pas dans cette liste est interdit. Deux joueurs vivants de la même équipe ne peuvent pas porter la même compétence, même sans l’activer.",
		items: [
			{
				fr: "Annihilateur",
				en: "Annihilator",
				note: "Revolver à un coup, forte pénétration."
			},
			{
				fr: "Griffe",
				en: "Claw",
				note: "Charge de mêlée."
			},
			{
				fr: "Machine de la mort",
				en: "Death Machine",
				note: "Minigun temporaire."
			},
			{
				fr: "Égaliseur",
				en: "Equalizer",
				note: "Armes de poing lourdes."
			},
			{
				fr: "Pics de gravité",
				en: "Gravity Spikes",
				note: "Onde de choc au sol, idéal en intérieur."
			},
			{
				fr: "Canon vortex",
				en: "Gravity Vortex Gun",
				note: "Tir qui attire la zone."
			},
			{
				fr: "Purificateur",
				en: "Purifier",
				note: "Lance-flammes courte portée."
			},
			{
				fr: "Sparrow",
				en: "Sparrow",
				note: "Arc à projectiles."
			},
			{
				fr: "Tempête",
				en: "Tempest",
				note: "Décharges qui se chaînent."
			},
			{
				fr: "Machine de guerre",
				en: "War Machine",
				note: "Lance-grenades."
			}
		]
	},
	{
		id: "streaks",
		cat: "series",
		title: "Séries de points autorisées",
		tone: "allow",
		intro: "Seules ces trois séries peuvent être équipées. Toutes les autres sont interdites.",
		items: [
			{
				fr: "Drone traqueur",
				en: "Hunter Killer Drone"
			},
			{
				fr: "Missile prédateur",
				en: "Predator Missile"
			},
			{
				fr: "IEM",
				en: "EMP"
			}
		]
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
			{
				fr: "Toutes les emotes",
				note: "Interdites à tout moment d’un match."
			},
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
			{ fr: "Zombie — Wicht Warden" }
		]
	},
	{
		id: "rep-let",
		cat: "reperes",
		title: "Létales souvent jouables",
		tone: "note",
		intro: "Repère de révision, pas une deuxième liste officielle. Est jouable ce qui n’est pas interdit, et qui a plus de 21 jours en jeu.",
		items: [
			{
				fr: "Grenade à fragmentation",
				en: "Frag Grenade"
			},
			{
				fr: "Grenade collante",
				en: "Sticky Grenade"
			},
			{
				fr: "Hache de combat",
				en: "Combat Axe"
			}
		]
	},
	{
		id: "rep-tac",
		cat: "reperes",
		title: "Tactiques souvent jouables",
		tone: "note",
		intro: "Même règle : absentes de la liste interdite, et disponibles depuis plus de 21 jours.",
		items: [
			{
				fr: "Grenade flash",
				en: "Flashbang"
			},
			{
				fr: "Grenade commotion",
				en: "Concussion"
			},
			{
				fr: "Fumigène",
				en: "Smoke Grenade"
			},
			{
				fr: "Grenade IEM",
				en: "EMP Grenade"
			},
			{
				fr: "Système trophée",
				en: "Trophy System"
			}
		]
	},
	{
		id: "rep-perks",
		cat: "reperes",
		title: "Atouts souvent jouables",
		tone: "note",
		intro: "Aide-mémoire des atouts absents de la liste interdite. Si un atout n’y figure pas et n’est pas nouveau, il est autorisé. L’entraînement à la survie a été retiré des restrictions le 30 avril 2026.",
		items: [
			{
				fr: "Légèreté",
				en: "Lightweight",
				note: "Rouge"
			},
			{
				fr: "Gilet pare-éclats",
				en: "Flak Jacket",
				note: "Rouge"
			},
			{
				fr: "Rôdeur",
				en: "Skulker",
				note: "Rouge"
			},
			{
				fr: "Agile",
				en: "Agile",
				note: "Rouge"
			},
			{
				fr: "Récupération rapide",
				en: "Fast Recover",
				note: "Rouge"
			},
			{
				fr: "Impavide",
				en: "Dauntless",
				note: "Rouge"
			},
			{
				fr: "Entraînement à la survie",
				en: "Survival Training",
				note: "Rouge · de nouveau autorisé"
			},
			{
				fr: "Résistance",
				en: "Toughness",
				note: "Vert"
			},
			{
				fr: "Fantôme",
				en: "Ghost",
				note: "Vert"
			},
			{
				fr: "Sang-froid",
				en: "Cold-Blooded",
				note: "Vert"
			},
			{
				fr: "Câblé",
				en: "Hard Wired",
				note: "Vert"
			},
			{
				fr: "Tête brûlée",
				en: "Gung-Ho",
				note: "Vert"
			},
			{
				fr: "Silence mortel",
				en: "Dead Silence",
				note: "Bleu"
			},
			{
				fr: "Masque tactique",
				en: "Tactical Mask",
				note: "Bleu"
			}
		]
	}
];
var journal = [
	{
		date: "24 septembre 2026",
		text: "Static HV ajoutée aux armes interdites : aide à la visée excessive."
	},
	{
		date: "1er septembre 2026",
		text: "Armes ajoutées pour la même raison : .50 GS, MW11, FSS Hurricane, Sten, M21 EBR. Stabilisateurs de glissade interdits. Tir semi-auto du Cronen Squall interdit. Si l’aide à la visée redescend à un niveau compétitif, ces armes pourront revenir."
	},
	{
		date: "9 juin 2026",
		text: "R9-0 ajoutée aux restrictions."
	},
	{
		date: "30 avril 2026",
		text: "Entraînement à la survie retiré des restrictions. Accessoires ajoutés sur QQ9, Type 63, LAG 53 et .50 GS. Éclats, charge perforante, charge flash et leurre gonflable interdits."
	},
	{
		date: "23 janvier 2026",
		text: "Nouveau pool de cartes. Recherche et destruction passe à 9 manches. Les rôles lourds et tireur sont séparés : sniper, marksman, pompe et FM, chacun une fois. SO14, expert en démolition et entraînement à la survie ajoutés. Les silencieux ne sont pas restreints. Contrôle reste le troisième mode."
	}
];
function printDossier() {
	document.querySelectorAll("details").forEach((node) => node.setAttribute("open", ""));
	window.print();
}
function Guide() {
	const [active, setActive] = (0, import_react.useState)("accueil");
	const [mode, setMode] = (0, import_react.useState)("tous");
	const [cat, setCat] = (0, import_react.useState)("tout");
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const nodes = nav.map((item) => document.getElementById(item.id)).filter((node) => Boolean(node));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [.15, .4]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	const needle = query.trim().toLowerCase();
	const visibleGroups = (0, import_react.useMemo)(() => groups.map((group) => {
		const catOk = cat === "tout" || group.cat === cat;
		const matched = group.items.filter((item) => {
			if (!needle) return true;
			return `${item.fr} ${item.en ?? ""} ${item.note ?? ""}`.toLowerCase().includes(needle);
		});
		return {
			...group,
			items: group.items,
			hidden: !catOk || matched.length === 0,
			matched
		};
	}), [cat, needle]);
	const shownMaps = maps;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-ink text-bone",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "no-print sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#accueil",
						className: "flex shrink-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/codex/crest.jpg",
							alt: "",
							className: "h-9 w-9 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker text-bone",
							children: "Noxius"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 gap-1 overflow-x-auto",
						"aria-label": "Sections du dossier",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${item.id}`,
							className: `kicker shrink-0 rounded-full px-3 py-2 ${active === item.id ? "bg-venom text-ink" : "text-mist"}`,
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: printDossier,
						className: "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-venom px-4 text-sm font-semibold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "PDF"
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "accueil",
				className: "relative min-h-[92svh] scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/codex/hero.jpg",
						alt: "Salle de briefing du clan Noxius, table de verre et emblème lumineux.",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 veil-hero" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-venom",
								children: "Clan Noxius · Saison 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "display-xl mt-3 max-w-4xl",
								children: [
									"Codex",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"esports"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg text-bone",
								children: "Le dossier de révision du clan. Cartes, réglages, Best of 5, Best of 3, rôles d’armes et tout ce qui est interdit — en français, à lire avant le veto."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#formats",
									className: "inline-flex min-h-11 items-center rounded-full bg-venom px-5 font-semibold text-ink",
									children: "Voir les formats"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#arsenal",
									className: "inline-flex min-h-11 items-center rounded-full border border-bone/30 px-5 font-semibold text-bone",
									children: "Arsenal interdit"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto -mt-10 grid max-w-6xl gap-3 px-4 sm:grid-cols-3",
				children: [
					["Ordre Bo5", "PS · RD · CTRL · PS · RD"],
					["Pool d’armes", "3 FA · 3 SMG · 1 de chaque autre"],
					["Compétence", "Une seule par équipe, tant qu’on est en vie"]
				].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "glass rounded-3xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-venom",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl uppercase leading-tight",
						children: body
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "reglages",
				className: "scroll-mt-24 px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							index: "01",
							kicker: "Salon privé",
							title: "Réglages de partie",
							text: "Le capitaine qui ouvre le salon aligne ces valeurs avant de lancer. Ce n’est pas un mode d’emploi d’hôte : seulement les chiffres à vérifier."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "stage mt-8 grid gap-4 lg:grid-cols-3",
							children: settings.map((setting) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass slab rounded-3xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-venom",
										children: setting.en
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-3xl uppercase leading-none",
										children: setting.fr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
										className: "mt-5 divide-y divide-line",
										children: setting.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-4 py-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-sm text-mist",
												children: row.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-display text-2xl text-venom",
												children: row.value
											})]
										}, row.label))
									})
								]
							}, setting.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-3xl text-sm text-mist",
							children: "Règle des 21 jours : toute arme, compétence, atout, équipement, série de points ou accessoire nouvellement sorti reste interdit jusqu’à exactement 21 jours après sa disponibilité mondiale. L’administration peut avancer ou reculer ce délai. En cas de doute, on demande avant de jouer."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cartes",
				className: "scroll-mt-24 px-4 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							index: "02",
							kicker: "Map pool",
							title: "Treize cartes, trois pools",
							text: "Après le stage 2 et jusqu’aux finales, on ne joue que ce pool. Une carte bannie ou choisie ne revient pas. Les noms de veto sont les noms anglais du jeu."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "no-print mt-6 flex gap-2 overflow-x-auto",
							children: [
								["tous", "Toutes"],
								["hp", "Point stratégique"],
								["snd", "Recherche et destruction"],
								["ctrl", "Contrôle"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": mode === id,
								onClick: () => setMode(id),
								className: `kicker min-h-11 shrink-0 rounded-full px-4 ${mode === id ? "bg-venom text-ink" : "glass text-bone"}`,
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: shownMaps.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `lift overflow-hidden rounded-3xl border border-line bg-panel ${mode !== "tous" && card.mode !== mode ? "filtered-out" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative frame-map",
									children: [
										card.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: card.image,
											alt: "",
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full w-full ${card.plate ?? "plate"}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 veil-card" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "kicker absolute top-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-venom",
											children: modeLabel[card.mode]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "absolute right-4 bottom-3 left-4 font-display text-4xl uppercase leading-none",
											children: card.name
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-4 py-3 text-sm text-mist",
									children: card.line
								})]
							}, card.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-3xl text-sm text-mist",
							children: "Les photos sont des études d’ambiance du clan, pas les minimaps officielles. Cinq cartes du pool Point stratégique, cinq en recherche et destruction, trois en contrôle. Chaque année : sept cartes gardées, trois qui changent de mode, trois nouvelles."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "formats",
				className: "scroll-mt-24 px-4 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							index: "03",
							kicker: "À lire, pas à simuler",
							title: "Best of 5 et Best of 3",
							text: "La tête de série la plus haute choisit d’être l’équipe 1 ou l’équipe 2, et elle héberge le salon. Le script ci-dessous est l’ordre exact du veto. Une carte sortie du pool ne revient pas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatBoard, {
							name: "Best of 5",
							note: "Split d’été, split d’automne, finales du championnat. Tous les matchs sauf la grande finale.",
							slots: bo5Slots,
							phases: bo5Phases
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatBoard, {
							name: "Best of 3",
							note: "Quatre bans puis la carte qui reste en point stratégique et en recherche. Deux bans en contrôle.",
							slots: bo3Slots,
							phases: bo3Phases
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "glass mt-6 rounded-3xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex min-h-11 items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "kicker text-venom",
										children: "Référence"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-display text-3xl uppercase",
										children: "Best of 7 et grande finale"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "kicker text-mist",
										children: "Ouvrir"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-sm text-mist",
									children: "Le Best of 7 simple existe dans le règlement. La grande finale est un Best of 7 avec une manche d’avantage pour l’équipe qui sort de la finale des gagnants : le veto ne désigne alors que les manches 1 à 6."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid gap-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatInner, {
										slots: bo7Slots,
										phases: bo7Phases
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatInner, {
										slots: finalSlots,
										phases: finalPhases
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "roles",
				className: "scroll-mt-24 px-4 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							index: "04",
							kicker: "Affichage seulement",
							title: "Six rôles, dix jetons",
							text: "Chaque joueur reçoit deux rôles différents. L’équipe possède son propre pool : les jetons ne se partagent pas avec l’adversaire. Les rôles ne s’appliquent ni aux armes secondaires, ni aux armes ramassées."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "stage mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass slab relative min-h-64 overflow-hidden rounded-3xl p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/codex/crest.jpg",
										alt: "",
										className: "pointer-events-none absolute -right-8 -bottom-10 h-44 w-44 object-cover opacity-25"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-7xl leading-none text-venom",
										children: role.quota
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker mt-3 text-mist",
										children: role.short
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-4xl uppercase leading-none",
										children: role.fr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-mist",
										children: role.en
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-4 text-sm",
										children: role.rule
									})
								]
							}, role.short))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 lg:grid-cols-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5 lg:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-venom",
										children: "Le pool d’une équipe"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-3xl uppercase",
										children: "Dix jetons"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-5 flex flex-wrap gap-2",
										children: poolChips.map((chip, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "rounded-full border border-venom/50 px-3 py-2 font-display text-lg tracking-wide text-venom",
											children: chip
										}, `${chip}-${index}`))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm text-mist",
										children: "L’équipe qui a annoncé ses compétences d’opérateur en second annonce ses rôles d’armes en premier. Si les rôles ne sont pas donnés à temps à l’administration, ceux de la série précédente s’appliquent."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-3xl p-5 lg:col-span-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-venom",
										children: "Exemple du règlement"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-3xl uppercase",
										children: "Comment ça se déclare"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-mist",
										children: "Modèle officiel. Rien à choisir ici : c’est la forme de l’annonce."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "mt-4 divide-y divide-line",
										children: roster.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-wrap items-center justify-between gap-3 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-xl uppercase",
												children: row.player
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-venom px-3 py-1 font-display text-ink",
													children: row.a
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full border border-bone/30 px-3 py-1 font-display",
													children: row.b
												})]
											})]
										}, row.player))
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "arsenal",
				className: "scroll-mt-24 px-4 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							index: "05",
							kicker: "Loadout",
							title: "Ce qui passe, ce qui tombe",
							text: "Jouer un objet de la liste interdite peut coûter la manche, le match, ou la place dans le tournoi. Filmez vos parties : c’est la preuve à fournir à un admin."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "glass rounded-3xl p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-venom",
										children: "Compétence"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm",
										children: "Deux coéquipiers ne portent pas la même compétence en même temps, même sans l’activer. On peut la changer en cours de carte si la règle reste respectée. Un mort en train de changer la sienne ne compte pas. Infraction : la carte est perdue."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "glass rounded-3xl p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-venom",
										children: "Séries"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm",
										children: "Seuls le drone traqueur, le missile prédateur et l’IEM sont équipables."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "glass rounded-3xl p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-venom",
										children: "Jokers"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm",
										children: "Aucun joker. Tous, sans exception."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "no-print mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "glass flex min-h-11 flex-1 items-center gap-2 rounded-full px-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										className: "h-4 w-4 text-mist",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Rechercher dans l’arsenal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: "Chercher une arme, un atout, un accessoire…",
										className: "w-full bg-transparent py-3 text-bone outline-none placeholder:text-mist"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "no-print mt-3 flex gap-2 overflow-x-auto pb-1",
							children: cats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": cat === item.id,
								onClick: () => setCat(item.id),
								className: `kicker min-h-11 shrink-0 rounded-full px-4 ${cat === item.id ? "bg-venom text-ink" : "glass text-bone"}`,
								children: item.label
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4",
							children: [visibleGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `glass rounded-3xl p-5 ${group.hidden ? "filtered-out" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-end justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl uppercase leading-none",
											children: group.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "kicker text-venom",
											children: group.tone === "allow" ? "Autorisé" : group.tone === "note" ? "Repère" : "Interdit"
										})]
									}),
									group.intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-3xl text-sm text-mist",
										children: group.intro
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 grid gap-2 sm:grid-cols-2",
										children: group.items.map((item) => {
											const hit = !needle || `${item.fr} ${item.en ?? ""} ${item.note ?? ""}`.toLowerCase().includes(needle);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: `rounded-2xl border border-line px-3 py-3 ${hit ? "" : "filtered-out"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-medium",
														children: item.fr
													}),
													item.en ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm text-mist",
														children: item.en
													}) : null,
													item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-venom",
														children: item.note
													}) : null
												]
											}, `${group.id}-${item.fr}-${item.note ?? ""}`);
										})
									})
								]
							}, group.id)), visibleGroups.every((group) => group.hidden) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "no-print text-mist",
								children: "Aucun objet ne correspond à cette recherche."
							}) : null]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "journal",
				className: "scroll-mt-24 px-4 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							index: "06",
							kicker: "Changelog",
							title: "Ce qui a bougé en 2026",
							text: "À relire quand un joueur jure que « l’année dernière c’était autorisé »."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 border-l border-line",
							children: journal.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative pb-8 pl-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 -left-1.5 h-3 w-3 rounded-full bg-venom" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-venom",
										children: entry.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-3xl",
										children: entry.text
									})
								]
							}, entry.date))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-4 border-t border-line pt-6 text-sm text-mist",
							children: "D’après les Esports Settings officiels Call of Duty: Mobile, journal arrêté au 24 septembre 2026. Les noms entre parenthèses ou en seconde ligne sont ceux de l’armurerie anglaise, pour coller au client. Noxius — dossier interne de révision."
						})
					]
				})
			})
		] })]
	});
}
function SectionHead({ index, kicker, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 md:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-6xl text-venom md:col-span-2",
			children: index
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-mist",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-2",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-mist",
					children: text
				})
			]
		})]
	});
}
function FormatBoard({ name, note, slots, phases }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-5xl uppercase leading-none",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-mist",
				children: note
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatInner, {
			slots,
			phases
		})]
	});
}
function FormatInner({ slots, phases }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: `grid gap-3 ${slots.length > 5 ? "md:grid-cols-4 lg:grid-cols-7" : slots.length === 3 ? "md:grid-cols-3" : "md:grid-cols-5"}`,
		children: slots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "glass rounded-3xl p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl leading-none text-venom",
					children: slot.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker mt-3 text-mist",
					children: modeLabel[slot.mode]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: slot.pick
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-venom",
					children: slot.side
				})
			]
		}, `${slot.n}-${slot.fr}`))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 grid gap-3 lg:grid-cols-3",
		children: phases.map((phase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-3xl border border-line p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display text-2xl uppercase",
				children: phase.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 space-y-3",
				children: phase.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[auto_1fr] gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-venom",
						children: ["É", step.team]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker text-bone",
						children: step.verb
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-mist",
						children: step.text
					})] })]
				}, `${phase.title}-${index}`))
			})]
		}, phase.title))
	})] });
}
var SplitComponent = Guide;
//#endregion
export { SplitComponent as component };
