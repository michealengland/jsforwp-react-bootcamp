import React, { useState, useEffect } from "react";

const Practice4 = () => {
  /*
   * 1. Pull the fetch call out into it's own function fetchCat
   * 2. Call fetchCat on initial page load as done currently
   * 3. Add a timer using useEffect that fetches a new cat every 5 seconds
   * 4. Make sure to cancel the timer when component is unmounted
   */

  const [catImg, setCatImg] = useState(``);

  // Fetch the kitties.
  const fetchTheKitties = () => {
    fetch( `https://aws.random.cat/meow` )
      .then( response => response.json() )
      .then( catImg => setCatImg( catImg.file ) )
      .catch( error => console.error( error ) );
  };

  // Get Initial Kitties.
  useEffect(() => {
    fetchTheKitties();
  }, []);

  // Update the Kittes based on interval.
  useEffect(() => {
    // // Example using setTimeout
    // const timer = setTimeout(() => {
    //   fetchTheKitties();
    // }, 5000);

    // return () => clearTimeout(timer);

    // Example using setInterval
    const timer = setInterval(() => {
      fetchTheKitties();
    }, 5000);

    return () => clearInterval(timer);

    // // WARNING!!! This example causes an infinite loop.
    // // This bug is caused by the clearInterval() function
    // // being returned but not executed.
    // const timer2 = setInterval(() => {
    //   fetchTheKitties();
    // }, 5000);

    // return clearInterval( timer2 );
  });

  return (
    <>
      <h1>Random Cat Photo</h1>
      <img src={ catImg } alt="Random Cat Image" width="500" />
    </>
  );
};

export default Practice4;
