import React from "react";

const Practice5 = () => {
  const user = {
    id: 1,
    username: "zgordon",
    firstName: "Zac",
    lastName: "Gordon",
    preferredName: "Zac",
    url: "https://zacgordon.com",
    twitter: "zgordon"
  };
  return (
    <div className="practice">
      {/*
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
      <User
        { ...user }
      />
    </div>
  );
};

/*
  2. Destructure all of the props you will need
  3. Pass the firstName and lastName to <FullName />
  4. Pass the username to <Username />
  5. Pass the url and twitter to <Social />
*/
const User = ( props ) => {
  const {
    firstName,
    lastName,
    username,
    twitter,
    url,
  } = props;

  return (
    <div className="user">
      <FullName
        firstName={ firstName }
        lastName={ lastName }
      />
      <Username
        username={ username }
      />
      <Social
        websiteURL={ url }
        twitterURL={ `https://twitter.com/${ twitter }` }
      />
    </div>
  );
};

/*
  6. Destructure the props needed
*/
const FullName = ( { firstName, lastName } ) => (
  <h1>
    {firstName} {lastName}
  </h1>
);

/*
  7. Create a <Username /> component that displays the username
*/
const Username = ( { username } ) => (
  <p>Username: { username }</p>
);

/*
  8. Destructure the props you will need
  9. Make the Website and Twitter links work based on props
*/
const Social = props => {
  const {
    websiteURL,
    twitterURL,
  } = props;

  return (
    <ul className="social">
      <li>
        <a href={ websiteURL }>Website</a>
      </li>
      <li>
        <a href={ twitterURL }>Twitter</a>
      </li>
    </ul>
  );
};

export default Practice5;