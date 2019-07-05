import React from 'react';

import Contact from './components/contact/Contact.js';


import './assets/sass/style.scss';

function App() {
  let data = [
	  { name: 'Alex', number: '09881234567' },
	  { name: 'Bobby', number: '09329874321' },
	  { name: 'Charlie', number: '09225430011' },
	  { name: 'Dustin', number: '09335553241' }
  ];

  return (
    <div className="contact-wrap">
      <Contact list={data} />
    </div>
  );
}

export default App;
