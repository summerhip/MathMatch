import { useState, useCallback } from "react";
import "./App.css";
import {
  ALGEBRA_PAIRS,
  GEOMETRY_PAIRS,
  PRECALC_PAIRS,
  PAIR_COLORS,
  PAIRS_PER_GAME,
} from "./gameData";

const CATEGORIES = {
  algebra: {
    label: "Algebra",
    pairs: ALGEBRA_PAIRS,
    desc: "Solve for x",
    sample: ["2x = 8", "x \u2212 1 = 3"],
  },
  geometry: {
    label: "Geometry",
    pairs: GEOMETRY_PAIRS,
    desc: "Match the angles",
    sample: ["x\u00b0 + 40\u00b0 = 90\u00b0", "2x\u00b0 = 100\u00b0"],
  },
  precalc: {
    label: "Precalculus",
    pairs: PRECALC_PAIRS,
    desc: "Logs & exponents",
    sample: ["log\u2082(x) = 3", "x \u2212 6 = 2"],
  },
};

function createCards(pairs) {
  const picked = [...pairs]
    .sort(() => Math.random() - 0.5)
    .slice(0, PAIRS_PER_GAME);
  const cards = [];
  picked.forEach((pair) => {
    cards.push({ uid: `${pair.id}-a`, pairId: pair.id, text: pair.a });
    cards.push({ uid: `${pair.id}-b`, pairId: pair.id, text: pair.b });
  });
  return cards.sort(() => Math.random() - 0.5);
}

function StartPage({ onSelect }) {
  return (
    <div className="start-wrap">
      <div className="start-header">
        <h1>MathMatch</h1>
        <p className="subtitle">Select a topic to begin</p>
      </div>
      <div className="category-grid">
        {Object.entries(CATEGORIES).map(([key, cat]) => (
          <button
            key={key}
            className="category-card"
            onClick={() => onSelect(key)}
          >
            <span className="cat-label">{cat.label}</span>
            <span className="cat-desc">{cat.desc}</span>
            <div className="cat-sample">
              <span>{cat.sample[0]}</span>
              <span className="cat-eq-sep">&#8596;</span>
              <span>{cat.sample[1]}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [category, setCategory] = useState(null);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [wrong, setWrong] = useState([]);

  const startGame = useCallback((cat) => {
    setCategory(cat);
    setCards(createCards(CATEGORIES[cat].pairs));
    setSelected([]);
    setMatched(new Set());
    setMoves(0);
    setLocked(false);
    setWrong([]);
  }, []);

  const won =
    category !== null && matched.size === cards.length && cards.length > 0;

  const handleClick = useCallback(
    (index) => {
      if (locked) return;
      if (selected.includes(index)) return;
      if (matched.has(cards[index].uid)) return;
      if (won) return;

      const newSelected = [...selected, index];
      setSelected(newSelected);

      if (newSelected.length === 2) {
        setMoves((m) => m + 1);
        setLocked(true);
        const [i, j] = newSelected;
        if (cards[i].pairId === cards[j].pairId) {
          setMatched((prev) => new Set([...prev, cards[i].uid, cards[j].uid]));
          setSelected([]);
          setLocked(false);
        } else {
          setWrong([i, j]);
          setTimeout(() => {
            setSelected([]);
            setWrong([]);
            setLocked(false);
          }, 900);
        }
      }
    },
    [locked, selected, matched, cards, won],
  );

  if (category === null) {
    return <StartPage onSelect={startGame} />;
  }

  return (
    <div className="game-wrap">
      <div className="game-header">
        <h1>MathMatch</h1>
        <span className="cat-badge">{CATEGORIES[category].label}</span>
        <div className="stats">
          <div className="stat">
            <span className="stat-val">{moves}</span>
            <span className="stat-lbl">Moves</span>
          </div>
          <div className="stat">
            <span className="stat-val">
              {matched.size / 2} / {PAIRS_PER_GAME}
            </span>
            <span className="stat-lbl">Matched</span>
          </div>
        </div>
      </div>

      {won && (
        <div className="win-banner">
          🎉 You solved it in <strong>{moves} moves</strong>!
        </div>
      )}

      <div className="grid">
        {cards.map((card, index) => {
          const isSelected = selected.includes(index);
          const isMatched = matched.has(card.uid);
          const isWrong = wrong.includes(index);
          const pairColor = PAIR_COLORS[card.pairId - 1];
          return (
            <div
              key={card.uid}
              className={[
                "card",
                isSelected ? "selected" : "",
                isMatched ? "matched" : "",
                isWrong ? "wrong" : "",
              ]
                .join(" ")
                .trim()}
              style={{ "--pair-color": pairColor }}
              onClick={() => handleClick(index)}
              role="button"
              aria-label={card.text}
            >
              {card.text}
            </div>
          );
        })}
      </div>

      <div className="btn-row">
        <button className="menu-btn" onClick={() => setCategory(null)}>
          ← Menu
        </button>
        <button className="reset-btn" onClick={() => startGame(category)}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
