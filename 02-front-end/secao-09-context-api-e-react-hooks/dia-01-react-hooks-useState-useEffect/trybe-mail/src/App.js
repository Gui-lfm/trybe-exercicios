import React, { useState } from 'react';
import mailList from './data/mailList';
import List from './components/List';

function App() {
  const [mails, setMails] = useState(mailList);
  return (
    <section>
      <header>
        <h1>TrybeMail</h1>
      </header>

      <List messages={mailList} />
    </section>
  );
}

export default App;
