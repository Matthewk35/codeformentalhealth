import React from 'react';

function Header() {
  const HarveyNashUrl = "https://www.harveynash.co.uk/latest-news/2019-10/uk-tech-needs-a-mental-health-check"
  return (
    <div className="App">
        <h1>Code For Mental Health</h1>
        <h2>Half of tech professionals in the UK (+600,000) have been concerned about their state of mental health due to work</h2>
        <a href={HarveyNashUrl}><h6>- Harvey Nash</h6></a>
    </div>
  );
}

export default Header;
