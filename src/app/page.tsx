"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeQuestionMark,
  Box,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Compass,
  Github,
  Heart,
  Info,
  Linkedin,
  Mail,
  MapPin,
  PanelTop,
  Search,
  Settings2,
  Shield,
  Sparkles,
  Star,
  Swords,
  UsersRound,
  X,
  XCircle,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { useItems } from "@/contexts/ItemContext";
import { usePokemon } from "@/contexts/PokemonContext";
import type { ItemDexEntry } from "@/utils/fetchItems";
import {
  BASE_URL,
  fetchPokemonDetails,
  type PokemonDetails,
  type PokemonGridItem,
  type PokemonItemInteraction,
} from "@/utils/fetchPokemon";
import {
  answerQuizQuestion,
  closePokedexWindow,
  createQuizQuestion,
  dexNumber,
  displayName,
  filterPokemonRows,
  focusPokedexWindow,
  mapDetailsToStatRows,
  openPokedexWindow,
  summarizeDashboard,
  toggleSetValue,
  type PokedexWindowKind,
  type PokedexWindowState,
  type PokedexSection,
  type QuizState,
  type StatRow,
} from "./pokedex-model";

const FALLBACK_ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

const NAV_SECTIONS: {
  label: PokedexSection;
  icon: (props: { className?: string }) => ReactNode;
  special?: boolean;
}[] = [
  { label: "Dashboard", icon: PanelTop },
  { label: "Pokémon", icon: PokeBallIcon },
  { label: "Moves", icon: Swords },
  { label: "Items", icon: Box },
  { label: "Locations", icon: MapPin },
  { label: "Types", icon: Sparkles, special: true },
  { label: "Compare", icon: Shield },
  { label: "Favorites", icon: Heart },
  { label: "Team Builder", icon: UsersRound },
  { label: "Quiz Mode", icon: BadgeQuestionMark },
  { label: "About", icon: Info },
];

const TOP_SECTIONS: PokedexSection[] = ["Dashboard", "Pokémon", "Moves", "Items", "Locations", "Compare", "About"];
const DETAILS_TABS = ["Overview", "Stats", "Moves", "Evolution", "Locations"] as const;
const GENERATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const typeStyles: Record<string, string> = {
  normal: "border-slate-500/70 bg-slate-500/10 text-slate-200",
  fire: "border-orange-500/80 bg-orange-500/15 text-orange-200",
  water: "border-sky-500/80 bg-sky-500/15 text-sky-200",
  grass: "border-emerald-500/80 bg-emerald-500/15 text-emerald-200",
  electric: "border-yellow-400/80 bg-yellow-400/15 text-yellow-100",
  psychic: "border-fuchsia-500/80 bg-fuchsia-500/15 text-fuchsia-200",
  poison: "border-purple-500/80 bg-purple-500/15 text-purple-200",
  flying: "border-violet-500/80 bg-violet-500/15 text-violet-200",
  bug: "border-lime-500/80 bg-lime-500/15 text-lime-200",
  ground: "border-amber-600/80 bg-amber-600/15 text-amber-200",
  rock: "border-stone-500/80 bg-stone-500/15 text-stone-200",
  fighting: "border-red-500/80 bg-red-500/15 text-red-200",
  ice: "border-cyan-400/80 bg-cyan-400/15 text-cyan-100",
  ghost: "border-indigo-500/80 bg-indigo-500/15 text-indigo-200",
  dragon: "border-blue-500/80 bg-blue-500/15 text-blue-200",
  dark: "border-zinc-500/80 bg-zinc-500/15 text-zinc-200",
  steel: "border-slate-400/80 bg-slate-400/15 text-slate-100",
  fairy: "border-pink-400/80 bg-pink-400/15 text-pink-100",
};

const statColors: Record<StatRow["label"], string> = {
  HP: "from-rose-500 to-rose-300",
  Attack: "from-yellow-500 to-amber-300",
  Defense: "from-yellow-500 to-yellow-300",
  "Sp. Atk": "from-emerald-500 to-green-300",
  "Sp. Def": "from-sky-500 to-cyan-300",
  Speed: "from-violet-500 to-purple-300",
};

type EncounterLocation = {
  name: string;
  versions: string[];
};

type ItemCardEntry = ItemDexEntry | PokemonItemInteraction;

