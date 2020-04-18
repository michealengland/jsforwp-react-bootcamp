import React from 'react';
import './App.css';
import Button from './components/Button';

// Site Header
const Header = ( { siteTitle, siteURL } ) => (
  <header>
    <h1>
      <a href={ siteURL }>{ siteTitle }</a>
    </h1>
  </header>
);

// List of requirements.
const RequirementsList = ( { listItems } ) => {
  const listElements = listItems.map((x, id) => <li key={id}>{x}</li>);

  return <ul>{ listElements }</ul>;
};

// Site Content Area
const Main = ( { content } ) => (
  <main>
    <Button
      label="Toggle Color Theme"
    />
    <p>{ content }</p>
    <RequirementsList
      listItems={ [
        "Replace hard coded data with props",
        "Add an example of state"
      ] }
    />
  </main>
);

// Site Footer Area
const Footer = ( { footerText, projectDate, siteTitle } ) => (
  <footer>
    <i>{ footerText }</i>
    <p>
      <strong>{siteTitle} | { projectDate }</strong>
    </p>
  </footer>
);

function App() {
  const siteTitle = "Week 3 Project";

  return (
    <div className="App">
      <React.Fragment>
        <Header
          siteURL="#"
          siteTitle={ siteTitle }
        />
        <Main
          content="This is my content area."
        />
        <Footer
          footerText="simple one page website with a static header, footer and main content area"
          projectDate="4-12-20"
          siteTitle={ siteTitle }
        />
      </React.Fragment>
    </div>
  );
}

export default App;
