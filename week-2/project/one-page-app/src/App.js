import React from 'react';
import './App.css';

// Static Values
const siteTitle = "Week 2 Project";

// Site Header
const Header = () => (
  <header>
    <h1>
      <a href="http://react.com">{siteTitle}</a>
    </h1>
  </header>
);

const requirementContent = [
  "Static Header",
  "Main Content Area",
  "Static Footer"
];

const RequirementsList = () => {
  const listElements = requirementContent.map((x, id) => <li key={id}>{x}</li>);

  return <ul>{listElements}</ul>;
};

// Site Content Area
const Main = () => (
  <main>
    <p>This is my content area.</p>
    <RequirementsList />
  </main>
);

// Site Footer Area
const Footer = () => (
  <footer>
    <i>simple one page website with a static header, footer and main content area</i>
    <p>
      <strong>{siteTitle} | 3-3-2020</strong>
    </p>
  </footer>
);

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
