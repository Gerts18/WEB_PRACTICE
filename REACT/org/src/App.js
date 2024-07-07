import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.js';
import Team from './components/Team/index.js';

/* console.log(Header) */

function App() {

  //Ternario -->  condicion ? true : false
  // corto circuito --> condicion && true

  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div>
      <Header/>
      {displayForm && <Form/> }
      <MiOrg changeDisplay={() => setDisplayForm(!displayForm)} />
      <Team/>  
    </div>
  )
}

export default App