export default function HomePage() {
  const { pokemonList, loading: pokemonLoading, error: pokemonError } = usePokemon();
  const { items, loading: itemsLoading } = useItems();
  const [activeSection, setActiveSection] = useState<PokedexSection>("Dashboard");
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [selectedPokemonId, setSelectedPokemonId] = useState(6);
  const [selectedDetails, setSelectedDetails] = useState<PokemonDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);
  const [encounters, setEncounters] = useState<EncounterLocation[]>([]);
  const [favoriteIds, setFavoriteIds] = useState(() => new Set<number>());
  const [teamIds, setTeamIds] = useState(() => new Set<number>());
  const [compareIds, setCompareIds] = useState(() => new Set<number>([3]));
  const [compareDetails, setCompareDetails] = useState(() => new Map<number, PokemonDetails>());
  const [activeTab, setActiveTab] = useState<(typeof DETAILS_TABS)[number]>("Overview");
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [toolWindows, setToolWindows] = useState<PokedexWindowState[]>([]);

  const selectedPokemon =
    pokemonList.find((pokemon) => pokemon.id === selectedPokemonId) ??
    pokemonList.find((pokemon) => pokemon.id === 6) ??
    pokemonList[0] ??
    null;

  useEffect(() => {
    if (!selectedPokemon) {
      return;
    }

    let cancelled = false;

    const loadDetails = async () => {
      setDetailsLoading(true);
      setDetailsError(null);

      try {
        const [details, locations] = await Promise.all([
          fetchPokemonDetails(selectedPokemon.name),
          fetchEncounterLocations(selectedPokemon.name),
        ]);
        if (cancelled) {
          return;
        }
        setSelectedDetails(details);
        setEncounters(locations);
        setDetailsError(details ? null : `No details found for ${displayName(selectedPokemon.name)}.`);
      } catch (error) {
        if (cancelled) {
          return;
        }
        setSelectedDetails(null);
        setEncounters([]);
        setDetailsError(error instanceof Error ? error.message : "Failed to load Pokémon details.");
      } finally {
        if (!cancelled) {
          setDetailsLoading(false);
        }
      }
    };

    void loadDetails();

    return () => {
      cancelled = true;
    };
  }, [selectedPokemon]);

  const typeFilters = useMemo(
    () => [
      "All",
      ...Array.from(new Set(pokemonList.flatMap((pokemon) => pokemon.types.map((type) => displayName(type))))).sort(),
    ],
    [pokemonList],
  );

  const filteredPokemon = useMemo(
    () => filterPokemonRows(pokemonList, query, activeType),
    [activeType, pokemonList, query],
  );

  const statRows = useMemo(() => mapDetailsToStatRows(selectedDetails), [selectedDetails]);
  const summary = useMemo(
    () => summarizeDashboard(pokemonList, items.length, selectedDetails?.moves.length ?? 0, encounters.length),
    [encounters.length, items.length, pokemonList, selectedDetails?.moves.length],
  );
  const selectedArtwork = selectedPokemon ? resolvePokemonArtwork(selectedPokemon) : FALLBACK_ARTWORK;
  const selectedName = selectedDetails?.name ?? selectedPokemon?.name ?? "pokemon";
  const comparePokemon = useMemo(
    () => Array.from(compareIds).map((id) => pokemonList.find((pokemon) => pokemon.id === id)).filter((pokemon): pokemon is PokemonGridItem => Boolean(pokemon)).slice(0, 2),
    [compareIds, pokemonList],
  );
  const compareIdsKey = useMemo(() => Array.from(compareIds).sort((a, b) => a - b).join(","), [compareIds]);
  const teamPokemon = useMemo(
    () => Array.from(teamIds).map((id) => pokemonList.find((pokemon) => pokemon.id === id)).filter((pokemon): pokemon is PokemonGridItem => Boolean(pokemon)),
    [pokemonList, teamIds],
  );
  const favoritePokemon = useMemo(
    () => pokemonList.filter((pokemon) => favoriteIds.has(pokemon.id)),
    [favoriteIds, pokemonList],
  );
  const initialQuiz = useMemo(
    () => (pokemonList.length ? createQuizQuestion(pokemonList, 0, 0) : null),
    [pokemonList],
  );
  const quizState = quiz ?? initialQuiz;

  useEffect(() => {
    if (!comparePokemon.length) {
      setCompareDetails(new Map());
      return;
    }

    let cancelled = false;
    const loadCompareDetails = async () => {
      const entries = await Promise.all(
        comparePokemon.map(async (pokemon) => [pokemon.id, await fetchPokemonDetails(pokemon.name)] as const),
      );
      if (cancelled) {
        return;
      }
      setCompareDetails(new Map(entries.filter((entry): entry is readonly [number, PokemonDetails] => Boolean(entry[1]))));
    };

    void loadCompareDetails();

    return () => {
      cancelled = true;
    };
  }, [compareIdsKey, comparePokemon]);

  const selectSection = (section: PokedexSection) => {
    if (section === "Dashboard") {
      setActiveSection("Dashboard");
      return;
    }
    if (section === "Quiz Mode") {
      setQuizOpen(true);
      setActiveSection("Quiz Mode");
      return;
    }
    openToolWindow(sectionToWindow(section));
    setActiveSection(section);
  };

  const selectPokemon = (pokemon: PokemonGridItem, nextSection: PokedexSection = activeSection) => {
    setSelectedPokemonId(pokemon.id);
    if (nextSection !== activeSection) {
      setActiveSection(nextSection);
    }
    setActiveTab("Overview");
    openPokemonProfileWindow(pokemon.id, displayName(pokemon.name));
  };

  const openToolWindow = (input: { kind: PokedexWindowKind; title: string }) => {
    setToolWindows((current) => openPokedexWindow(current, input));
  };

  const openPokemonProfileWindow = (pokemonId: number, title: string) => {
    setToolWindows((current) => openPokedexWindow(current, { kind: "PokemonProfile", title, pokemonId }));
  };

  const closeToolWindow = (id: string) => {
    setToolWindows((current) => closePokedexWindow(current, id));
  };

  const focusToolWindow = (id: string) => {
    setToolWindows((current) => focusPokedexWindow(current, id));
  };

  const toggleFavorite = (id: number) => {
    setFavoriteIds((current) => toggleSetValue(current, id));
  };

  const toggleTeam = (id: number) => {
    setTeamIds((current) => {
      if (!current.has(id) && current.size >= 6) {
        return current;
      }
      return toggleSetValue(current, id);
    });
  };

  const toggleCompare = (id: number) => {
    setCompareIds((current) => {
      const next = toggleSetValue(current, id);
      if (next.size <= 2) {
        return next;
      }
      const [, ...latestTwo] = Array.from(next);
      return new Set(latestTwo);
    });
    openToolWindow({ kind: "Compare", title: "Battle Comparison" });
    setActiveSection("Compare");
  };

  const answerQuiz = (answer: string) => {
    setQuiz((current) => {
      const activeQuiz = current ?? initialQuiz;
      return activeQuiz ? answerQuizQuestion(activeQuiz, answer) : activeQuiz;
    });
  };

  const nextQuiz = () => {
    setQuiz((current) => {
      const activeQuiz = current ?? initialQuiz;
      return createQuizQuestion(pokemonList, activeQuiz?.correct ?? 0, activeQuiz?.total ?? 0);
    });
  };

  const navBadge = (section: PokedexSection) => {
    if (section === "Favorites") return favoriteIds.size;
    if (section === "Team Builder") return teamIds.size;
    if (section === "Compare") return compareIds.size;
    return null;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020611] text-slate-100">
      <div className="pokedex-shell">
        <TopNavigation
          activeSection={activeSection}
          query={query}
          setQuery={setQuery}
          onSelectSection={selectSection}
        />

        <aside className="pokedex-sidebar">
          <nav className="space-y-2" aria-label="Dashboard sections">
            {NAV_SECTIONS.map((item) => {
              const Icon = item.icon;
              const badge = navBadge(item.label);
              return (
                <button
                  key={item.label}
                  type="button"
                  className={`sidebar-item ${activeSection === item.label ? "sidebar-item-active" : ""}`}
                  onClick={() => selectSection(item.label)}
                >
                  <Icon className={`h-[21px] w-[21px] ${item.special ? "text-yellow-400" : ""}`} />
                  <span>{item.label}</span>
                  {badge !== null ? (
                    <span className="ml-auto rounded-md bg-slate-600 px-2 py-1 text-xs">{badge}</span>
                  ) : (
                    <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
                  )}
                </button>
              );
            })}
          </nav>

          <section className="sidebar-panel mt-4">
            <p className="mb-3 text-sm text-slate-200">Generation</p>
            <div className="grid grid-cols-5 gap-2">
              {GENERATIONS.map((generation) => (
                <button
                  key={generation}
                  type="button"
                  className={`generation-dot ${generation === 1 ? "generation-dot-active" : ""}`}
                  onClick={() => generation === 1 && setActiveSection("Pokémon")}
                >
                  {generation}
                </button>
              ))}
            </div>
          </section>

          <section className="sidebar-panel sidebar-purple mt-4">
            <div>
              <p className="text-base font-semibold">Johto & Beyond</p>
              <p className="mt-3 max-w-[145px] text-sm leading-5 text-slate-300">
                Gen 1 is live. Later generations can connect through the same API pipeline.
              </p>
            </div>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
              alt="Gengar"
              width={96}
              height={96}
              className="absolute bottom-5 right-1 h-24 w-24 object-contain opacity-70"
            />
            <button type="button" className="mt-6 rounded-lg border border-violet-500/70 bg-violet-800/40 px-4 py-2 text-sm text-violet-100">
              Stay Tuned
            </button>
          </section>

          <section className="profile-card mt-auto">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-slate-500/50 bg-slate-800">
                <CircleUserRound className="h-7 w-7 text-slate-300" />
              </div>
              <div>
                <p className="font-semibold">Bradley Matera</p>
                <p className="text-xs text-slate-400">Developer · Problem Solver</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <button key={index} type="button" className="profile-link" aria-label="Profile link">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </section>
        </aside>

        <section className="pokedex-main">
          <HeroPanel
            selectedArtwork={selectedArtwork}
            query={query}
            setQuery={setQuery}
            summary={summary}
            onOpenTypes={() => setActiveSection("Types")}
          />

          <ExplorerPanel
            activeSection="Dashboard"
            pokemonRows={filteredPokemon}
            pokemonLoading={pokemonLoading}
            pokemonError={pokemonError}
            typeFilters={typeFilters}
            activeType={activeType}
            setActiveType={setActiveType}
            onSelectPokemon={(pokemon) => selectPokemon(pokemon, "Pokémon")}
            favoriteIds={favoriteIds}
            toggleFavorite={toggleFavorite}
            selectedPokemonId={selectedPokemonId}
            defaultVisible={10}
          />

          <CockpitGuidePanel
            favoriteCount={favoritePokemon.length}
            teamCount={teamPokemon.length}
            compareCount={comparePokemon.length}
            onOpenPokemon={() => openToolWindow({ kind: "PokemonExplorer", title: "Pokémon Explorer" })}
            onOpenCompare={() => openToolWindow({ kind: "Compare", title: "Battle Comparison" })}
            onOpenTeam={() => openToolWindow({ kind: "TeamBuilder", title: "Team Builder" })}
            onOpenQuiz={() => setQuizOpen(true)}
          />
        </section>

        <DetailsPanel
          selectedPokemon={selectedPokemon}
          selectedName={selectedName}
          selectedArtwork={selectedArtwork}
          selectedDetails={selectedDetails}
          detailsLoading={detailsLoading}
          detailsError={detailsError}
          statRows={statRows}
          encounters={encounters}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          inTeam={selectedPokemon ? teamIds.has(selectedPokemon.id) : false}
          inCompare={selectedPokemon ? compareIds.has(selectedPokemon.id) : false}
          onOpenProfile={() => selectedPokemon && openPokemonProfileWindow(selectedPokemon.id, displayName(selectedPokemon.name))}
          onToggleTeam={() => {
            if (!selectedPokemon) return;
            toggleTeam(selectedPokemon.id);
            openToolWindow({ kind: "TeamBuilder", title: "Team Builder" });
            setActiveSection("Team Builder");
          }}
          onToggleCompare={() => selectedPokemon && toggleCompare(selectedPokemon.id)}
        />
        <PokedexWindowLayer
          windows={toolWindows}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedPokemon={selectedPokemon}
          selectedDetails={selectedDetails}
          statRows={statRows}
          encounters={encounters}
          pokemonRows={pokemonList}
          filteredPokemon={filteredPokemon}
          items={items}
          itemsLoading={itemsLoading}
          favoritePokemon={favoritePokemon}
          teamPokemon={teamPokemon}
          comparePokemon={comparePokemon}
          compareDetails={compareDetails}
          onClose={closeToolWindow}
          onFocus={focusToolWindow}
          onSelectPokemon={selectPokemon}
          onSelectType={(type) => {
            setActiveType(type);
            openToolWindow({ kind: "PokemonExplorer", title: `${type} Pokémon` });
          }}
          onToggleFavorite={toggleFavorite}
          onToggleTeam={toggleTeam}
        />
        <QuizGameModal
          open={quizOpen}
          quiz={quizState}
          pokemonRows={pokemonList}
          onClose={() => setQuizOpen(false)}
          onAnswer={answerQuiz}
          onNext={nextQuiz}
        />
      </div>
    </main>
  );
}

