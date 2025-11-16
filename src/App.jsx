import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍓",
  "🍍",
  "🥝",
  "🍉",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍓",
  "🍍",
  "🥝",
  "🍉",
  "🍒",
];

function App() {
  const {
    cards,
    moves,
    score,
    isGameComplete,
    handleCardClick,
    initializeGame,
  } = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage score={score} moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            card={card}
            onClick={handleCardClick}
            key={Math.random * 1234}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
