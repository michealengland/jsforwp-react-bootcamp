import React, { useEffect, useState } from "react";

const Practice3 = () => {
  /*
   * 1. Create a value in state using hooks called catImg
   * 2. Use useEffect to make an API call to https://aws.random.cat/meow for a random picture of a cat
   * 3. Add the url for the image to the page below the title
   * 4. Pass an empty array of dependencies to useEffect so it only fetches on initial page load
   */

  const [catImg, setCatImg] = useState('');

  // URL to fetch from.
  const url = `https://aws.random.cat/meow`;

  // Fetch the kitties.
  const fetchTheKitties = () => {
    fetch( url )
      // Return a reponse object.
      .then( response => response.json() )
      // Run setCatImg with new response object.
      .then( catImg => {
        console.log( 'catImg:', catImg );
        setCatImg( catImg.file );
      } )
      // Throw Error if not found.
      .catch( error => console.error( error ) );
  };

  // Get posts on initial render and if no posts exist
  useEffect(() => {
    fetchTheKitties();
  }, []);

  return (
    <>
      <h1>Random Cat Photo</h1>
      <img src={ catImg } alt="Random Cat" width="500" />
    </>
  );
};

export default Practice3;