function TopNavigation({
  activeSection,
  query,
  setQuery,
  onSelectSection,
}: {
  activeSection: PokedexSection;
  query: string;
  setQuery: (query: string) => void;
  onSelectSection: (section: PokedexSection) => void;
}) {
  return (
    <header className="pokedex-topbar">
      <button type="button" className="flex min-w-0 items-center gap-3 text-left" onClick={() => onSelectSection("Dashboard")}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-red-600 shadow-[0_0_24px_rgba(239,68,68,.45)]">
          <PokeBallIcon className="h-8 w-8 text-white" />
        </span>
        <span className="leading-none">
          <span className="block text-2xl font-black tracking-tight">
            Poke<span className="text-red-500">Dex</span>
          </span>
          <span className="mt-1 block text-xs text-slate-300">Gotta explore them all.</span>
        </span>
      </button>

      <nav className="top-links" aria-label="Primary navigation">
        {TOP_SECTIONS.map((section) => (
          <button
            key={section}
            type="button"
            className={activeSection === section ? "top-link top-link-active" : "top-link"}
            onClick={() => onSelectSection(section)}
          >
            {section === "Dashboard" ? "Explorer" : section}
          </button>
        ))}
      </nav>

      <label className="global-search">
        <Search className="h-5 w-5 text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Pokémon, moves, items..."
          aria-label="Search Pokémon, moves, items"
        />
        <kbd>/</kbd>
      </label>

    </header>
  );
}

function HeroPanel({
  selectedArtwork,
  query,
  setQuery,
  summary,
  onOpenTypes,
}: {
  selectedArtwork: string;
  query: string;
  setQuery: (query: string) => void;
  summary: { pokemon: number; types: number; moves: number; locations: number; items: number };
  onOpenTypes: () => void;
}) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <h1>
          Explore. Learn.
          <br />
          Become a <span>Pokémon</span> Master.
        </h1>
        <p>Your complete connected Gen 1 Pokédex. Search real Pokémon data, inspect stats, moves, evolutions, locations, items, teams, and comparisons.</p>
        <div className="hero-search-row">
          <label className="hero-search">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Pokémon by name or number..."
              aria-label="Search Pokémon by name or number"
            />
            <ChevronRight className="h-5 w-5 text-slate-400" />
          </label>
          <button type="button" className="filter-button" aria-label="Open type filters" onClick={onOpenTypes}>
            <Settings2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="hero-stage" aria-hidden="true">
        <div className="ember ember-one" />
        <div className="ember ember-two" />
        <div className="ember ember-three" />
        <Image src={selectedArtwork} alt="" width={420} height={420} loading="eager" className="hero-pokemon" />
      </div>

      <div className="hero-stats">
        <MetricCard icon={<PokeBallIcon className="h-8 w-8" />} value={summary.pokemon.toString()} label="Pokémon" tone="red" />
        <MetricCard icon={<CircleUserRound className="h-8 w-8" />} value={summary.types.toString()} label="Types" tone="purple" />
        <MetricCard icon={<Star className="h-7 w-7" />} value={summary.moves.toString()} label="Moves" tone="blue" />
        <MetricCard icon={<MapPin className="h-7 w-7" />} value={summary.locations.toString()} label="Locations" tone="green" />
        <MetricCard icon={<Compass className="h-7 w-7" />} value={summary.items.toString()} label="Items" tone="yellow" />
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  value,
  label,
  tone,
}: {
  icon: ReactNode;
  value: string;
  label: string;
  tone: "red" | "purple" | "blue" | "green" | "yellow";
}) {
  return (
    <div className="metric-card">
      <span className={`metric-icon metric-${tone}`}>{icon}</span>
      <span>
        <strong>{value}</strong>
        <small>{label}</small>
      </span>
    </div>
  );
}

