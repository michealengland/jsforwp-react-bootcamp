import React, { useState } from "react";

const Practice2 = () => {
  /*
   * 1. Create homePoints and awayPoints in state using hooks
   * 2. Display the points for the home and away teams
   * 3. Add a button for each team to add one point
   * 4. Add an onClick event to the Reset button that sets both points to zero
   */

  // Setup state for both scores starting with 0.
  const [homePoints, setHomePoints] = useState( 0 );
  const [awayPoints, setAwayPoints] = useState( 0 );

  // Increment each score by one.
  const incrementHomePoints = () => setHomePoints( homePoints + 1 );
  const incrementAwayPoints = () => setAwayPoints( awayPoints + 1 );

  // Set both scores to zero.
  const resetScore = () => (
    setHomePoints( 0 ),
    setAwayPoints( 0 )
  );

  return (
    <>
      <h1>Scoreboard</h1>
      <div
        style={{
          display: `flex`,
          maxWidth: `300px`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <h2>Home: { homePoints }</h2>
          <button onClick={ incrementHomePoints }>Increase Home Point</button>
        </div>
        <div>
          <h2>Away: { awayPoints }</h2>
          <button onClick={ incrementAwayPoints }>Increase Away Point</button>
        </div>
      </div>
      <p>
        <button onClick={ resetScore }>Reset Points</button>
      </p>
    </>
  );
};

export default Practice2;
