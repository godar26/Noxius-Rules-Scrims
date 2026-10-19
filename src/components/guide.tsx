import { useEffect, useMemo, useState } from "react";
import { Printer, Search } from "lucide-react";
import {
  bo3Phases,
  bo3Slots,
  bo5Phases,
  bo5Slots,
  bo7Phases,
  bo7Slots,
  cats,
  finalPhases,
  finalSlots,
  groups,
  journal,
  maps,
  modeLabel,
  nav,
  poolChips,
  roles,
  roster,
  settings,
  type ModeId,
  type Phase,
  type Slot,
} from "@/data/codex";

function printDossier() {
  document.querySelectorAll("details").forEach((node) => node.setAttribute("open", ""));
  window.print();
}

export function Guide() {
  const [active, setActive] = useState("accueil");
  const [mode, setMode] = useState<"tous" | ModeId>("tous");
  const [cat, setCat] = useState("tout");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const needle = query.trim().toLowerCase();
  const visibleGroups = useMemo(
    () =>
      groups.map((group) => {
        const catOk = cat === "tout" || group.cat === cat;
        const matched = group.items.filter((item) => {
          if (!needle) return true;
          return `${item.fr} ${item.en ?? ""} ${item.note ?? ""}`.toLowerCase().includes(needle);
        });
        return { ...group, items: group.items, hidden: !catOk || matched.length === 0, matched };
      }),
    [cat, needle],
  );

  const shownMaps = maps;

  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <header className="no-print sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <a href="#accueil" className="flex shrink-0 items-center gap-2">
            <img src="/codex/crest.jpg" alt="" className="h-9 w-9 rounded-full object-cover" />
            <span className="kicker text-bone">Noxius</span>
          </a>
          <nav className="flex flex-1 gap-1 overflow-x-auto" aria-label="Sections du dossier">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`kicker shrink-0 rounded-full px-3 py-2 ${
                  active === item.id ? "bg-venom text-ink" : "text-mist"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={printDossier}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-venom px-4 text-sm font-semibold text-ink"
          >
            <Printer className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </header>

      <main>
        <section id="accueil" className="relative min-h-[92svh] scroll-mt-20">
          <img
            src="/codex/hero.jpg"
            alt="Salle de briefing du clan Noxius, table de verre et emblème lumineux."
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 veil-hero" />
          <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
            <p className="kicker text-venom">Clan Noxius · Saison 2026</p>
            <h1 className="display-xl mt-3 max-w-4xl">
              Codex
              <br />
              esports
            </h1>
            <p className="mt-5 max-w-xl text-lg text-bone">
              Le dossier de révision du clan. Cartes, réglages, Best of 5, Best of 3, rôles d’armes et tout ce qui est interdit — en français, à lire avant le veto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#formats" className="inline-flex min-h-11 items-center rounded-full bg-venom px-5 font-semibold text-ink">
                Voir les formats
              </a>
              <a href="#arsenal" className="inline-flex min-h-11 items-center rounded-full border border-bone/30 px-5 font-semibold text-bone">
                Arsenal interdit
              </a>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto -mt-10 grid max-w-6xl gap-3 px-4 sm:grid-cols-3">
          {[
            ["Ordre Bo5", "PS · RD · CTRL · PS · RD"],
            ["Pool d’armes", "3 FA · 3 SMG · 1 de chaque autre"],
            ["Compétence", "Une seule par équipe, tant qu’on est en vie"],
          ].map(([title, body]) => (
            <article key={title} className="glass rounded-3xl p-5">
              <p className="kicker text-venom">{title}</p>
              <p className="mt-2 font-display text-2xl uppercase leading-tight">{body}</p>
            </article>
          ))}
        </div>

        <section id="reglages" className="scroll-mt-24 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              index="01"
              kicker="Salon privé"
              title="Réglages de partie"
              text="Le capitaine qui ouvre le salon aligne ces valeurs avant de lancer. Ce n’est pas un mode d’emploi d’hôte : seulement les chiffres à vérifier."
            />
            <div className="stage mt-8 grid gap-4 lg:grid-cols-3">
              {settings.map((setting) => (
                <article key={setting.id} className="glass slab rounded-3xl p-5">
                  <p className="kicker text-venom">{setting.en}</p>
                  <h3 className="mt-2 font-display text-3xl uppercase leading-none">{setting.fr}</h3>
                  <dl className="mt-5 divide-y divide-line">
                    {setting.rows.map((row) => (
                      <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
                        <dt className="text-sm text-mist">{row.label}</dt>
                        <dd className="font-display text-2xl text-venom">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm text-mist">
              Règle des 21 jours : toute arme, compétence, atout, équipement, série de points ou accessoire nouvellement sorti reste interdit jusqu’à exactement 21 jours après sa disponibilité mondiale. L’administration peut avancer ou reculer ce délai. En cas de doute, on demande avant de jouer.
            </p>
          </div>
        </section>

        <section id="cartes" className="scroll-mt-24 px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              index="02"
              kicker="Map pool"
              title="Treize cartes, trois pools"
              text="Après le stage 2 et jusqu’aux finales, on ne joue que ce pool. Une carte bannie ou choisie ne revient pas. Les noms de veto sont les noms anglais du jeu."
            />
            <div className="no-print mt-6 flex gap-2 overflow-x-auto">
              {(
                [
                  ["tous", "Toutes"],
                  ["hp", "Point stratégique"],
                  ["snd", "Recherche et destruction"],
                  ["ctrl", "Contrôle"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={mode === id}
                  onClick={() => setMode(id)}
                  className={`kicker min-h-11 shrink-0 rounded-full px-4 ${
                    mode === id ? "bg-venom text-ink" : "glass text-bone"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shownMaps.map((card) => (
                <article
                key={card.name}
                className={`lift overflow-hidden rounded-3xl border border-line bg-panel ${
                  mode !== "tous" && card.mode !== mode ? "filtered-out" : ""
                }`}
              >
                  <div className="relative frame-map">
                    {card.image ? (
                      <img src={card.image} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <div className={`h-full w-full ${card.plate ?? "plate"}`} />
                    )}
                    <div className="absolute inset-0 veil-card" />
                    <p className="kicker absolute top-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-venom">
                      {modeLabel[card.mode]}
                    </p>
                    <h3 className="absolute right-4 bottom-3 left-4 font-display text-4xl uppercase leading-none">
                      {card.name}
                    </h3>
                  </div>
                  <p className="px-4 py-3 text-sm text-mist">{card.line}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-sm text-mist">
              Les photos sont des études d’ambiance du clan, pas les minimaps officielles. Cinq cartes du pool Point stratégique, cinq en recherche et destruction, trois en contrôle. Chaque année : sept cartes gardées, trois qui changent de mode, trois nouvelles.
            </p>
          </div>
        </section>

        <section id="formats" className="scroll-mt-24 px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              index="03"
              kicker="À lire, pas à simuler"
              title="Best of 5 et Best of 3"
              text="La tête de série la plus haute choisit d’être l’équipe 1 ou l’équipe 2, et elle héberge le salon. Le script ci-dessous est l’ordre exact du veto. Une carte sortie du pool ne revient pas."
            />
            <FormatBoard
              name="Best of 5"
              note="Split d’été, split d’automne, finales du championnat. Tous les matchs sauf la grande finale."
              slots={bo5Slots}
              phases={bo5Phases}
            />
            <FormatBoard
              name="Best of 3"
              note="Quatre bans puis la carte qui reste en point stratégique et en recherche. Deux bans en contrôle."
              slots={bo3Slots}
              phases={bo3Phases}
            />
            <details className="glass mt-6 rounded-3xl p-5">
              <summary className="flex min-h-11 items-center justify-between gap-4">
                <span>
                  <span className="kicker text-venom">Référence</span>
                  <span className="mt-1 block font-display text-3xl uppercase">Best of 7 et grande finale</span>
                </span>
                <span className="kicker text-mist">Ouvrir</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm text-mist">
                Le Best of 7 simple existe dans le règlement. La grande finale est un Best of 7 avec une manche d’avantage pour l’équipe qui sort de la finale des gagnants : le veto ne désigne alors que les manches 1 à 6.
              </p>
              <div className="mt-6 grid gap-8">
                <FormatInner slots={bo7Slots} phases={bo7Phases} />
                <FormatInner slots={finalSlots} phases={finalPhases} />
              </div>
            </details>
          </div>
        </section>

        <section id="roles" className="scroll-mt-24 px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              index="04"
              kicker="Affichage seulement"
              title="Six rôles, dix jetons"
              text="Chaque joueur reçoit deux rôles différents. L’équipe possède son propre pool : les jetons ne se partagent pas avec l’adversaire. Les rôles ne s’appliquent ni aux armes secondaires, ni aux armes ramassées."
            />
            <div className="stage mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <article key={role.short} className="glass slab relative min-h-64 overflow-hidden rounded-3xl p-5">
                  <img
                    src="/codex/crest.jpg"
                    alt=""
                    className="pointer-events-none absolute -right-8 -bottom-10 h-44 w-44 object-cover opacity-25"
                  />
                  <p className="font-display text-7xl leading-none text-venom">{role.quota}</p>
                  <p className="kicker mt-3 text-mist">{role.short}</p>
                  <h3 className="mt-1 font-display text-4xl uppercase leading-none">{role.fr}</h3>
                  <p className="mt-2 text-sm text-mist">{role.en}</p>
                  <p className="relative mt-4 text-sm">{role.rule}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-5">
              <article className="glass rounded-3xl p-5 lg:col-span-2">
                <p className="kicker text-venom">Le pool d’une équipe</p>
                <h3 className="mt-2 font-display text-3xl uppercase">Dix jetons</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {poolChips.map((chip, index) => (
                    <li
                      key={`${chip}-${index}`}
                      className="rounded-full border border-venom/50 px-3 py-2 font-display text-lg tracking-wide text-venom"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-mist">
                  L’équipe qui a annoncé ses compétences d’opérateur en second annonce ses rôles d’armes en premier. Si les rôles ne sont pas donnés à temps à l’administration, ceux de la série précédente s’appliquent.
                </p>
              </article>
              <article className="glass rounded-3xl p-5 lg:col-span-3">
                <p className="kicker text-venom">Exemple du règlement</p>
                <h3 className="mt-2 font-display text-3xl uppercase">Comment ça se déclare</h3>
                <p className="mt-2 text-sm text-mist">Modèle officiel. Rien à choisir ici : c’est la forme de l’annonce.</p>
                <ol className="mt-4 divide-y divide-line">
                  {roster.map((row) => (
                    <li key={row.player} className="flex flex-wrap items-center justify-between gap-3 py-3">
                      <span className="font-display text-xl uppercase">{row.player}</span>
                      <span className="flex gap-2">
                        <span className="rounded-full bg-venom px-3 py-1 font-display text-ink">{row.a}</span>
                        <span className="rounded-full border border-bone/30 px-3 py-1 font-display">{row.b}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>

        <section id="arsenal" className="scroll-mt-24 px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              index="05"
              kicker="Loadout"
              title="Ce qui passe, ce qui tombe"
              text="Jouer un objet de la liste interdite peut coûter la manche, le match, ou la place dans le tournoi. Filmez vos parties : c’est la preuve à fournir à un admin."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <article className="glass rounded-3xl p-5">
                <p className="kicker text-venom">Compétence</p>
                <p className="mt-2 text-sm">
                  Deux coéquipiers ne portent pas la même compétence en même temps, même sans l’activer. On peut la changer en cours de carte si la règle reste respectée. Un mort en train de changer la sienne ne compte pas. Infraction : la carte est perdue.
                </p>
              </article>
              <article className="glass rounded-3xl p-5">
                <p className="kicker text-venom">Séries</p>
                <p className="mt-2 text-sm">Seuls le drone traqueur, le missile prédateur et l’IEM sont équipables.</p>
              </article>
              <article className="glass rounded-3xl p-5">
                <p className="kicker text-venom">Jokers</p>
                <p className="mt-2 text-sm">Aucun joker. Tous, sans exception.</p>
              </article>
            </div>

            <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="glass flex min-h-11 flex-1 items-center gap-2 rounded-full px-4">
                <Search className="h-4 w-4 text-mist" aria-hidden />
                <span className="sr-only">Rechercher dans l’arsenal</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Chercher une arme, un atout, un accessoire…"
                  className="w-full bg-transparent py-3 text-bone outline-none placeholder:text-mist"
                />
              </label>
            </div>
            <div className="no-print mt-3 flex gap-2 overflow-x-auto pb-1">
              {cats.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={cat === item.id}
                  onClick={() => setCat(item.id)}
                  className={`kicker min-h-11 shrink-0 rounded-full px-4 ${
                    cat === item.id ? "bg-venom text-ink" : "glass text-bone"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4">
              {visibleGroups.map((group) => (
                <article key={group.id} className={`glass rounded-3xl p-5 ${group.hidden ? "filtered-out" : ""}`}>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <h3 className="font-display text-3xl uppercase leading-none">{group.title}</h3>
                    <span className="kicker text-venom">
                      {group.tone === "allow" ? "Autorisé" : group.tone === "note" ? "Repère" : "Interdit"}
                    </span>
                  </div>
                  {group.intro ? <p className="mt-3 max-w-3xl text-sm text-mist">{group.intro}</p> : null}
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {group.items.map((item) => {
                      const hit =
                        !needle ||
                        `${item.fr} ${item.en ?? ""} ${item.note ?? ""}`.toLowerCase().includes(needle);
                      return (
                        <li
                          key={`${group.id}-${item.fr}-${item.note ?? ""}`}
                          className={`rounded-2xl border border-line px-3 py-3 ${hit ? "" : "filtered-out"}`}
                        >
                          <p className="font-medium">{item.fr}</p>
                          {item.en ? <p className="text-sm text-mist">{item.en}</p> : null}
                          {item.note ? <p className="mt-1 text-sm text-venom">{item.note}</p> : null}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
              {visibleGroups.every((group) => group.hidden) ? (
                <p className="no-print text-mist">Aucun objet ne correspond à cette recherche.</p>
              ) : null}
            </div>
          </div>
        </section>

        <section id="journal" className="scroll-mt-24 px-4 pb-24">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              index="06"
              kicker="Changelog"
              title="Ce qui a bougé en 2026"
              text="À relire quand un joueur jure que « l’année dernière c’était autorisé »."
            />
            <ol className="mt-8 border-l border-line">
              {journal.map((entry) => (
                <li key={entry.date} className="relative pb-8 pl-6">
                  <span className="absolute top-1.5 -left-1.5 h-3 w-3 rounded-full bg-venom" />
                  <p className="kicker text-venom">{entry.date}</p>
                  <p className="mt-2 max-w-3xl">{entry.text}</p>
                </li>
              ))}
            </ol>
            <footer className="mt-4 border-t border-line pt-6 text-sm text-mist">
              D’après les Esports Settings officiels Call of Duty: Mobile, journal arrêté au 24 septembre 2026. Les noms entre parenthèses ou en seconde ligne sont ceux de l’armurerie anglaise, pour coller au client. Noxius — dossier interne de révision.
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHead({
  index,
  kicker,
  title,
  text,
}: {
  index: string;
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      <p className="font-display text-6xl text-venom md:col-span-2">{index}</p>
      <div className="md:col-span-10">
        <p className="kicker text-mist">{kicker}</p>
        <h2 className="display-lg mt-2">{title}</h2>
        <p className="mt-3 max-w-2xl text-mist">{text}</p>
      </div>
    </div>
  );
}

function FormatBoard({
  name,
  note,
  slots,
  phases,
}: {
  name: string;
  note: string;
  slots: Slot[];
  phases: Phase[];
}) {
  return (
    <div className="mt-10">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-display text-5xl uppercase leading-none">{name}</h3>
        <p className="max-w-md text-sm text-mist">{note}</p>
      </div>
      <FormatInner slots={slots} phases={phases} />
    </div>
  );
}

function FormatInner({ slots, phases }: { slots: Slot[]; phases: Phase[] }) {
  return (
    <div>
      <ol className={`grid gap-3 ${slots.length > 5 ? "md:grid-cols-4 lg:grid-cols-7" : slots.length === 3 ? "md:grid-cols-3" : "md:grid-cols-5"}`}>
        {slots.map((slot) => (
          <li key={`${slot.n}-${slot.fr}`} className="glass rounded-3xl p-4">
            <p className="font-display text-5xl leading-none text-venom">{slot.n}</p>
            <p className="kicker mt-3 text-mist">{modeLabel[slot.mode]}</p>
            <p className="mt-3 text-sm">{slot.pick}</p>
            <p className="mt-1 text-sm text-venom">{slot.side}</p>
          </li>
        ))}
      </ol>
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {phases.map((phase) => (
          <article key={phase.title} className="rounded-3xl border border-line p-4">
            <h4 className="font-display text-2xl uppercase">{phase.title}</h4>
            <ol className="mt-3 space-y-3">
              {phase.steps.map((step, index) => (
                <li key={`${phase.title}-${index}`} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="font-display text-venom">É{step.team}</span>
                  <span>
                    <span className="kicker text-bone">{step.verb}</span>
                    <span className="mt-1 block text-sm text-mist">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </div>
  );
}