function ExplorerPanel({
  activeSection,
  pokemonRows,
  pokemonLoading,
  pokemonError,
  typeFilters,
  activeType,
  setActiveType,
  onSelectPokemon,
  favoriteIds,
  toggleFavorite,
  selectedPokemonId,
  defaultVisible = 10,
}: {
  activeSection: PokedexSection;
  pokemonRows: PokemonGridItem[];
  pokemonLoading: boolean;
  pokemonError: string | null;
  typeFilters: string[];
  activeType: string;
  setActiveType: (type: string) => void;
  onSelectPokemon: (pokemon: PokemonGridItem, nextSection?: PokedexSection) => void;
  favoriteIds: Set<number>;
  toggleFavorite: (id: number) => void;
  selectedPokemonId: number;
  defaultVisible?: number;
}) {
  const [visibleCount, setVisibleCount] = useState(defaultVisible);
  return (
    <section className="explorer-panel">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-red-600 shadow-[0_0_24px_rgba(239,68,68,.45)]">
            <PokeBallIcon className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold">Pokémon Explorer</h2>
        </div>
        <span className="glass-button hidden sm:flex">
          {pokemonRows.length} visible
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-3">
        {typeFilters.slice(0, 9).map((type) => (
          <button
            key={type}
            type="button"
            className={`type-filter ${activeType === type ? "type-filter-active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
        {typeFilters.length > 9 ? (
          <span className="type-filter inline-flex items-center gap-2">
            More
            <ChevronDown className="h-4 w-4" />
          </span>
        ) : null}
      </div>

      {pokemonLoading ? <PanelMessage text="Loading connected Gen 1 Pokédex..." /> : null}
      {pokemonError ? <PanelMessage text={`Error loading Pokémon: ${pokemonError}`} /> : null}
      {!pokemonLoading && !pokemonError && pokemonRows.length === 0 ? <PanelMessage text="No Pokémon match that search." /> : null}

      <div className="pokemon-grid">
        {pokemonRows.slice(0, visibleCount).map((entry) => (
          <PokemonCard
            key={entry.id}
            pokemon={entry}
            selected={entry.id === selectedPokemonId}
            favorited={favoriteIds.has(entry.id)}
            onSelect={() => onSelectPokemon(entry, activeSection === "Dashboard" ? "Dashboard" : "Pokémon")}
            onFavorite={() => toggleFavorite(entry.id)}
          />
        ))}
      </div>

      {pokemonRows.length > visibleCount ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="action-button action-button-primary"
            onClick={() => setVisibleCount((count) => Math.min(count + 20, pokemonRows.length))}
          >
            Show more
          </button>
          <button
            type="button"
            className="action-button"
            onClick={() => setVisibleCount(pokemonRows.length)}
          >
            Show all {pokemonRows.length}
          </button>
        </div>
      ) : pokemonRows.length > defaultVisible ? (
        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            className="action-button"
            onClick={() => setVisibleCount(defaultVisible)}
          >
            Show fewer
          </button>
        </div>
      ) : null}
    </section>
  );
}

function CockpitGuidePanel({
  favoriteCount,
  teamCount,
  compareCount,
  onOpenPokemon,
  onOpenCompare,
  onOpenTeam,
  onOpenQuiz,
}: {
  favoriteCount: number;
  teamCount: number;
  compareCount: number;
  onOpenPokemon: () => void;
  onOpenCompare: () => void;
  onOpenTeam: () => void;
  onOpenQuiz: () => void;
}) {
  return (
    <section className="cockpit-guide">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Choose a task</p>
        <h2>Open a focused Pokédex workspace</h2>
        <p>
          The cockpit stays clean. Pick a Pokémon card for its profile, or open one tool at a time for deeper work.
        </p>
      </div>
      <div className="cockpit-guide-actions">
        <button type="button" className="cockpit-guide-button" onClick={onOpenPokemon}>
          <PokeBallIcon className="h-5 w-5" />
          Browse Pokémon
        </button>
        <button type="button" className="cockpit-guide-button" onClick={onOpenCompare}>
          <Shield className="h-5 w-5" />
          Compare Team <span>{compareCount}</span>
        </button>
        <button type="button" className="cockpit-guide-button" onClick={onOpenTeam}>
          <UsersRound className="h-5 w-5" />
          Team Builder <span>{teamCount}/6</span>
        </button>
        <button type="button" className="cockpit-guide-button" onClick={onOpenQuiz}>
          <BadgeQuestionMark className="h-5 w-5" />
          Quiz Mode
        </button>
        <div className="cockpit-guide-status">
          <Heart className="h-4 w-4 text-rose-300" />
          {favoriteCount} favorites saved
        </div>
      </div>
    </section>
  );
}

function SectionContent({
  activeSection,
  selectedDetails,
  selectedPokemon,
  pokemonRows,
  filteredPokemon,
  items,
  itemsLoading,
  encounters,
  favoritePokemon,
  teamPokemon,
  comparePokemon,
  compareDetails,
  quiz,
  statRows,
  onSelectPokemon,
  onSelectType,
  onToggleFavorite,
  onToggleTeam,
  onOpenQuiz,
}: {
  activeSection: PokedexSection;
  selectedDetails: PokemonDetails | null;
  selectedPokemon: PokemonGridItem | null;
  pokemonRows: PokemonGridItem[];
  filteredPokemon: PokemonGridItem[];
  items: ItemDexEntry[];
  itemsLoading: boolean;
  encounters: EncounterLocation[];
  favoritePokemon: PokemonGridItem[];
  teamPokemon: PokemonGridItem[];
  comparePokemon: PokemonGridItem[];
  compareDetails: Map<number, PokemonDetails>;
  quiz: QuizState | null;
  statRows: StatRow[];
  onSelectPokemon: (pokemon: PokemonGridItem, nextSection?: PokedexSection) => void;
  onSelectType: (type: string) => void;
  onToggleFavorite: (id: number) => void;
  onToggleTeam: (id: number) => void;
  onOpenQuiz: () => void;
}) {
  if (activeSection === "Moves") {
    return (
      <IntelPanel title={`${displayName(selectedDetails?.name ?? selectedPokemon?.name ?? "Selected")} Moves`} label="Move Database" icon={<Swords className="h-5 w-5 text-red-300" />}>
        <div className="grid gap-3 md:grid-cols-2">
          {(selectedDetails?.moves ?? []).map((move) => (
            <div key={move.name} className="data-row">
              <Image src={move.icon} alt="" width={30} height={30} className="h-8 w-8 object-contain" />
              <div>
                <p className="font-semibold">{displayName(move.name)}</p>
                <p className="text-xs text-slate-400">{displayName(move.type)} · {displayName(move.damageClass)} · PP {move.pp ?? "—"}</p>
              </div>
              <strong className="text-sm text-slate-100">{move.power ?? "Status"}</strong>
            </div>
          ))}
        </div>
      </IntelPanel>
    );
  }

  if (activeSection === "Items") {
    const selectedItems = selectedDetails?.itemInteractions ?? [];
    const catalog: ItemCardEntry[] = selectedItems.length ? selectedItems : items.slice(0, 18);
    return (
      <IntelPanel title={selectedItems.length ? `${displayName(selectedDetails?.name ?? "")} Item Links` : "Item Dex Catalog"} label="Item Dex" icon={<Box className="h-5 w-5 text-violet-300" />}>
        {itemsLoading ? <PanelMessage text="Loading connected item dex..." /> : null}
        <div className="grid gap-3 md:grid-cols-3">
          {catalog.map((item) => (
            <div key={`${item.id}-${item.name}`} className="data-card">
              <Image src={item.sprite || FALLBACK_ARTWORK} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              <p className="mt-2 font-semibold">{displayName(item.name)}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{item.shortEffect || ("contexts" in item ? item.contexts.join(" ") : "No effect text returned.")}</p>
            </div>
          ))}
        </div>
      </IntelPanel>
    );
  }

  if (activeSection === "Locations") {
    return (
      <IntelPanel title={`${displayName(selectedDetails?.name ?? selectedPokemon?.name ?? "Selected")} Encounter Locations`} label="Location Intel" icon={<MapPin className="h-5 w-5 text-emerald-300" />}>
        {encounters.length ? (
          <div className="grid gap-3 md:grid-cols-2">
            {encounters.map((location) => (
              <div key={location.name} className="data-card">
                <p className="font-semibold">{location.name}</p>
                <p className="mt-1 text-xs text-slate-400">{location.versions.slice(0, 4).join(", ") || "Version data unavailable"}</p>
              </div>
            ))}
          </div>
        ) : (
          <PanelMessage text="No wild encounter records returned by PokeAPI for this Pokémon." />
        )}
      </IntelPanel>
    );
  }

  if (activeSection === "Types") {
    const counts = typeCounts(pokemonRows);
    return (
      <IntelPanel title="Type Intelligence" label="Type Filters" icon={<Sparkles className="h-5 w-5 text-yellow-300" />}>
        <div className="grid gap-3 md:grid-cols-3">
          {counts.map(([type, count]) => (
            <button key={type} type="button" className="data-card text-left" onClick={() => onSelectType(displayName(type))}>
              <TypeBadge type={type} />
              <p className="mt-3 text-2xl font-black">{count}</p>
              <p className="text-xs text-slate-400">Gen 1 Pokémon</p>
            </button>
          ))}
        </div>
      </IntelPanel>
    );
  }

  if (activeSection === "Compare") {
    return (
      <IntelPanel title="Battle Comparison Mode" label="Compare" icon={<Shield className="h-5 w-5 text-blue-300" />}>
        <div className="grid gap-4 md:grid-cols-2">
          {comparePokemon.map((pokemon) => (
            <CompareCard
              key={pokemon.id}
              pokemon={pokemon}
              details={compareDetails.get(pokemon.id) ?? (pokemon.id === selectedPokemon?.id ? selectedDetails : null)}
              onSelect={() => onSelectPokemon(pokemon, "Compare")}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-400">Use any Pokémon card or the detail-panel Compare button to replace the comparison lineup. Both cards load live base stats from PokeAPI.</p>
      </IntelPanel>
    );
  }

  if (activeSection === "Favorites") {
    return (
      <CollectionPanel
        title="Favorites"
        label={`${favoritePokemon.length} saved`}
        pokemonRows={favoritePokemon}
        emptyText="No favorites yet. Use the heart button on Pokémon cards to save them here."
        onSelectPokemon={(pokemon) => onSelectPokemon(pokemon, "Favorites")}
        actionLabel="Remove"
        onAction={onToggleFavorite}
      />
    );
  }

  if (activeSection === "Team Builder") {
    return (
      <CollectionPanel
        title="Team Builder"
        label={`${teamPokemon.length}/6 slots`}
        pokemonRows={teamPokemon}
        emptyText="Your team is empty. Use Add to Team on the detail panel to build a six-Pokémon roster."
        onSelectPokemon={(pokemon) => onSelectPokemon(pokemon, "Team Builder")}
        actionLabel="Remove"
        onAction={onToggleTeam}
      />
    );
  }

  if (activeSection === "Quiz Mode") {
    return (
      <IntelPanel title="Quiz Mode" label={`Score ${quiz?.correct ?? 0}/${quiz?.total ?? 0}`} icon={<BadgeQuestionMark className="h-5 w-5 text-fuchsia-300" />}>
        <div className="quiz-launch-card">
          <Image
            src="/who_s_that_pokemon__by_amitlu89_d47rmjf-375w-2x.jpg"
            alt="Who is that Pokemon quiz scene"
            width={750}
            height={1046}
            className="quiz-launch-art"
          />
          <div className="relative z-10 max-w-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Full-screen game mode</p>
            <h4 className="mt-3 text-3xl font-black text-white">Who&apos;s That Pokémon?</h4>
            <p className="mt-3 text-sm leading-6 text-blue-50">
              Opens a dedicated game window with the show-style blue stage, animated mystery silhouette,
              answer scoring, and a reveal state for correct or incorrect guesses.
            </p>
            <button type="button" className="action-button action-button-primary mt-5" onClick={onOpenQuiz}>
              Open Quiz Window
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </IntelPanel>
    );
  }

  if (activeSection === "About") {
    return (
      <IntelPanel title="About This Intelligence Database" label="About" icon={<Info className="h-5 w-5 text-cyan-300" />}>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="data-card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Data Layer</p>
            <p className="mt-3 text-lg font-black">PokeAPI Connected</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Pokémon, moves, evolution chains, held items, encounter areas, sprites, and stat records are loaded from live API responses.
            </p>
          </div>
          <div className="data-card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Program State</p>
            <p className="mt-3 text-lg font-black">Shared Controls</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Search, type filters, selected Pokémon, favorites, team slots, compare lineup, and quiz score all update shared app state.
            </p>
          </div>
          <div className="data-card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current Scope</p>
            <p className="mt-3 text-lg font-black">Gen 1 Live</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {pokemonRows.length} Pokémon, {typeCounts(pokemonRows).length} types, {items.length} item records, and selected-Pokémon encounter data.
            </p>
          </div>
        </div>
      </IntelPanel>
    );
  }

  return (
    <div className="space-y-4">
      <IntelligencePanels
        selectedDetails={selectedDetails}
        selectedPokemon={selectedPokemon}
        encounters={encounters}
        comparePokemon={comparePokemon}
        statRows={statRows}
      />
      {activeSection === "Pokémon" ? (
        <p className="px-1 text-sm text-slate-400">Showing {filteredPokemon.length} connected Gen 1 records from PokeAPI.</p>
      ) : null}
    </div>
  );
}

function PokedexWindowLayer({
  windows,
  activeTab,
  setActiveTab,
  selectedPokemon,
  selectedDetails,
  statRows,
  encounters,
  pokemonRows,
  filteredPokemon,
  items,
  itemsLoading,
  favoritePokemon,
  teamPokemon,
  comparePokemon,
  compareDetails,
  onClose,
  onFocus,
  onSelectPokemon,
  onSelectType,
  onToggleFavorite,
  onToggleTeam,
}: {
  windows: PokedexWindowState[];
  activeTab: (typeof DETAILS_TABS)[number];
  setActiveTab: (tab: (typeof DETAILS_TABS)[number]) => void;
  selectedPokemon: PokemonGridItem | null;
  selectedDetails: PokemonDetails | null;
  statRows: StatRow[];
  encounters: EncounterLocation[];
  pokemonRows: PokemonGridItem[];
  filteredPokemon: PokemonGridItem[];
  items: ItemDexEntry[];
  itemsLoading: boolean;
  favoritePokemon: PokemonGridItem[];
  teamPokemon: PokemonGridItem[];
  comparePokemon: PokemonGridItem[];
  compareDetails: Map<number, PokemonDetails>;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onSelectPokemon: (pokemon: PokemonGridItem, nextSection?: PokedexSection) => void;
  onSelectType: (type: string) => void;
  onToggleFavorite: (id: number) => void;
  onToggleTeam: (id: number) => void;
}) {
  if (!windows.length) {
    return null;
  }

  return (
    <section className="pokedex-window-layer" aria-label="Open Pokédex windows">
      {windows.map((window, index) => (
        <article
          key={window.id}
          className="pokedex-window"
          style={{ zIndex: 40 + index, transform: `translate(${index * 14}px, ${index * 10}px)` }}
          onMouseDown={() => onFocus(window.id)}
        >
          <header className="pokedex-window-titlebar">
            <div>
              <p>{window.kind === "PokemonProfile" ? "Pokémon Profile" : "Tool Window"}</p>
              <h2>{window.title}</h2>
            </div>
            <button type="button" className="pokedex-window-close" onClick={() => onClose(window.id)} aria-label={`Close ${window.title}`}>
              <X className="h-5 w-5" />
            </button>
          </header>
          <div className="pokedex-window-content">
            <PokedexWindowContent
              window={window}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedPokemon={selectedPokemon}
              selectedDetails={selectedDetails}
              statRows={statRows}
              encounters={encounters}
              pokemonRows={pokemonRows}
              filteredPokemon={filteredPokemon}
              items={items}
              itemsLoading={itemsLoading}
              favoritePokemon={favoritePokemon}
              teamPokemon={teamPokemon}
              comparePokemon={comparePokemon}
              compareDetails={compareDetails}
              onSelectPokemon={onSelectPokemon}
              onSelectType={onSelectType}
              onToggleFavorite={onToggleFavorite}
              onToggleTeam={onToggleTeam}
            />
          </div>
        </article>
      ))}
    </section>
  );
}

function PokedexWindowContent({
  window,
  activeTab,
  setActiveTab,
  selectedPokemon,
  selectedDetails,
  statRows,
  encounters,
  pokemonRows,
  filteredPokemon,
  items,
  itemsLoading,
  favoritePokemon,
  teamPokemon,
  comparePokemon,
  compareDetails,
  onSelectPokemon,
  onSelectType,
  onToggleFavorite,
  onToggleTeam,
}: {
  window: PokedexWindowState;
  activeTab: (typeof DETAILS_TABS)[number];
  setActiveTab: (tab: (typeof DETAILS_TABS)[number]) => void;
  selectedPokemon: PokemonGridItem | null;
  selectedDetails: PokemonDetails | null;
  statRows: StatRow[];
  encounters: EncounterLocation[];
  pokemonRows: PokemonGridItem[];
  filteredPokemon: PokemonGridItem[];
  items: ItemDexEntry[];
  itemsLoading: boolean;
  favoritePokemon: PokemonGridItem[];
  teamPokemon: PokemonGridItem[];
  comparePokemon: PokemonGridItem[];
  compareDetails: Map<number, PokemonDetails>;
  onSelectPokemon: (pokemon: PokemonGridItem, nextSection?: PokedexSection) => void;
  onSelectType: (type: string) => void;
  onToggleFavorite: (id: number) => void;
  onToggleTeam: (id: number) => void;
}) {
  if (window.kind === "PokemonProfile") {
    const pokemon = pokemonRows.find((entry) => entry.id === window.pokemonId) ?? selectedPokemon;
    const isSelected = pokemon?.id === selectedPokemon?.id;
    return (
      <PokemonProfileWindow
        pokemon={pokemon}
        details={isSelected ? selectedDetails : null}
        statRows={isSelected ? statRows : []}
        encounters={isSelected ? encounters : []}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  }

  const activeSection = windowKindToSection(window.kind);
  return (
    <SectionContent
      activeSection={activeSection}
      selectedDetails={selectedDetails}
      selectedPokemon={selectedPokemon}
      pokemonRows={pokemonRows}
      filteredPokemon={filteredPokemon}
      items={items}
      itemsLoading={itemsLoading}
      encounters={encounters}
      favoritePokemon={favoritePokemon}
      teamPokemon={teamPokemon}
      comparePokemon={comparePokemon}
      compareDetails={compareDetails}
      quiz={null}
      statRows={statRows}
      onSelectPokemon={onSelectPokemon}
      onSelectType={onSelectType}
      onToggleFavorite={onToggleFavorite}
      onToggleTeam={onToggleTeam}
      onOpenQuiz={() => undefined}
    />
  );
}

function PokemonProfileWindow({
  pokemon,
  details,
  statRows,
  encounters,
  activeTab,
  setActiveTab,
}: {
  pokemon: PokemonGridItem | null;
  details: PokemonDetails | null;
  statRows: StatRow[];
  encounters: EncounterLocation[];
  activeTab: (typeof DETAILS_TABS)[number];
  setActiveTab: (tab: (typeof DETAILS_TABS)[number]) => void;
}) {
  return (
    <div className="profile-window-layout">
      <section className="profile-window-hero">
        <div>
          <p className="text-sm text-slate-300">{pokemon ? dexNumber(pokemon.id) : "#---"}</p>
          <h3>{displayName(details?.name ?? pokemon?.name ?? "Pokémon")}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {(details?.types ?? pokemon?.types ?? []).map((type) => <TypeBadge key={type} type={type} />)}
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            {details?.description ?? "This profile window is connected to the selected Pokémon. Choose a Pokémon from the explorer to load its full live profile."}
          </p>
        </div>
        <Image
          src={pokemon ? resolvePokemonArtwork(pokemon) : FALLBACK_ARTWORK}
          alt={displayName(details?.name ?? pokemon?.name ?? "Pokémon")}
          width={230}
          height={230}
          className="profile-window-art"
        />
      </section>
      <div className="details-tabs profile-window-tabs" role="tablist" aria-label="Window Pokemon detail tabs">
        {DETAILS_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? "details-tab details-tab-active" : "details-tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <DetailTabContent tab={activeTab} selectedDetails={details} encounters={encounters} statRows={statRows} />
    </div>
  );
}

function IntelligencePanels({
  selectedDetails,
  selectedPokemon,
  encounters,
  comparePokemon,
  statRows,
}: {
  selectedDetails: PokemonDetails | null;
  selectedPokemon: PokemonGridItem | null;
  encounters: EncounterLocation[];
  comparePokemon: PokemonGridItem[];
  statRows: StatRow[];
}) {
  return (
    <section className="intel-grid" aria-label="Pokémon Intelligence Database">
      <div className="intel-panel">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">Evolution Timeline</p>
            <h3 className="mt-1">{displayName(selectedDetails?.name ?? selectedPokemon?.name ?? "Pokémon")} Lineage</h3>
          </div>
          <span className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs text-red-100">Live API</span>
        </div>
        <div className="space-y-3">
          {(selectedDetails?.evolutionChain ?? []).map((entry) => (
            <div key={`${entry.id}-${entry.stage}`} className="evolution-node">
              <Image src={entry.image} alt={displayName(entry.name)} width={40} height={40} className="object-contain" />
              <div>
                <p className="font-semibold">{displayName(entry.name)}</p>
                <p className="text-xs text-slate-400">{entry.requirements.join(", ") || "Base form"}</p>
              </div>
              <span className="rounded-md border border-slate-600/70 bg-slate-900/60 px-2 py-1 text-xs text-slate-200">Stage {entry.stage}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="intel-panel">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">Battle Comparison</p>
            <h3 className="mt-1">{comparePokemon.map((pokemon) => displayName(pokemon.name)).join(" vs ") || "Select two Pokémon"}</h3>
          </div>
          <Swords className="h-5 w-5 text-red-300" />
        </div>
        <div>
          {statRows.slice(1, 6).map((row) => (
            <div key={row.label} className="compare-row">
              <span className="w-16 text-sm text-slate-300">{row.label}</span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-slate-900">
                <span className="block h-full rounded-full bg-gradient-to-r from-red-500 to-orange-300" style={{ width: `${Math.min(100, row.value)}%` }} />
              </span>
              <strong className="w-8 text-right text-sm">{row.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="intel-panel md:col-span-2">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">Location Intel</p>
            <h3 className="mt-1">{encounters.length ? `${encounters.length} Encounter Areas` : "No Wild Encounters Returned"}</h3>
          </div>
          <MapPin className="h-5 w-5 text-violet-300" />
        </div>
        <div className="grid gap-x-8 md:grid-cols-3">
          {encounters.slice(0, 6).map((location) => (
            <div key={location.name} className="item-row">
              <div>
                <p className="font-semibold">{location.name}</p>
                <p className="text-xs text-slate-400">{location.versions.slice(0, 2).join(", ") || "Encounter record"}</p>
              </div>
            </div>
          ))}
          {!encounters.length ? <p className="text-sm text-slate-400">PokeAPI has no location-area encounter entries for this selection.</p> : null}
        </div>
      </div>
    </section>
  );
}

function PokemonCard({
  pokemon,
  selected,
  favorited,
  onSelect,
  onFavorite,
}: {
  pokemon: PokemonGridItem;
  selected: boolean;
  favorited: boolean;
  onSelect: () => void;
  onFavorite: () => void;
}) {
  return (
    <article className={`pokemon-card ${selected ? "pokemon-card-selected" : ""}`}>
      <div className="relative z-10 flex items-start justify-between">
        <span className="text-sm text-slate-300">{dexNumber(pokemon.id)}</span>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onFavorite();
          }}
          className={`favorite-button ${favorited ? "favorite-button-active" : ""}`}
          aria-label={`Favorite ${displayName(pokemon.name)}`}
        >
          <Heart className="h-5 w-5" fill={favorited ? "currentColor" : "none"} />
        </button>
      </div>
      <button type="button" className="relative z-10 grid h-24 w-full place-items-center" onClick={onSelect} aria-label={`Select ${displayName(pokemon.name)}`}>
        <Image src={resolvePokemonArtwork(pokemon)} alt={displayName(pokemon.name)} width={142} height={142} className="pointer-events-none h-24 w-32 object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,.55)]" />
      </button>
      <div className="relative z-10">
        <h3 className="font-semibold">{displayName(pokemon.name)}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
    </article>
  );
}

function DetailsPanel({
  selectedPokemon,
  selectedName,
  selectedArtwork,
  selectedDetails,
  detailsLoading,
  detailsError,
  statRows,
  encounters,
  activeTab,
  setActiveTab,
  inTeam,
  inCompare,
  onOpenProfile,
  onToggleTeam,
  onToggleCompare,
}: {
  selectedPokemon: PokemonGridItem | null;
  selectedName: string;
  selectedArtwork: string;
  selectedDetails: PokemonDetails | null;
  detailsLoading: boolean;
  detailsError: string | null;
  statRows: StatRow[];
  encounters: EncounterLocation[];
  activeTab: (typeof DETAILS_TABS)[number];
  setActiveTab: (tab: (typeof DETAILS_TABS)[number]) => void;
  inTeam: boolean;
  inCompare: boolean;
  onOpenProfile: () => void;
  onToggleTeam: () => void;
  onToggleCompare: () => void;
}) {
  return (
    <aside className="details-panel">
      <section className="details-hero">
        <div className="relative z-10">
          <p className="text-base text-slate-300">{selectedPokemon ? dexNumber(selectedPokemon.id) : "#---"}</p>
          <div className="mt-1 flex items-center gap-3">
            <h2>{displayName(selectedName)}</h2>
            <Star className="h-6 w-6 text-yellow-300" />
          </div>
          <div className="mt-3 flex gap-2">
            {(selectedDetails?.types ?? selectedPokemon?.types ?? []).map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>
        </div>
        <Image src={selectedArtwork} alt={displayName(selectedName)} width={350} height={350} loading="eager" className="details-pokemon" />
      </section>

      <div className="details-tabs" role="tablist" aria-label="Pokemon detail tabs">
        {DETAILS_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? "details-tab details-tab-active" : "details-tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {detailsLoading ? <p className="mt-6 text-sm text-slate-300">Loading live Pokédex profile...</p> : null}
      {detailsError ? <p className="mt-6 text-sm text-red-300">{detailsError}</p> : null}

      <DetailTabContent
        tab={activeTab}
        selectedDetails={selectedDetails}
        encounters={encounters}
        statRows={statRows}
      />

      <div className="details-actions">
        <button type="button" className="action-button" onClick={onOpenProfile}>
          <PanelTop className="h-4 w-4" />
          Open Profile
        </button>
        <button type="button" className="action-button action-button-primary" onClick={onToggleTeam}>
          <UsersRound className="h-4 w-4" />
          {inTeam ? "Remove Team" : "Add to Team"}
        </button>
        <button type="button" className="action-button" onClick={onToggleCompare}>
          <Shield className="h-4 w-4" />
          {inCompare ? "Remove Compare" : "Compare"}
        </button>
      </div>
    </aside>
  );
}

function DetailTabContent({
  tab,
  selectedDetails,
  encounters,
  statRows,
}: {
  tab: (typeof DETAILS_TABS)[number];
  selectedDetails: PokemonDetails | null;
  encounters: EncounterLocation[];
  statRows: StatRow[];
}) {
  if (tab === "Stats") {
    return (
      <section className="stats-panel mt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="mb-4 text-base font-bold">Base Stats</h3>
            <StatBars statRows={statRows} />
          </div>
          <RadarChart statRows={statRows} />
        </div>
      </section>
    );
  }

  if (tab === "Moves") {
    return (
      <section className="mini-panel mt-5">
        <h3>Learned Moves</h3>
        <div className="mt-4 space-y-3">
          {(selectedDetails?.moves ?? []).slice(0, 8).map((move) => (
            <div key={move.name} className="data-row">
              <Image src={move.icon} alt="" width={26} height={26} className="h-7 w-7 object-contain" />
              <p className="min-w-0 text-xs text-slate-400">
                <span className="block truncate font-semibold text-slate-100">{displayName(move.name)}</span>
                {displayName(move.type)} / {displayName(move.damageClass)}
              </p>
              <strong className="text-xs text-slate-100">{move.power ?? "Status"}</strong>
            </div>
          ))}
          {!selectedDetails?.moves.length ? <p className="text-xs text-slate-400">No move records loaded yet.</p> : null}
        </div>
      </section>
    );
  }

  if (tab === "Evolution") {
    return (
      <section className="mini-panel mt-5">
        <h3>Evolution Timeline</h3>
        <div className="mt-4 space-y-3">
          {(selectedDetails?.evolutionChain ?? []).map((entry) => (
            <div key={entry.id} className="evolution-node">
              <Image src={entry.image} alt="" width={36} height={36} className="object-contain" />
              <div>
                <p className="text-sm font-semibold">{displayName(entry.name)}</p>
                <p className="text-xs text-slate-400">{entry.requirements[0] ?? (entry.from ? `Evolves from ${displayName(entry.from)}` : `Stage ${entry.stage}`)}</p>
              </div>
              <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">Stage {entry.stage}</span>
            </div>
          ))}
          {!selectedDetails?.evolutionChain.length ? <p className="text-xs text-slate-400">No evolution chain returned.</p> : null}
        </div>
      </section>
    );
  }

  if (tab === "Locations") {
    return (
      <section className="mini-panel mt-5">
        <h3>Encounter Locations</h3>
        <div className="mt-4 space-y-3">
          {encounters.slice(0, 8).map((location) => (
            <div key={location.name} className="data-card min-h-0">
              <p className="text-sm font-semibold">{location.name}</p>
              <p className="mt-1 text-xs text-slate-400">{location.versions.slice(0, 3).join(", ") || "Version data unavailable"}</p>
            </div>
          ))}
          {!encounters.length ? <p className="text-xs text-slate-400">No encounter locations returned.</p> : null}
        </div>
      </section>
    );
  }

  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
      <section className="mini-panel">
        <h3>Overview</h3>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          {selectedDetails?.description || "Select a Pokémon to load the connected profile."}
        </p>
        <div className="mt-4 space-y-3 text-xs text-slate-400">
          <p>Height: {selectedDetails ? `${selectedDetails.height / 10}m` : "—"}</p>
          <p>Weight: {selectedDetails ? `${selectedDetails.weight / 10}kg` : "—"}</p>
          <p>Capture rate: {selectedDetails?.breeding.captureRate ?? "—"}</p>
          <p>Growth rate: {selectedDetails?.breeding.growthRate ? displayName(selectedDetails.breeding.growthRate) : "—"}</p>
        </div>
      </section>
      <section className="mini-panel">
        <h3>Abilities</h3>
        <div className="mt-4 space-y-5">
          {(selectedDetails?.abilities ?? []).map((ability) => (
            <div key={ability}>
              <p className="font-semibold">{displayName(ability)}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">Loaded from this Pokémon&apos;s ability list.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatBars({ statRows }: { statRows: StatRow[] }) {
  return (
    <div className="space-y-3">
      {statRows.map((row) => (
        <div key={row.label} className="grid grid-cols-[70px_1fr_36px] items-center gap-3 text-sm">
          <span>{row.label}</span>
          <span className="h-1.5 overflow-hidden rounded-full bg-slate-900">
            <span
              className={`block h-full rounded-full bg-gradient-to-r ${statColors[row.label]}`}
              style={{ width: `${Math.min(100, (row.value / 120) * 100)}%` }}
            />
          </span>
          <strong className="font-semibold text-slate-100">{row.value}</strong>
        </div>
      ))}
    </div>
  );
}

function CollectionPanel({
  title,
  label,
  pokemonRows,
  emptyText,
  onSelectPokemon,
  actionLabel,
  onAction,
}: {
  title: string;
  label: string;
  pokemonRows: PokemonGridItem[];
  emptyText: string;
  onSelectPokemon: (pokemon: PokemonGridItem) => void;
  actionLabel: string;
  onAction: (id: number) => void;
}) {
  return (
    <IntelPanel title={title} label={label} icon={<Heart className="h-5 w-5 text-rose-300" />}>
      {!pokemonRows.length ? <PanelMessage text={emptyText} /> : null}
      <div className="grid gap-3 md:grid-cols-3">
        {pokemonRows.map((pokemon) => (
          <div key={pokemon.id} className="data-card">
            <button type="button" onClick={() => onSelectPokemon(pokemon)} className="grid w-full place-items-center">
              <Image src={resolvePokemonArtwork(pokemon)} alt={displayName(pokemon.name)} width={112} height={112} className="h-24 w-24 object-contain" />
              <p className="font-semibold">{displayName(pokemon.name)}</p>
            </button>
            <button type="button" className="mt-3 text-xs text-red-300" onClick={() => onAction(pokemon.id)}>
              {actionLabel}
            </button>
          </div>
        ))}
      </div>
    </IntelPanel>
  );
}

function CompareCard({
  pokemon,
  details,
  onSelect,
}: {
  pokemon: PokemonGridItem;
  details: PokemonDetails | null;
  onSelect: () => void;
}) {
  const stats = mapDetailsToStatRows(details);
  const total = stats.reduce((sum, row) => sum + row.value, 0);

  return (
    <button type="button" className="data-card text-left" onClick={onSelect}>
      <div className="flex items-center gap-3">
        <Image src={resolvePokemonArtwork(pokemon)} alt={displayName(pokemon.name)} width={76} height={76} className="h-16 w-16 object-contain" />
        <div>
          <p className="font-semibold">{displayName(pokemon.name)}</p>
          <p className="text-xs text-slate-400">{pokemon.types.map(displayName).join(" / ")}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {stats.slice(0, 6).map((row) => (
          <p key={row.label} className="flex justify-between text-xs text-slate-300">
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </p>
        ))}
        {details ? (
          <p className="border-t border-slate-700/70 pt-2 text-xs font-bold text-slate-100">Base total {total}</p>
        ) : (
          <p className="text-xs text-slate-400">Loading live stats...</p>
        )}
      </div>
    </button>
  );
}

function QuizGameModal({
  open,
  quiz,
  pokemonRows,
  onClose,
  onAnswer,
  onNext,
}: {
  open: boolean;
  quiz: QuizState | null;
  pokemonRows: PokemonGridItem[];
  onClose: () => void;
  onAnswer: (answer: string) => void;
  onNext: () => void;
}) {
  if (!open) {
    return null;
  }

  const mysteryName = quiz ? displayName(quiz.answer) : "Mystery Pokémon";
  const artwork = quiz ? resolvePokemonArtworkById(pokemonRows, quiz.pokemonId) : FALLBACK_ARTWORK;
  const answered = Boolean(quiz?.selected);

  return (
    <section className="quiz-window" role="dialog" aria-modal="true" aria-label="Who's That Pokémon game">
      <div className="quiz-window-backdrop" />
      <div className="quiz-show-card">
        <Image
          src="/who_s_that_pokemon__by_amitlu89_d47rmjf-375w-2x.jpg"
          alt=""
          fill
          sizes="100vw"
          className="quiz-show-bg"
          priority
        />
        <div className="quiz-show-flash" />
        <button type="button" className="quiz-close" onClick={onClose} aria-label="Close quiz game">
          <X className="h-6 w-6" />
        </button>
        <div className="quiz-scoreboard">
          <span>Score</span>
          <strong>{quiz?.correct ?? 0}/{quiz?.total ?? 0}</strong>
        </div>
        <div className="quiz-stage">
          <div className="quiz-title-lockup">
            <p>Who&apos;s That</p>
            <h2>Pokémon?</h2>
          </div>
          <div className={answered ? "quiz-mystery quiz-mystery-revealed" : "quiz-mystery"}>
            <Image src={artwork} alt={answered ? mysteryName : "Mystery Pokémon silhouette"} width={360} height={360} className="quiz-mystery-art" />
          </div>
          {quiz?.selected ? (
            <div className={quiz.wasCorrect ? "quiz-result quiz-result-correct" : "quiz-result quiz-result-wrong"}>
              {quiz.wasCorrect ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
              <div>
                <p>{quiz.wasCorrect ? "Correct!" : "Not quite!"}</p>
                <strong>It&apos;s {mysteryName}!</strong>
              </div>
            </div>
          ) : (
            <p className="quiz-prompt">Guess the silhouette before the reveal.</p>
          )}
        </div>
        <div className="quiz-answer-panel">
          {quiz ? (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                {quiz.options.map((option) => {
                  const isCorrect = option === quiz.answer;
                  const isSelected = option === quiz.selected;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={answered}
                      className={`quiz-option ${answered && isCorrect ? "quiz-option-correct" : ""} ${answered && isSelected && !isCorrect ? "quiz-option-wrong" : ""}`}
                      onClick={() => onAnswer(option)}
                    >
                      {displayName(option)}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" className="action-button action-button-primary" onClick={answered ? onNext : undefined} disabled={!answered}>
                  Next Question
                </button>
                <button type="button" className="action-button" onClick={onClose}>
                  Back to Database
                </button>
              </div>
            </>
          ) : (
            <PanelMessage text="Loading quiz..." />
          )}
        </div>
      </div>
    </section>
  );
}

function IntelPanel({
  title,
  label,
  icon,
  children,
}: {
  title: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="intel-panel md:col-span-2">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{label}</p>
          <h3 className="mt-1">{title}</h3>
        </div>
        {icon}
      </div>
      {children}
    </section>
  );
}

function PanelMessage({ text }: { text: string }) {
  return <div className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-6 text-center text-sm text-slate-300">{text}</div>;
}

function TypeBadge({ type }: { type: string }) {
  return <span className={`type-badge ${typeStyles[type.toLowerCase()] ?? "border-slate-500/70 bg-slate-500/10 text-slate-200"}`}>{displayName(type)}</span>;
}

function RadarChart({ statRows }: { statRows: StatRow[] }) {
  const points = radarPoints(statRows);
  return (
    <div className="radar-wrap" aria-hidden="true">
      <span className="radar-label radar-top">HP</span>
      <span className="radar-label radar-right">Attack</span>
      <span className="radar-label radar-bottom-right">Defense</span>
      <span className="radar-label radar-bottom">Speed</span>
      <span className="radar-label radar-bottom-left">Sp. Def</span>
      <span className="radar-label radar-left">Sp. Atk</span>
      <svg viewBox="0 0 150 150" className="h-full w-full">
        <polygon points="75,12 130,43 130,107 75,138 20,107 20,43" fill="none" stroke="rgba(148,163,184,.35)" />
        <polygon points="75,30 114,52 114,98 75,120 36,98 36,52" fill="none" stroke="rgba(148,163,184,.16)" />
        <polygon points="75,48 98,61 98,89 75,102 52,89 52,61" fill="none" stroke="rgba(148,163,184,.13)" />
        <path d="M75 12V138M20 43L130 107M130 43L20 107" stroke="rgba(148,163,184,.22)" />
        <polygon points={points} fill="rgba(239,68,68,.45)" stroke="#ef4444" strokeWidth="2" />
      </svg>
    </div>
  );
}

function PokeBallIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="currentColor" opacity=".98" />
      <path d="M3 16h26" stroke="#050816" strokeWidth="4" />
      <path d="M4 14a14 14 0 0 1 24 0Z" fill="#ef4444" />
      <path d="M4 18a14 14 0 0 0 24 0Z" fill="#f8fafc" />
      <circle cx="16" cy="16" r="6" fill="#050816" />
      <circle cx="16" cy="16" r="3.4" fill="#f8fafc" />
    </svg>
  );
}

async function fetchEncounterLocations(name: string): Promise<EncounterLocation[]> {
  const response = await fetch(`${BASE_URL}/pokemon/${name}/encounters`);
  if (!response.ok) {
    return [];
  }
  const data: { location_area: { name: string }; version_details: { version: { name: string } }[] }[] = await response.json();
  return data.slice(0, 24).map((entry) => ({
    name: displayName(entry.location_area.name),
    versions: entry.version_details.map((detail) => displayName(detail.version.name)),
  }));
}

function resolvePokemonArtwork(pokemon: PokemonGridItem): string {
  return pokemon.sprites.find((sprite) => sprite.key === "official-artwork")?.url ?? pokemon.image ?? FALLBACK_ARTWORK;
}

function resolvePokemonArtworkById(pokemonRows: PokemonGridItem[], id: number): string {
  const pokemon = pokemonRows.find((entry) => entry.id === id);
  return pokemon ? resolvePokemonArtwork(pokemon) : FALLBACK_ARTWORK;
}

function sectionToWindow(section: PokedexSection): { kind: PokedexWindowKind; title: string } {
  switch (section) {
    case "Pokémon":
      return { kind: "PokemonExplorer", title: "Pokémon Explorer" };
    case "Moves":
      return { kind: "Moves", title: "Move Dex" };
    case "Items":
      return { kind: "Items", title: "Item Dex" };
    case "Locations":
      return { kind: "Locations", title: "Location Intel" };
    case "Types":
      return { kind: "Types", title: "Type Intelligence" };
    case "Compare":
      return { kind: "Compare", title: "Battle Comparison" };
    case "Favorites":
      return { kind: "Favorites", title: "Favorites" };
    case "Team Builder":
      return { kind: "TeamBuilder", title: "Team Builder" };
    case "About":
      return { kind: "About", title: "About This Database" };
    case "Quiz Mode":
      return { kind: "QuizMode", title: "Quiz Mode" };
    case "Dashboard":
    default:
      return { kind: "PokemonExplorer", title: "Pokémon Explorer" };
  }
}

function windowKindToSection(kind: PokedexWindowKind): PokedexSection {
  switch (kind) {
    case "PokemonExplorer":
      return "Pokémon";
    case "TeamBuilder":
      return "Team Builder";
    case "QuizMode":
      return "Quiz Mode";
    case "Moves":
    case "Items":
    case "Locations":
    case "Types":
    case "Compare":
    case "Favorites":
    case "About":
      return kind;
    case "PokemonProfile":
      return "Pokémon";
  }
}

function typeCounts(pokemonRows: PokemonGridItem[]): [string, number][] {
  const counts = new Map<string, number>();
  for (const pokemon of pokemonRows) {
    for (const type of pokemon.types) {
      counts.set(type, (counts.get(type) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
}

function radarPoints(statRows: StatRow[]): string {
  const byLabel = new Map(statRows.map((row) => [row.label, row.value]));
  const max = 120;
  const coordinates: Record<StatRow["label"], [number, number]> = {
    HP: [75, 12],
    Attack: [130, 43],
    Defense: [130, 107],
    Speed: [75, 138],
    "Sp. Def": [20, 107],
    "Sp. Atk": [20, 43],
  };
  return (Object.keys(coordinates) as StatRow["label"][])
    .map((label) => {
      const [x, y] = coordinates[label];
      const ratio = Math.min(1, (byLabel.get(label) ?? 0) / max);
      return `${75 + (x - 75) * ratio},${75 + (y - 75) * ratio}`;
    })
    .join(" ");
}
