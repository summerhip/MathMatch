import { useState, useCallback } from "react";
import "./App.css";
import { PAIRS, PAIR_COLORS, PAIRS_PER_GAME } from "./gameData";

function createCards() {
  const picked = [...PAIRS]
    .sort(() => Math.random() - 0.5)
    .slice(0, PAIRS_PER_GAME);
  const cards = [];
  picked.forEach((pair) => {
    cards.push({ uid: `${pair.id}-a`, pairId: pair.id, text: pair.a });
    cards.push({ uid: `${pair.id}-b`, pairId: pair.id, text: pair.b });
  });
  return cards.sort(() => Math.random() - 0.5);
}

function App() {
  const [cards, setCards] = useState(createCards);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [wrong, setWrong] = useState([]);

  const won = matched.size === cards.length;

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

  const reset = () => {
    setCards(createCards());
    setSelected([]);
    setMatched(new Set());
    setMoves(0);
    setLocked(false);
    setWrong([]);
  };

  return (
    <div className="game-wrap">
      <div className="game-header">
        <h1>MathMatch</h1>
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

      <button className="reset-btn" onClick={reset}>
        New Game
      </button>
    </div>
  );
}

export default App;
