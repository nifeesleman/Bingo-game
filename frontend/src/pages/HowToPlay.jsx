import React from 'react';
import './HowToPlay.css';

const HowToPlay = () => {
  return (
    <div className="how-to-play-container">
      <h1 className="page-title">How to Play</h1>
      <p className="description">
        Welcome to Bingo! Here are the rules and instructions to help you get started:
      </p>
      <div className="instructions">
        <h2 className="section-title">1. Start the Game</h2>
        <p>
          To begin, click on the "Start Game" button. You will be given a Bingo card with 25 squares, each containing a random number.
        </p>

        <h2 className="section-title">2. Marking Numbers</h2>
        <p>
          The caller will announce random numbers. When you hear or see a number that is on your card, click on the square to mark it.
        </p>

        <h2 className="section-title">3. Completing a Line</h2>
        <p>
          Your goal is to complete a horizontal, vertical, or diagonal line of marked squares. Once you have completed a line, shout "Bingo!" to win the round.
        </p>

        <h2 className="section-title">4. Winning the Game</h2>
        <p>
          Once you complete a line (or a full card in some variations), the game ends, and you are declared the winner! If multiple players complete a line at the same time, a tie-breaker round will occur.
        </p>

        <h2 className="section-title">5. Tips and Tricks</h2>
        <p>
          - Listen carefully for the announced numbers.<br />
          - Stay alert for patterns, especially diagonal lines.<br />
          - You can mark off multiple cards in the same round for more chances to win!
        </p>
      </div>
      <div className="footer">
        <p>Good luck and enjoy the game! For more help, check out the FAQ page.</p>
      </div>
    </div>
  );
};

export default HowToPlay;
