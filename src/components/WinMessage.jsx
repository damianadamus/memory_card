export const WinMessage = ({ moves, score }) => {
  return (
    <div className="win-message">
      <h2>🎉 Congratulations! You Won! 🎉</h2>
      <p>You completed the game in {moves} moves!</p>
      <p>Your Score is {score}.</p>
    </div>
  );
};
